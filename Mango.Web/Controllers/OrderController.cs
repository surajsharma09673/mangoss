using System.IdentityModel.Tokens.Jwt;
using Mango.Web.Models;
using Mango.Web.Service.IService;
using Mango.Web.Utility;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Mango.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderAPIController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderAPIController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        /// <summary>
        /// Get an order by OrderId.
        /// </summary>
        /// <param name="OrderId">The OrderId to search for.</param>
        /// <returns>Returns an IActionResult with the result of the operation.</returns>
        [HttpGet("GetOrder/{OrderId}")]
        public async Task<IActionResult> GetOrder(int OrderId)
        {
            try
            {
                var response = await _orderService.GetOrders(OrderId);
                if (response != null && response.IsSuccess)
                {
                    // Deserialize the result and return it
                    var data = JsonConvert.DeserializeObject<OrderHeaderDto>(
                        Convert.ToString(response.Result)
                    );
                    response.Result = data;
                    return Ok(response);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest();
        }

        /// <summary>
        /// Get all orders based on the user's role.
        /// </summary>
        /// <returns>Returns an IActionResult with the list of orders.</returns>
        [Authorize]
        [HttpGet("GetAllOrder")]
        public async Task<IActionResult> GetAllOrder()
        {
            IEnumerable<OrderHeaderDto> list;
            string? userId = string.Empty;
            ResponseDto response = new ResponseDto();
            try
            {
                if (!User.IsInRole(SD.RoleAdmin))
                {
                    // Retrieve the userId from the JWT token claims for admins
                    userId = User
                        .Claims.Where(u => u.Type == JwtRegisteredClaimNames.Sub)
                        .FirstOrDefault()
                        ?.Value;
                }

                // Call the service to get all orders for the specified userId
                response = await _orderService.GetAllOrder(userId);

                if (response != null && response.IsSuccess)
                {
                    // Deserialize the result and return it
                    list = JsonConvert.DeserializeObject<List<OrderHeaderDto>>(
                        Convert.ToString(response.Result)
                    );
                    response.Result = list;
                    return Ok(response);
                }
            }
            catch (Exception ex)
            {
                // Handle exceptions and return a BadRequest response
                return BadRequest(ex.Message);
            }

            // Return a BadRequest response if something goes wrong
            return BadRequest(response);
        }

        /// <summary>
        /// Update the status of an order.
        /// </summary>
        /// <param name="OrderId">The OrderId of the order to update.</param>
        /// <param name="newStatus">The new status to set for the order.</param>
        /// <returns>Returns an IActionResult with the result of the operation.</returns>
        [HttpPost("UpdateOrderStatus/{OrderId}")]
        public async Task<IActionResult> UpdateOrderStatus(int OrderId, [FromBody] string newStatus)
        {
            try
            {
                var result = await _orderService.UpdateOrderStatus(OrderId, newStatus);
                if (result != null && result.IsSuccess)
                {
                    return Ok(result);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest();
        }
    }
}

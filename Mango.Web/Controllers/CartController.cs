using System.IdentityModel.Tokens.Jwt;
using Mango.Web.Models;
using Mango.Web.Service.IService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Mango.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;
        private readonly IOrderService _orderService;

        public CartController(ICartService cartService, IOrderService orderService)
        {
            _cartService = cartService;
            _orderService = orderService;
        }

        [HttpPost("upsertCart")]
        public async Task<IActionResult> UpsertCart(CartDto cartDto)
        {
            return Ok();
        }

        [Authorize]
        [HttpPost("removecart")]
        public async Task<IActionResult> RemoveCart([FromBody] int CartDetailId)
        {
            ResponseDto response = new();
            try
            {
                var userId = User
                    .Claims.Where(u => u.Type == JwtRegisteredClaimNames.Sub)
                    ?.FirstOrDefault()
                    ?.Value;
                response = await _cartService.RemoveFromCartAsync(CartDetailId);
                if (response != null && response.IsSuccess)
                {
                    return Ok(response);
                }
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                return BadRequest(response);
            }
            return Ok(response);
        }

        [Authorize]
        [HttpPost("applyCoupon")]
        public async Task<IActionResult> ApplyCoupon([FromBody] CartDto cartDto)
        {
            ResponseDto response = new ResponseDto();
            try
            {
                response = await _cartService.ApplyCouponAsync(cartDto);
                if (response != null && response.IsSuccess)
                {
                    return Ok(response);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(response.Message);
            }
            return Ok(response);
        }

        [Authorize]
        [HttpPost("RemoveCoupon")]
        public async Task<IActionResult> RemoveCoupon([FromBody] CartDto cartDto)
        {
            ResponseDto response = new ResponseDto();
            try
            {
                cartDto.CartHeader.CouponCode = "";
                response = await _cartService.ApplyCouponAsync(cartDto);
                if (response != null && response.IsSuccess)
                {
                    return Ok(response);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(response.Message);
            }
            return Ok(response);
        }

        [HttpPost("GetCart")]
        public async Task<IActionResult> GetCart(CartDto cartDto)
        {
            return Ok();
        }

        [Authorize]
        [HttpGet("getShoppingcart")]
        public async Task<IActionResult> GetCardLoggedInUser()
        {
            var result = await LoadCartDtoBasedOnLoggedInUser();
            return Ok(result);
        }

        [Authorize]
        [HttpPost("EmailCart")]
        public async Task<IActionResult> EmailCart([FromBody] CartDto cartDto)
        {
            ResponseDto response = new ResponseDto();
            try
            {
                var userEmail = User
                    .Claims.Where(u => u.Type == JwtRegisteredClaimNames.Email)
                    ?.FirstOrDefault()
                    ?.Value;
                cartDto.CartHeader.Email = userEmail;
                response = await _cartService.EmailCart(cartDto);
                if (response != null && response.IsSuccess)
                {
                    return Ok(response);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(response.Message);
            }
            return Ok(response);
        }

        private async Task<CartDto> LoadCartDtoBasedOnLoggedInUser()
        {
            var userId = User
                .Claims.Where(u => u.Type == JwtRegisteredClaimNames.Sub)
                ?.FirstOrDefault()
                ?.Value;
            ResponseDto response = await _cartService.GetCartByUserIdAsync(userId);
            if (response != null && response.IsSuccess)
            {
                CartDto cartDto = JsonConvert.DeserializeObject<CartDto>(
                    Convert.ToString(response.Result)
                );
                return cartDto;
            }
            return new CartDto();
        }

        [Authorize]
        [HttpPost("Checkout")]
        public async Task<IActionResult> Checkout([FromBody] CartDto cartDto)
        {
            try
            {
                // Load cart based on logged-in user
                var cart = await LoadCartDtoBasedOnLoggedInUser();

                // Update cart details with new data
                cart.CartHeader.FirstName = cartDto.CartHeader.FirstName;
                cart.CartHeader.LastName = cartDto.CartHeader.LastName;
                cart.CartHeader.Email = cartDto.CartHeader.Email;
                cart.CartHeader.Phone = cartDto.CartHeader.Phone;

                // Create order
                var orderResponse = await _orderService.CreateOrder(cart);
                var orderHeaderDto = JsonConvert.DeserializeObject<OrderHeaderDto>(
                    Convert.ToString(orderResponse.Result)
                );

                if (orderResponse.IsSuccess)
                {
                    // Get Stripe session and redirect to Stripe to place order
                    var stripeRequestDto = new StripeRequestDto
                    {
                        ApprovedUrl =
                            $"{Request.Scheme}://{Request.Host.Value}/#/home/OrderConfirm/{orderHeaderDto.OrderHeaderId}",
                        CancelUrl = $"{Request.Scheme}://{Request.Host.Value}/home/OrderFail",
                        OrderHeader = orderHeaderDto
                    };

                    var stripeResponse = await _orderService.CreateStripeSession(stripeRequestDto);
                    var stripeResponseDto = JsonConvert.DeserializeObject<StripeRequestDto>(
                        Convert.ToString(stripeResponse.Result)
                    );
                    stripeResponse.Result = stripeResponseDto;

                    return Ok(stripeResponse); // Return Stripe session details
                }
                else
                {
                    return BadRequest(orderResponse.Message); // Return error message if order creation failed
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message); // Return internal server error if an exception occurs
            }
        }

        [Authorize]
        [HttpPost("ValidateStripSession")]
        public async Task<IActionResult> ValidateStripSession([FromBody] int OrderHeaderId)
        {
            ResponseDto responseDto = new ResponseDto();
            OrderHeaderDto orderHeaderDto = new();
            try
            {
                var response = await _orderService.ValidateStripeSession(OrderHeaderId);
                responseDto = response;
                if (response.IsSuccess)
                {
                    orderHeaderDto = JsonConvert.DeserializeObject<OrderHeaderDto>(
                        Convert.ToString(response.Result)
                    );
                    responseDto.Result = orderHeaderDto;
                    return Ok(responseDto);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(responseDto);
            }
            return Ok(responseDto);
        }
    }
}

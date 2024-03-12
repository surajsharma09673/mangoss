using Mango.Web.Models;
using Mango.Web.Service.IService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;

namespace Mango.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;
        private readonly IOrderService _orderService;
        public CartController(ICartService cartService,IOrderService orderService)
        {
            _cartService = cartService;
            _orderService = orderService;
        }

        [HttpPost("upsertCart")]
        public async Task<IActionResult> UpsertCart(CartDto cartDto)
        {
            return Ok();
        }

        [HttpPost("removecart")]
        public async Task<IActionResult> RemoveCart([FromBody] int CartDetailId)
        {
            ResponseDto response = new();
            try
            {
                var userId = User.Claims.Where(u => u.Type == JwtRegisteredClaimNames.Sub)?.FirstOrDefault()?.Value;
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
        [HttpPost("applyCoupon")]
        public async Task<IActionResult> ApplyCoupon([FromBody]CartDto cartDto)
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

        [HttpPost("RemoveCoupon")]
        public async Task<IActionResult> RemoveCoupon([FromBody]CartDto cartDto)
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
        [HttpGet("getShoppingcart")]
        public async Task<IActionResult> GetCardLoggedInUser()
        {
            var result = await LoadCartDtoBasedOnLoggedInUser();
            return Ok(result);

        }

        [HttpPost("EmailCart")]
        public async Task<IActionResult> EmailCart([FromBody] CartDto cartDto)
        {
            ResponseDto response = new ResponseDto();
            try
            {
                var userEmail = User.Claims.Where(u => u.Type == JwtRegisteredClaimNames.Email)?.FirstOrDefault()?.Value;
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
            var userId = User.Claims.Where(u => u.Type == JwtRegisteredClaimNames.Sub)?.FirstOrDefault()?.Value;
            ResponseDto response = await _cartService.GetCartByUserIdAsync(userId);
            if (response != null && response.IsSuccess)
            {

                CartDto cartDto = JsonConvert.DeserializeObject<CartDto>(Convert.ToString(response.Result));
                return cartDto;
            }
            return new CartDto();

        }

        [HttpPost("Checkout")]
        public async Task<IActionResult> Checkout([FromBody] CartDto cartDto)
        {
            ResponseDto response = new ResponseDto();
            try
            {
                response = await _orderService.CreateOrder(cartDto);
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

    }
}

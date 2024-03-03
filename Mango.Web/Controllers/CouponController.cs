using Mango.Services.ProductApi.Models.Dto;
using Mango.Web.Models;
using Mango.Web.Service.IService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Mango.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CouponController : ControllerBase
    {
        private readonly IcouponService _couponService;

        public CouponController(IcouponService CouponService)
        {
            _couponService = CouponService;
        }

        [HttpGet("GetCoupon")]
        public async Task<IActionResult> GetCoupon() {
            try
            {
                List<CouponDto>? list = new();
                ResponseDto? response = await _couponService.GetAllCouponAsync();
                if (response != null && response.IsSuccess)
                {
                    list = JsonConvert.DeserializeObject<List<CouponDto>>(Convert.ToString(response.Result));
                    return Ok(list);
                }
                else
                {
                    return BadRequest(response.Message);
                }
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
           
        }

        [HttpPost("CreateCoupon")]
        public async Task<IActionResult> CreateCoupon([FromBody] CouponDto model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                ResponseDto? response = await _couponService.CreateCouponAsync(model);
                if(response != null && response.IsSuccess)
                {
                    return Ok(response);
                }
                else
                {
                    
                    return BadRequest(response);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest();
        }
        [HttpPost]
        [Route("UpdateCoupon")]
        public async Task<IActionResult> UpdateCoupon([FromBody] CouponDto model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                ResponseDto? response = await _couponService.UpdateCouponAsync(model);
                if (response != null && response.IsSuccess)
                {
                    return Ok(response);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return BadRequest();
        }


        [HttpPost]
        [Route("DeleteCoupon")]
        public async Task<IActionResult> DeleteCoupon([FromBody] CouponDto model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }

                ResponseDto? response = await _couponService.DeleteCouponByIdAsync(model.CouponId);
                if (response != null && response.IsSuccess)
                {
                    return Ok(response);
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

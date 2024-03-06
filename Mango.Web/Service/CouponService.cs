using Mango.Web.Models;
using Mango.Web.Service.IService;
using Mango.Web.Utility;

namespace Mango.Web.Service
{
    public class CouponService : IcouponService
    {
        private readonly IBaseService _baseService;

        public CouponService(IBaseService baseService)
        {
            _baseService = baseService;
        }

        async Task<ResponseDto> IcouponService.CreateCouponAsync(CouponDto CouponData)
        {
            return await _baseService.SendAsync(new RequestDto
            {
                ApiType = SD.ApiType.POST,
                Data = CouponData,
                Url = $"{SD.CouponAPIBase}/api/CouponAPI"
            });

        }

        async Task<ResponseDto> IcouponService.DeleteCouponByIdAsync(int id)
        {
            return await _baseService.SendAsync(new RequestDto
            {
                ApiType = SD.ApiType.DELETE,
                Url = $"{SD.CouponAPIBase}/api/CouponAPI?Id={id}"
        });
        }

        async Task<ResponseDto> IcouponService.GetAllCouponAsync()
        {
            return await _baseService.SendAsync(new RequestDto
            {
                ApiType = SD.ApiType.GET,
                Url = $"{SD.CouponAPIBase}/api/CouponAPI/"
            });
        }
        async Task<ResponseDto> IcouponService.GetCouponAsync(string CouponCode)
        {

            return await _baseService.SendAsync(new RequestDto
            {
                ApiType = SD.ApiType.GET,
                Url = $"{SD.CouponAPIBase}/api/CouponAPI/GetByCode/{CouponCode}"
            });
        }

        async Task<ResponseDto> IcouponService.GetCouponByIdAsync(int id)
        {
            return await _baseService.SendAsync(new RequestDto
            {
                ApiType = SD.ApiType.POST,
                Url = $"{SD.CouponAPIBase}/api/CouponAPI/{id}"
            });

        }

        async Task<ResponseDto> IcouponService.UpdateCouponAsync(CouponDto CouponData)
        {
            return await _baseService.SendAsync(new RequestDto
            {
                ApiType = SD.ApiType.PUT,
                Data = CouponData,
                Url = $"{SD.CouponAPIBase}/api/CouponAPI"
            });
        }
    }
}

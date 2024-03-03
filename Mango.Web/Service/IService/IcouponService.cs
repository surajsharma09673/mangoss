using Mango.Web.Models;

namespace Mango.Web.Service.IService
{
    public interface IcouponService
    {
        Task<ResponseDto> GetCouponAsync(String CouponCode);
        Task<ResponseDto> GetAllCouponAsync();
        Task<ResponseDto> GetCouponByIdAsync(int id);
        Task<ResponseDto> CreateCouponAsync(CouponDto CouponCode);
        Task<ResponseDto> UpdateCouponAsync(CouponDto CouponCode);
        Task<ResponseDto> DeleteCouponByIdAsync(int id);
    }
}

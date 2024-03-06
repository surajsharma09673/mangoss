using Mango.Services.ShoppingCartAPI.Models.Dto;
using Mongo.Services.ShoppingCartAPI.Models.Dto;

namespace Mango.Services.ShoppingCartAPI.Service.IService
{
    public interface ICouponService
    {
        Task<CouponDto> GetCouponsAsync(string Couponcode );
    }
}

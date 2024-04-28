using Mango.Web.Models;

namespace Mango.Web.Service.IService
{
    public interface IOrderService
    {
        Task<ResponseDto> CreateOrder(CartDto cart);
        Task<ResponseDto> CreateStripeSession(StripeRequestDto stripeRequestDto);
        Task<ResponseDto> ValidateStripeSession(int OrderHeaderId);
        Task<ResponseDto> GetAllOrder(string? Userid);
        Task<ResponseDto> GetOrders(int? OrderId);
        Task<ResponseDto> UpdateOrderStatus(int? OrderId, string newStatus);
    }
}

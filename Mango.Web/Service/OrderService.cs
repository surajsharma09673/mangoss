using Mango.Web.Models;
using Mango.Web.Service.IService;
using Mango.Web.Utility;

namespace Mango.Web.Service
{
    public class OrderService : IOrderService
    {
        private readonly IBaseService _baseService;

        public OrderService(IBaseService baseService)
        {
            _baseService = baseService;
        }

        public async Task<ResponseDto> CreateOrder(CartDto cart)
        {
            return await _baseService.SendAsync(
                new RequestDto
                {
                    ApiType = SD.ApiType.POST,
                    Data = cart,
                    Url = $"{SD.OrderAPIBase}/api/OrderAPI/CreateOrder"
                }
            );
        }

        public async Task<ResponseDto> CreateStripeSession(StripeRequestDto stripeRequestDto)
        {
            return await _baseService.SendAsync(
                new RequestDto
                {
                    ApiType = SD.ApiType.POST,
                    Data = stripeRequestDto,
                    Url = $"{SD.OrderAPIBase}/api/OrderAPI/CreateStripeSession"
                }
            );
        }

        public async Task<ResponseDto> GetAllOrder(string? Userid)
        {
            return await _baseService.SendAsync(
                new RequestDto
                {
                    ApiType = SD.ApiType.GET,
                    Url = $"{SD.OrderAPIBase}/api/OrderAPI/GetOrders?userId={Userid}"
                }
            );
        }

        public async Task<ResponseDto> GetOrders(int? OrderId)
        {
            return await _baseService.SendAsync(
                new RequestDto
                {
                    ApiType = SD.ApiType.GET,
                    Url = $"{SD.OrderAPIBase}/api/OrderAPI/GetOrder?Id={OrderId}"
                }
            );
        }

        public async Task<ResponseDto> UpdateOrderStatus(int? OrderId, string newStatus)
        {
            return await _baseService.SendAsync(
                new RequestDto
                {
                    ApiType = SD.ApiType.POST,
                    Data = newStatus,
                    Url = $"{SD.OrderAPIBase}/api/OrderAPI/UpdateOrderStatus?orderId={OrderId}"
                }
            );
        }

        public async Task<ResponseDto> ValidateStripeSession(int OrderHeaderId)
        {
            return await _baseService.SendAsync(
                new RequestDto
                {
                    ApiType = SD.ApiType.POST,
                    Data = OrderHeaderId,
                    Url = $"{SD.OrderAPIBase}/api/OrderAPI/ValidateStripeSession"
                }
            );
        }
    }
}

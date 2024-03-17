using AutoMapper;
using Mango.MessageBus;
using Mango.Services.OrderAPI.Data;
using Mango.Services.OrderAPI.Models;
using Mango.Services.OrderAPI.Models.Dto;
using Mango.Services.OrderAPI.Service.IService;
using Mango.Services.OrderAPI.Utility;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Stripe;
using Stripe.Checkout;

namespace Mango.Services.OrderAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderAPIController : ControllerBase
    {
        private ResponseDto _responseDto;
        private IMapper _Mapper;
        private readonly AppDbContext _dbContext;
        private readonly IProductService _productService;
        private readonly IConfiguration _Config;
        private readonly IMessageBus _msgBus;

        // Constructor
        public OrderAPIController(
            AppDbContext dbContext,
            IProductService productService,
            IMapper mapper,
            IConfiguration configuration,
            IMessageBus messageBus
        )
        {
            _dbContext = dbContext;
            _productService = productService;
            _Mapper = mapper;
            _Config = configuration;
            _msgBus = messageBus;

            _responseDto = new ResponseDto();
        }

        /// <summary>
        /// GET: api/OrderAPI/GetOrders
        /// Get orders based on user ID (admin can get all orders)
        /// </summary>
        [HttpGet("GetOrders")]
        public async Task<ResponseDto> GetOrders(string userId = "")
        {
            try
            {
                IEnumerable<OrderHeader> ordersList;
                if (User.IsInRole(SD.RoleAdmin))
                {
                    // Admin can get all orders
                    ordersList = _dbContext
                        .OrderHeaders.Include(u => u.OrderDetails)
                        .OrderByDescending(u => u.OrderHeaderId)
                        .ToList();
                }
                else
                {
                    // Regular user gets orders based on their user ID
                    ordersList = _dbContext
                        .OrderHeaders.Include(u => u.OrderDetails)
                        .Where(u => u.UserId == userId)
                        .OrderByDescending(u => u.OrderHeaderId)
                        .ToList();
                }
                var ordersDto = _Mapper.Map<IEnumerable<OrderHeaderDto>>(ordersList);
                _responseDto.Result = ordersDto;
                return _responseDto;
            }
            catch (Exception ex)
            {
                _responseDto.IsSuccess = false;
                _responseDto.Message = ex.Message;
            }
            return _responseDto;
        }

        /// <summary>
        /// GET: api/OrderAPI/GetOrders/{id:int}
        /// Get order details by order ID
        /// </summary>
        [HttpGet("GetOrder/{Id:int}")]
        public async Task<ResponseDto> GetOrder(int Id)
        {
            try
            {
                OrderHeader orderHeader = _dbContext
                    .OrderHeaders.Include(u => u.OrderDetails)
                    .FirstOrDefault(u => u.OrderHeaderId == Id);
                if (orderHeader == null)
                {
                    _responseDto.IsSuccess = false;
                    _responseDto.Message = "Order not found.";
                    return _responseDto;
                }
                var orderDto = _Mapper.Map<OrderHeaderDto>(orderHeader);
                _responseDto.Result = orderDto;
                return _responseDto;
            }
            catch (Exception ex)
            {
                _responseDto.IsSuccess = false;
                _responseDto.Message = ex.Message;
            }
            return _responseDto;
        }

        /// <summary>
        /// POST: api/OrderAPI/CreateOrder
        /// Create a new order
        /// </summary>
        [Authorize]
        [HttpPost("CreateOrder")]
        /// <summary>
        /// POST: api/OrderAPI/CreateStripeSession
        /// Create a new Stripe session
        /// </summary>
        [Authorize]
        [HttpPost("CreateStripeSession")]
        public async Task<ResponseDto> CreateStripeSession(StripeRequestDto stripeRequestDto)
        {
            try
            {
                // Create session options for Stripe Checkout
                var options = new Stripe.Checkout.SessionCreateOptions
                {
                    SuccessUrl = stripeRequestDto.ApprovedUrl,
                    CancelUrl = stripeRequestDto.CancelUrl,
                    Mode = "payment",
                };
                var discount = new List<SessionDiscountOptions>()
                {
                    new SessionDiscountOptions { Coupon = stripeRequestDto.OrderHeader.CouponCode, }
                };
                // Create line items for session
                foreach (var item in stripeRequestDto.OrderHeader.OrderDetails)
                {
                    var sessionLineItem = new SessionLineItemOptions
                    {
                        PriceData = new SessionLineItemPriceDataOptions
                        {
                            UnitAmount = (long)(item.Price * 100),
                            Currency = "inr",
                            ProductData = new SessionLineItemPriceDataProductDataOptions
                            {
                                Name = item.ProductName,
                            },
                        },
                        Quantity = item.Count
                    };
                    if (options.LineItems == null)
                    {
                        options.LineItems = new List<SessionLineItemOptions>();
                    }
                    options.LineItems.Add(sessionLineItem);
                }
                // Apply discounts if any
                if (stripeRequestDto.OrderHeader.Discount > 0)
                {
                    options.Discounts = discount;
                }
                // Create Stripe session
                var service = new Stripe.Checkout.SessionService();
                Session session = service.Create(options);
                stripeRequestDto.StripeSessionUrl = session.Url;
                // Update order with Stripe session ID
                OrderHeader orderHeader = _dbContext.OrderHeaders.First(u =>
                    u.OrderHeaderId == stripeRequestDto.OrderHeader.OrderHeaderId
                );
                orderHeader.StripsSessionId = session.Id;
                await _dbContext.SaveChangesAsync();
                _responseDto.Result = stripeRequestDto;
            }
            catch (Exception ex)
            {
                _responseDto.IsSuccess = true;
                _responseDto.Message = ex.Message;
            }
            return _responseDto;
        }

        /// <summary>
        /// POST: api/OrderAPI/ValidateStripeSession
        /// Validate a Stripe session
        /// </summary>
        [Authorize]
        [HttpPost("ValidateStripeSession")]
        public async Task<ResponseDto> ValidateStripeSession([FromBody] int orderHeaderId)
        {
            try
            {
                // Retrieve order header from database
                OrderHeader orderHeader = _dbContext.OrderHeaders.First(u =>
                    u.OrderHeaderId == orderHeaderId
                );
                string sessionId = orderHeader.StripsSessionId;
                if (sessionId != null)
                {
                    // Retrieve session details from Stripe
                    var service = new SessionService();
                    Session session = service.Get(sessionId);
                    PaymentIntentService paymentIntentService = new PaymentIntentService();
                    if (session.PaymentIntentId != null)
                    {
                        PaymentIntent paymentIntent = paymentIntentService.Get(
                            session.PaymentIntentId
                        );
                        if (paymentIntent.Status == "succeeded")
                        {
                            // Payment was successful, update order status
                            orderHeader.PayementIntentId = paymentIntent.Id;
                            orderHeader.Status = SD.Status_Approved;
                            _dbContext.SaveChanges();

                            // Send reward DTO
                            RewardDto rewardDto = new RewardDto()
                            {
                                OrderId = orderHeader.OrderHeaderId,
                                RewardActivity = Convert.ToInt32(orderHeader.OrderTotal),
                                UserId = orderHeader.UserId
                            };
                            string topicName = _Config.GetValue<string>(
                                "TopicAndQueueNames:ordercreatedTopic"
                            );

                            // Send message to Service bus azure
                            await _msgBus.PublishMessage(rewardDto, topicName);
                            _responseDto.Result = _Mapper.Map<OrderHeaderDto>(orderHeader);
                        }
                    }
                    else
                    {
                        _responseDto.IsSuccess = false;
                    }
                }
                else
                {
                    _responseDto.IsSuccess = false;
                }
            }
            catch (Exception ex)
            {
                _responseDto.IsSuccess = false;
                _responseDto.Message = ex.Message;
            }
            return _responseDto;
        }

        /// <summary>
        /// POST: api/OrderAPI/UpdateOrderStatus/{orderId:int}
        /// Update order status by order ID
        /// </summary>
        [Authorize]
        [HttpPost("UpdateOrderStatus/{orderId:int}")]
        public async Task<ResponseDto> UpdateOrderStatus(int orderId, [FromBody] string newStatus)
        {
            try
            {
                OrderHeader orderHeader = _dbContext.OrderHeaders.FirstOrDefault(u =>
                    u.OrderHeaderId == orderId
                );
                if (orderHeader != null)
                {
                    if (newStatus == SD.Status_Cancelled)
                    {
                        var option = new RefundCreateOptions
                        {
                            Reason = RefundReasons.RequestedByCustomer,
                            PaymentIntent = orderHeader.PayementIntentId,
                        };
                        var service = new RefundService();
                        Refund refund = service.Create(option);
                        orderHeader.Status = newStatus;
                    }
                    else
                    {
                        orderHeader.Status = newStatus;
                    }
                    await _dbContext.SaveChangesAsync();
                }
                return _responseDto;
            }
            catch (Exception ex)
            {
                _responseDto.IsSuccess = false;
                _responseDto.Message = ex.Message;
            }
            return _responseDto;
        }
    }
}

using AutoMapper;
using Mango.Services.ShoppingCartAPI.Models;
using Mango.Services.ShoppingCartAPI.Models.Dto;
using Mango.Services.ShoppingCartAPI.Service.IService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mongo.Services.ShoppingCartAPI.Data;
using Mongo.Services.ShoppingCartAPI.Models.Dto;
using System.Reflection.PortableExecutable;

namespace Mango.Services.ShoppingCartAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartAPIController : ControllerBase
    {
        ResponseDto _response;
        private IMapper _mapper;
        private readonly AppDbContext _appDbContext;
        private readonly IProductService _productService;

        public CartAPIController(IMapper mapper, AppDbContext appDbContext,IProductService productService)
        {
            _mapper = mapper;
            _appDbContext = appDbContext;
            _productService = productService;
            _response = new ResponseDto();
        }

        [HttpGet("GetCart/{userId}")]
        public async Task<ResponseDto> GetCart(string userId)
        {
            try
            {
                CartDto cart = new()
                {
                    CartHeader = _mapper.Map<CartHeader>(_appDbContext.CartHeaders.First(u => u.UserId == userId))

                };
                cart.CartDetails = _mapper.Map<IEnumerable<CartDetailsDto>>(_appDbContext.CartDetails.Where(
                    u => u.CartHeaderId == cart.CartHeader.CartHeaderId));
                IEnumerable<ProductDto> productDto = await _productService.GetProductsAsync();
                foreach(var item in cart.CartDetails)
                {
                    item.ProductDto=productDto.FirstOrDefault(u=>u.ProductId==item.ProductId);
                    cart.CartHeader.CartTotal += (item.Count * item.ProductDto.Price);
                }
                _response.Result = cart;

            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

        [HttpPost("CartUpsert")]
        public async Task<ResponseDto> CartUpsert(CartDto cartDto)
        {
            try
            {
                var CartHeaderFromDB = await _appDbContext.CartHeaders.FirstOrDefaultAsync(
                    u => u.UserId == cartDto.CartHeader.UserId);
                if (CartHeaderFromDB == null)
                {
                    //create header and details
                    CartHeader cartHeader = _mapper.Map<CartHeader>(cartDto.CartHeader);
                    _appDbContext.CartHeaders.Add(cartHeader);
                    await _appDbContext.SaveChangesAsync();
                    cartDto.CartDetails.First().CartHeaderId = cartHeader.CartHeaderId;
                    _appDbContext.CartDetails.Add(_mapper.Map<CartDetails>(cartDto.CartDetails.First()));
                    await _appDbContext.SaveChangesAsync();

                }
                else
                {
                    //if header is not null
                    //check if details has same product
                    var cartDetailFromDb = await _appDbContext.CartDetails.FirstOrDefaultAsync(
                        u => u.ProductId == cartDto.CartDetails.First().ProductId && u.CartHeaderId == CartHeaderFromDB.CartHeaderId);
                    if (cartDetailFromDb == null)
                    {
                        //create cartdetail
                        cartDto.CartDetails.First().CartHeaderId = CartHeaderFromDB.CartHeaderId;
                        _appDbContext.CartDetails.Add(_mapper.Map<CartDetails>(cartDto.CartDetails.First()));
                        await _appDbContext.SaveChangesAsync();
                    }
                    else
                    {
                        //update count in cart details
                        cartDto.CartDetails.First().Count += cartDetailFromDb.Count;
                        cartDto.CartDetails.First().CartHeaderId = cartDetailFromDb.CartHeaderId;
                        cartDto.CartDetails.First().CartDetailId = cartDetailFromDb.CartDetailId;
                        _appDbContext.CartDetails.Update(_mapper.Map<CartDetails>(cartDto.CartDetails.First()));
                        await _appDbContext.SaveChangesAsync();
                    }
                }
                _response.Result = cartDto;
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message;
                _response.IsSuccess = false;
            }
            return _response;
        }
        [HttpPost("RemoveCart")]
        public async Task<ResponseDto> RemoveCart([FromBody] int cartDetailId)
        {
            try
            {
                CartDetails cartDetails = _appDbContext.CartDetails.First(u => u.CartDetailId == cartDetailId);
                var totalCountOfCartItem = _appDbContext.CartDetails.Where(u => u.CartHeaderId == cartDetails.CartHeaderId).Count();
                _appDbContext.CartDetails.Remove(cartDetails);
                if (totalCountOfCartItem == 1)
                {
                    //create header and details
                    var CartHeaderToRemove = await _appDbContext.CartHeaders.FirstOrDefaultAsync(
                        u => u.CartHeaderId == cartDetails.CartHeaderId);
                    _appDbContext.CartHeaders.Remove(CartHeaderToRemove);
                }
                await _appDbContext.SaveChangesAsync();
                _response.Result = true;
            }
            catch (Exception ex)
            {
                _response.Message = ex.Message;
                _response.IsSuccess = false;
            }
            return _response;
        }

        [HttpPost("ApplyCoupon")]
        public async Task<object> ApplyCoupon([FromBody] CartDto cartDto)
        {
            try
            {
                var cartFromDb = _appDbContext; 
               
            }catch (Exception ex)
            {
                _response.Message = ex.Message;
                _response.IsSuccess = false;
            }
            return new object();
        }
    }
}

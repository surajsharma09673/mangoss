using AutoMapper;
using Mango.Services.ProductApi.Models;
using Mango.Services.ProductApi.Models.Dto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Mongo.Services.ProductApi.Data;

namespace Mango.Services.ProductApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductApiController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly IMapper _mapper;
        private ResponseDto _response;

        public ProductApiController(AppDbContext appDbContext, IMapper mapper)
        {
            _appDbContext=appDbContext;
            _mapper=mapper; 
            _response = new ResponseDto();
        }
        [HttpGet]
        public  ResponseDto GetProduct()
        {
            try
            {
                IEnumerable<Product> obj = _appDbContext.Products.ToList();
                _response.Result = _mapper.Map<IEnumerable<ProductDto>>(obj);

            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

        [HttpGet]
        [Route("{id:int}")]
        public ResponseDto GetProductById(int id)
        {
            try
            {
               Product obj = _appDbContext.Products.FirstOrDefault(u=>u.ProductId==id);
                _response.Result = _mapper.Map<ProductDto>(obj);

            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

        [HttpPost]
        [Authorize(Roles = "ADMIN")]
        public ResponseDto CreateProduct([FromBody] ProductDto productDto)
        {
            try
            {
                Product obj = _mapper.Map<Product>(productDto);
                _appDbContext.Products.Add(obj);
                _appDbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

        [HttpPut]
        [Authorize(Roles = "ADMIN")]
        public ResponseDto UpdateProduct(ProductDto productDto)
        {
            try
            {
                Product obj = _mapper.Map<Product>(productDto);
                _appDbContext.Products.Update(obj);
                _appDbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }
        [HttpDelete]
        [Route("{Id:int}")]
        [Authorize(Roles = "ADMIN")]
        public ResponseDto DeleteProduct(int Id)
        {
            try
            {

                Product obj = _appDbContext.Products.First(u => u.ProductId == Id);
                _appDbContext.Products.Remove(obj);
                _appDbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }
    }
}

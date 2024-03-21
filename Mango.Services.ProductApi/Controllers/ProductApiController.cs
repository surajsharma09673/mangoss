using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using AutoMapper;
using Mango.Services.ProductApi.Models;
using Mango.Services.ProductApi.Models.Dto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mongo.Services.ProductApi.Data;
using static Mango.Services.ProductApi.Utility.SD;

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
            _appDbContext = appDbContext;
            _mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public ResponseDto GetProduct()
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
        public async Task<ResponseDto> GetProductById(int id)
        {
            try
            {
                Product obj = await _appDbContext.Products.FirstOrDefaultAsync(u =>
                    u.ProductId == id
                );
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
        public ResponseDto CreateProduct([FromForm] ProductDto productDto)
        {
            return HandleProductAction(productDto, ActionType.Create);
        }

        [HttpPut]
        [Authorize(Roles = "ADMIN")]
        public ResponseDto UpdateProduct(ProductDto productDto)
        {
            return HandleProductAction(productDto, ActionType.Update);
        }

        [HttpDelete]
        [Route("{Id:int}")]
        [Authorize(Roles = "ADMIN")]
        public ResponseDto DeleteProduct(int Id)
        {
            try
            {
                Product obj = _appDbContext.Products.First(u => u.ProductId == Id);
                HandleImageDeletion(obj.ImageLocalPath);
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

        private ResponseDto HandleProductAction(ProductDto productDto, ActionType actionType)
        {
            try
            {
                Product product = _mapper.Map<Product>(productDto);
                if (actionType == ActionType.Create)
                {
                    _appDbContext.Products.Add(product);
                    _appDbContext.SaveChanges();
                }
                else if (actionType == ActionType.Update)
                {
                    _appDbContext.Products.Update(product);
                    HandleImageDeletion(product.ImageLocalPath);
                }

                HandleImageUpload(productDto, product);
                _response.Result = _mapper.Map<ProductDto>(product);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.Message = ex.Message;
            }
            return _response;
        }

        private void HandleImageUpload(ProductDto productDto, Product product)
        {
            if (productDto.Image != null)
            {
                string filename = product.ProductId + Path.GetExtension(productDto.Image.FileName);
                string filepath = @"wwwroot\ProductImages\" + filename;
                var filePathDirectory = Path.Combine(Directory.GetCurrentDirectory(), filepath);
                using (var filestream = new FileStream(filePathDirectory, FileMode.Create))
                {
                    productDto.Image.CopyTo(filestream);
                }
                var baseurl =
                    $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.Value}{HttpContext.Request.PathBase.Value}";
                product.ImageLocalPath = filepath;
                product.ImageUrl = baseurl + "/ProductImages/" + filename;
                // Update the product's ImageUrl in the database
                _appDbContext.Products.Update(product);
                _appDbContext.SaveChanges();
            }
            else
            {
                product.ImageUrl = "https://placehold.co/600x400";
                // Update the product's ImageUrl in the database
                _appDbContext.Products.Update(product);
                _appDbContext.SaveChanges();
            }
        }

        private void HandleImageDeletion(string imageLocalPath)
        {
            if (!string.IsNullOrEmpty(imageLocalPath))
            {
                var oldFilePathDirectory = Path.Combine(
                    Directory.GetCurrentDirectory(),
                    imageLocalPath
                );
                FileInfo file = new FileInfo(oldFilePathDirectory);
                if (file.Exists)
                {
                    file.Delete();
                }
            }
        }
    }
}

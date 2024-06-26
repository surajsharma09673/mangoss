﻿using Mango.Web.Models;
using Mango.Web.Service.IService;
using Mango.Web.Utility;

namespace Mango.Web.Service
{
    public class ProductService : IProductService
    {
        private readonly IBaseService _baseService;

        public ProductService(IBaseService baseService)
        {
            _baseService = baseService;
        }

        public async Task<ResponseDto> CreateProductAsync(ProductDto productDto)
        {
            return await _baseService.SendAsync(
                new RequestDto
                {
                    ApiType = SD.ApiType.POST,
                    Data = productDto,
                    Url = $"{SD.ProductAPIBase}/api/ProductApi",
                    ContentType = SD.ContentType.MultipartFormData
                }
            );
        }

        public async Task<ResponseDto> DeleteProductByIdAsync(int id)
        {
            return await _baseService.SendAsync(
                new RequestDto
                {
                    ApiType = SD.ApiType.DELETE,
                    Url = $"{SD.ProductAPIBase}/api/ProductApi/{id}"
                }
            );
        }

        public async Task<ResponseDto> GetAllProductAsync()
        {
            return await _baseService.SendAsync(
                new RequestDto
                {
                    ApiType = SD.ApiType.GET,
                    Url = $"{SD.ProductAPIBase}/api/ProductApi"
                }
            );
        }

        public async Task<ResponseDto> GetProductByIdAsync(int id)
        {
            return await _baseService.SendAsync(
                new RequestDto
                {
                    ApiType = SD.ApiType.GET,

                    Url = $"{SD.ProductAPIBase}/api/ProductApi/{id}"
                }
            );
        }

        public async Task<ResponseDto> UpdateProductAsync(ProductDto productDto)
        {
            return await _baseService.SendAsync(
                new RequestDto
                {
                    ApiType = SD.ApiType.PUT,
                    Data = productDto,
                    Url = $"{SD.ProductAPIBase}/api/ProductApi",
                    ContentType = SD.ContentType.MultipartFormData
                }
            );
        }
    }
}

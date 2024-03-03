using AutoMapper;
using Mango.Services.ProductApi.Models;
using Mango.Services.ProductApi.Models.Dto;


namespace Mongo.Services.ProductApi
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<ProductDto, Product>().ReverseMap();
                config.CreateMap<Product, ProductDto>().ReverseMap();
            });
            return mappingConfig;
        }
    }
}

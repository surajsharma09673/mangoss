using Mango.Services.ProductApi.Models.Dto;
using Mango.Web.Models;

namespace Mango.Web.Service.IService
{
    public interface IProductService
    {
        Task<ResponseDto> GetProductByIdAsync(int id);
        Task<ResponseDto> GetAllProductAsync();
        Task<ResponseDto> CreateProductAsync(ProductDto productDto);
        Task<ResponseDto> UpdateProductAsync(ProductDto productDto);
        Task<ResponseDto> DeleteProductByIdAsync(int id);
    }
}

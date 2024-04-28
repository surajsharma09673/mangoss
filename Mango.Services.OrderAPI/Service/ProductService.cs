using Mango.Services.OrderAPI.Models.Dto;
using Mango.Services.OrderAPI.Service.IService;
using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace Mango.Services.OrderAPI.Service
{
    public class ProductService : IProductService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public ProductService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public async Task<IEnumerable<ProductDto>> GetProductsAsync()
        {
            var client = _httpClientFactory.CreateClient("Product");
            var response = await client.GetAsync($"/api/ProductApi");
            var apicontent = await response.Content.ReadAsStringAsync();
            var resp = JsonConvert.DeserializeObject<ResponseDto>(apicontent);
            if (resp != null && resp.IsSuccess)
            {
                return JsonConvert.DeserializeObject<IEnumerable<ProductDto>>(Convert.ToString(resp.Result));

            }
            return new List<ProductDto>();
        }

      
    }
}

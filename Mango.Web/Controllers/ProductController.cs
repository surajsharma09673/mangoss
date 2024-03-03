using Mango.Services.ProductApi.Models.Dto;
using Mango.Web.Models;
using Mango.Web.Service.IService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Mango.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService= productService;
        }
        [HttpGet("GetAllProduct")]
        public async Task<IActionResult> GetAllProduct()
        {
            List<ProductDto>? list = new();
            try
            {
                ResponseDto response =await _productService.GetAllProductAsync();

                if(response !=null && response.IsSuccess==true) {
                    list = JsonConvert.DeserializeObject<List<ProductDto>>(Convert.ToString(response.Result));
                    return Ok(list);
                }
                else
                {
                    return BadRequest(response);
                }

            }catch (Exception ex) {
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("GetProductByID/{id}")]
        
        public async Task<IActionResult> GetProductByID(int id)
        {
            try
            {
                ProductDto? list = new();
                ResponseDto response = await _productService.GetProductByIdAsync(id);
                if (response != null && response.IsSuccess == true)
                {
                    list = JsonConvert.DeserializeObject<ProductDto>(Convert.ToString(response.Result));
                    return Ok(list);
                }
                else
                {
                    return BadRequest(response);
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("CreateProduct")]
        public async Task<IActionResult> CreateProduct([FromBody] ProductDto product)
        {
            try
            {

                ResponseDto response = await _productService.CreateProductAsync(product);
                if (response != null && response.IsSuccess == true)
                {
                    return Ok(response);
                }
                else
                {
                    return BadRequest(response);
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("UpdateProduct")]
        public async Task<IActionResult> UpdateProduct([FromBody] ProductDto product)
        {
            try
            {

                ResponseDto response = await _productService.UpdateProductAsync(product);
                if (response != null && response.IsSuccess == true)
                {
                    return Ok(response);
                }
                else
                {
                    return BadRequest(response);
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("DeleteProduct")]
        
        public async Task<IActionResult> DeleteProduct([FromBody] ProductDto product)
        {
            try
            {

                ResponseDto response = await _productService.DeleteProductByIdAsync(product.ProductId);
                if (response != null && response.IsSuccess == true)
                {
                    return Ok(response);
                }
                else
                {
                    return BadRequest(response);
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

    }
}

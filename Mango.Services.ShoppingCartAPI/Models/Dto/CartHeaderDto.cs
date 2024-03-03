
namespace Mango.Services.ShoppingCartAPI.Models.Dto
{
    public class CartHeaderDto
    {
       
        public int CartHeaderId { get; set; }
        public String UserId { get; set; }
        public String CouponCode { get; set; }
        public double Discount { get; set; }
        public double CartTotal { get; set; }
    }
}

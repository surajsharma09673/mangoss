﻿namespace Mango.Services.EmailAPI.Models.Dto
{
    public class CartDetailsDto
    {
        public int CartDetailId { get; set; }

        public int CartHeaderId { get; set; }
        public CartHeaderDto? CartHeader { get; set; }
        public int ProductId { get; set; }
        public ProductDto? ProductDto { get; set; }
        public int Count { get; set; }
    }
}

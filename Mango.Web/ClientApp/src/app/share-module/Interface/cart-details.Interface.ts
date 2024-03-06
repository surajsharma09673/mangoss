import { IProduct } from "./Iproduct.model";
import { ICartHeader } from "./cart-header.interface";

// cart-item.interface.ts
export interface ICartDetails {
    cartDetailId: number;
    cartHeaderId: number;
    cartHeader: ICartHeader;
    productId: number;
    productDto: IProduct;
    count: number;
  }
  
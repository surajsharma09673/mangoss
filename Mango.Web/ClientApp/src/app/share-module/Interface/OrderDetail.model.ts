import { IProduct } from "./Iproduct.model";

export interface IOrderDetail {
    orderDetailId: number;
    orderHeaderId: number;
    productId: number;
    productDto: IProduct;
    count: number;
    productName: string;
    price: number;
  }
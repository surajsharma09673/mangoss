import { IOrderDetail } from "./OrderDetail.model";

export interface IOrderList {
    couponCode: string;
    discount: number;
    email: string;
    firstName: string;
    lastName: string;
    orderDetails: IOrderDetail[];
    orderHeaderId: number;
    orderTime: string;
    orderTotal: number;
    payementIntentId: string;
    phone: string;
    status: string;
    stripsSessionId: string;
    userId: string;
  }
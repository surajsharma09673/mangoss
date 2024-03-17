import { IOrderDetail } from "./OrderDetail.model";

export interface IOrderHeader {
    orderHeaderId: number;
    userId: string;
    couponCode: string | null;
    discount: number;
    orderTotal: number;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    email: string | null;
    orderTime: string; // You might want to use a proper Date type here
    status: string;
    payementIntentId: string | null;
    stripsSessionId: string | null;
    orderDetails: IOrderDetail[];
  }
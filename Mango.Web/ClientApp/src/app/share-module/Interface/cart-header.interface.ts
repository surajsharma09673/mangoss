export interface ICartHeader {
    cartHeaderId: number;
    userId: string;
    couponCode: string | null;
    discount: number;
    cartTotal: number;
  }
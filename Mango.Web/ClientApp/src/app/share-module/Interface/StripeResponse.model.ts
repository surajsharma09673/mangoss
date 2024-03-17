import { IOrderHeader } from "./OrderHeader.model";

export interface IStripeResponse {
    stripeSessionUrl: string;
    stripeSessionId: string | null;
    approvedUrl: string;
    cancelUrl: string;
    orderHeader: IOrderHeader;
  }
  
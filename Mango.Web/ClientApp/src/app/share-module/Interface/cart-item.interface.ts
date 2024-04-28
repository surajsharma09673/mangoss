import { ICartDetails } from "./cart-details.Interface";
import { ICartHeader } from "./cart-header.interface";

export interface IcartItem {
    cartDetails:ICartDetails[],
    cartHeader:ICartHeader
  }

  
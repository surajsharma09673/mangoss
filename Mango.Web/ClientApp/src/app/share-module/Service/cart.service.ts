// cart.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseDto } from '../Interface/IResponseDto';
import { HttpService } from './http.service';
import { ApiEndpointService } from './ApiEndpoint.service';
import { IcartItem } from '../Interface/cart-item.interface';

@Injectable()
export class CartService {
  private cartItems: any[] = [];
  constructor(
    private http: HttpService,
    private EndpointService: ApiEndpointService
  ) {}

  getCartItems(): Observable<IcartItem> {
    return this.http.get<IcartItem>(
      this.EndpointService.endpoints.GetCardDetails
    );
  }
  ApplyCartCoupon(IcartItem:IcartItem): Observable<IResponseDto> {
    return this.http.post<IResponseDto>(
      this.EndpointService.endpoints.ApplyCoupon,IcartItem
    );
  }

  RemoveCartCoupon(IcartItem:IcartItem): Observable<IResponseDto> {
    return this.http.post<IResponseDto>(
      this.EndpointService.endpoints.RemoveCoupon,IcartItem
    );
  }

  EmailCart(IcartItem:IcartItem): Observable<IResponseDto> {
    return this.http.post<IResponseDto>(
      this.EndpointService.endpoints.EmailCart,IcartItem
    );
  }

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  removeFromCart(itemId: number):Observable<IResponseDto> {
    // Implement logic to remove item by itemId
    return this.http.post<IResponseDto>(
        this.EndpointService.endpoints.RemoveCart,itemId
      );
  }

  clearCart() {
    this.cartItems = [];
  }
}

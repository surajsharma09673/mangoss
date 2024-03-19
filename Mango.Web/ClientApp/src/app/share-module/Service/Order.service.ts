// cart.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseDto } from '../Interface/IResponseDto';
import { HttpService } from './http.service';
import { ApiEndpointService } from './ApiEndpoint.service';
import { IcartItem } from '../Interface/cart-item.interface';

@Injectable()
export class OrderService {
  constructor(
    private http: HttpService,
    private EndpointService: ApiEndpointService
  ) {}

  getOrder(OrderId: number): Observable<IResponseDto> {
    var url = this.EndpointService.endpoints.GetOrder;
    return this.http.get<IResponseDto>(`${url}${OrderId}`);
  }
  getAllOrder(): Observable<IResponseDto> {
    return this.http.get<IResponseDto>(
      this.EndpointService.endpoints.GetAllOrders
    );
  }
}

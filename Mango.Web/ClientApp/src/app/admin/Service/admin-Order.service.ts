// cart.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseDto } from '../../share-module/Interface/IResponseDto';
import { ApiEndpointService } from '../../share-module/Service/ApiEndpoint.service';
import { HttpService } from '../../share-module/Service/http.service';

@Injectable()
export class AdminOrderService {
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

  updateOrderStatus(orderId: number, newStatus: string): Observable<IResponseDto> {
    const url = `${ this.EndpointService.endpoints.UpdateOrderStatus}${orderId}`;
    const requestBody = `"${newStatus}"`; // Enclose newStatus in double quotes for raw string
    return this.http.post<IResponseDto>(url,  requestBody );
  }
}

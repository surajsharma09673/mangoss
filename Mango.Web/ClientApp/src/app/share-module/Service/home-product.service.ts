// home-product.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Interface/Iproduct.model';
import { HttpService } from './http.service';
import { ApiEndpointService } from './ApiEndpoint.service';

interface ProductServiceHome {
    getAllProduct(): Observable<IProduct[]>;
  }
  

@Injectable()
export class HomeProductService implements ProductServiceHome {

  constructor(private http: HttpService, private endpointservice: ApiEndpointService) {}

  getAllProduct(): Observable<IProduct[]> {
    const url = this.endpointservice.endpoints.GetAllProduct;
    return this.http.get<IProduct[]>(url);
  }
  getProductById(id:number | null = null): Observable<IProduct> {
    const url = this.endpointservice.endpoints.GetProductById;
    return this.http.get<IProduct>(`${url}${id}`);
  }
}

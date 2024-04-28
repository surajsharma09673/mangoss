import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICoupon } from '../../share-module/Interface/Icoupon';
import { IResponseDto } from '../../share-module/Interface/IResponseDto';
import { HttpService } from '../../share-module/Service/http.service';
import { ApiEndpointService } from '../../share-module/Service/ApiEndpoint.service';
import { IProduct } from '../../share-module/Interface/Iproduct.model';
import { HttpHeaders } from '@angular/common/http';

export interface ProductServiceAdmin {
  createProduct(product: FormData): Observable<IResponseDto>;
  updateProduct(product: FormData): Observable<IResponseDto>;
  DeleteProduct(data: IProduct): Observable<IResponseDto>;
  getAllProduct(): Observable<IProduct[]>;
}

@Injectable()
export class ProductService implements ProductServiceAdmin {
  constructor(
    private http: HttpService,
    private endpointservice: ApiEndpointService
  ) {}

  getAllProduct(): Observable<IProduct[]> {
    var url = this.endpointservice.endpoints.GetAllProduct;
    return this.http.get<IProduct[]>(url);
  }

  createProduct(product: FormData): Observable<IResponseDto> {
    // Set the headers for multipart form data
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });
    var url = this.endpointservice.endpoints.CreateProduct;
    return this.http.post<IResponseDto>(url, product,headers);
  }

  updateProduct(product: FormData): Observable<IResponseDto> {
     // Set the headers for multipart form data
     const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });
    var url = this.endpointservice.endpoints.UpdateProduct;
    return this.http.post<IResponseDto>(url, product,headers);
  }

  DeleteProduct(data: IProduct): Observable<IResponseDto> {
    var url = this.endpointservice.endpoints.DeleteProduct;
    return this.http.post<IResponseDto>(url, data);
  }
}

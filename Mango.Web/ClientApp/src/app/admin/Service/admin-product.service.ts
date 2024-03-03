import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICoupon } from '../../share-module/Interface/Icoupon';
import { IResponseDto } from '../../share-module/Interface/IResponseDto';
import { HttpService } from '../../share-module/Service/http.service';
import { ApiEndpointService } from '../../share-module/Service/ApiEndpoint.service';
import { IProduct } from '../../share-module/Interface/Iproduct.model';


export interface ProductServiceAdmin {
 
  createProduct(product: IProduct): Observable<IResponseDto>;
  updateProduct(product: IProduct): Observable<IResponseDto>;
  DeleteProduct(data: IProduct): Observable<IResponseDto>;
  getAllProduct(): Observable<IProduct[]>;
}

@Injectable()

export class ProductService implements ProductServiceAdmin {


  constructor(private http: HttpService,private endpointservice:ApiEndpointService ) {}

  getAllProduct(): Observable<IProduct[]> {
    var url = this.endpointservice.endpoints.GetAllProduct;
    return this.http.get<IProduct[]>(url);
  }

  createProduct(product:IProduct): Observable<IResponseDto> {
    var url = this.endpointservice.endpoints.CreateProduct;
    return this.http.post<IResponseDto>(url,product);
  }

  updateProduct(product:IProduct): Observable<IResponseDto> {
    var url = this.endpointservice.endpoints.UpdateProduct;
    return this.http.post<IResponseDto>(url,product);
  }


  DeleteProduct(data:IProduct):Observable<IResponseDto>{
    var url = this.endpointservice.endpoints.DeleteProduct;
    return this.http.post<IResponseDto>(url,data);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICoupon } from '../../share-module/Interface/Icoupon';
import { IResponseDto } from '../../share-module/Interface/IResponseDto';
import { HttpService } from '../../share-module/Service/http.service';
import { ApiEndpointService } from '../../share-module/Service/ApiEndpoint.service';

@Injectable()
export class CouponService {


  constructor(private http: HttpService,private endpointservice:ApiEndpointService ) {}

  getCoupons(): Observable<ICoupon[]> {
    var url = this.endpointservice.endpoints.GetCoupon;
    return this.http.get<ICoupon[]>(url);
  }

  createCoupons(Icoupon:ICoupon): Observable<IResponseDto> {
    var url = this.endpointservice.endpoints.CreateCoupon;
    return this.http.post<IResponseDto>(url,Icoupon);
  }

  updateCoupons(Icoupon:ICoupon): Observable<IResponseDto> {
    var url = this.endpointservice.endpoints.UpdateCoupon;
    return this.http.post<IResponseDto>(url,Icoupon);
  }


  DeleteCoupon(data:ICoupon):Observable<IResponseDto>{
    var url = this.endpointservice.endpoints.DeleteCoupon;
    return this.http.post<IResponseDto>(url,data);
  }
}

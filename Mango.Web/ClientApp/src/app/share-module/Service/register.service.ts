// register.service.ts

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";
import { ApiEndpointService } from "./ApiEndpoint.service";
import { IResponseDto } from "../Interface/IResponseDto";
import { IuserRegister } from "../Interface/IuserRegister";


@Injectable()
export class RegisterService {
  constructor(private http: HttpService,private EnpointApi:ApiEndpointService) {}

  register(userRegister:IuserRegister): Observable<IResponseDto> {
    var url=this.EnpointApi.endpoints.registerUser;
    console.log(url,"here registerservice");
    return this.http.post<IResponseDto>(url, userRegister);
  }
}

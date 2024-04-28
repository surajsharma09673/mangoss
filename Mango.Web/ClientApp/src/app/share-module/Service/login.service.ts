// login.service.ts

import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ApiEndpointService } from './ApiEndpoint.service';
import { HttpService } from './http.service';
import { AuthenticationService } from './authentication.service';
import { TokenService } from './token.service';
import { IuserLogin } from '../Interface/IuserRegister';
import { IResponseDto } from '../Interface/IResponseDto';
import { UserService } from './UserService.seervice';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpService,
    private endpointservice: ApiEndpointService,
    private Authentication: AuthenticationService,
    private userService: UserService,
    private tokenservice: TokenService
  ) {}

  login(IuserLogin: IuserLogin): Observable<IResponseDto> {
    var url = this.endpointservice.endpoints.loginuser;
    return this.http.post<IResponseDto>(url, IuserLogin).pipe(
      map((res) => {
        console.log(res);
        if (res.isSuccess) {
          // On successful login, store the token
          const result = res.result as { user: any; token: string } | undefined;
          if (result) this.userService.setUserData(result);
          // Set the authentication status to true
          this.Authentication.setAuthenticationStatus(true);

          return res;
        }
        return res; // If the response is not truthy, you might want to return something or handle it differently
      }),
      catchError((error) => {
        console.error('Login error:', error);
        // Handle the error, you might want to log it, show a message, etc.
        return throwError(error);
      })
    );
  }

  Logout(): Observable<IResponseDto> {
    var url = this.endpointservice.endpoints.logoutUser;
    return this.http.get<IResponseDto>(url);
  }

  CheckSignIn(): Observable<IResponseDto> {
    var url = this.endpointservice.endpoints.CheckSignIn;
    return this.http.get<IResponseDto>(url).pipe(
      map((res) => {
        console.log(res,"here");
        if (res.isSuccess && res.result) {
          const result = res.result as unknown as string | undefined;
          if(result){
          this.Authentication.setAuthenticationStatus(true);
          this.tokenservice.saveToken(result)
          }
        }
        return res;
      })
    );
  }
}

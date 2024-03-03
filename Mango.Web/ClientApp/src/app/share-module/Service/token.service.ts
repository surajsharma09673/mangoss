// token.service.ts

import { Injectable, NgZone } from "@angular/core";
import { Observable, interval, takeWhile, switchMap } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class TokenService {

  private tokenCheckingSubscription: any;
  private readonly TOKEN_KEY = 'your_token_key';
  constructor(
    private authService: AuthenticationService,
    public jwtHelper: JwtHelperService,
    private ngzone: NgZone,
    
  ) {}
  

  // Method to save the token in local storage
  async saveToken(token: string): Promise<void> {
   await localStorage.setItem(this.TOKEN_KEY, token);
    this.startTokenChecking();
   
  }

  // Method to get the token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Method to remove the token from local storage
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAdmin(): boolean {
    const token = this.getToken();

    if (token !== null) {
        try {
            // Decode and verify the token
            const decodedToken = this.jwtHelper.decodeToken(token);

            // Check if the user has the 'admin' role
            const userRole = decodedToken.role;
            console.log(decodedToken,decodedToken.role)

            return userRole === 'ADMIN';
        } catch (error) {
            console.error('Error decoding token:', error);
            return false; // Error decoding token
        }
    } else {
        return false; // Token is null
    }
}

  // Function to validate a token
  validateToken(): boolean {
    var token = this.getToken();
    if (token !== null) {
      try {
        // Decode and verify the token
        const decodedToken = this.jwtHelper.decodeToken(token);

        // Optionally, you can perform additional checks on the decoded token
        // For example, check the expiration date
        if (decodedToken && decodedToken.exp) {
          const expirationDate = new Date(0); // The 0 here is the key, which sets the date to the epoch
          expirationDate.setUTCSeconds(decodedToken.exp);

          // Check if the token is expired
          if (expirationDate < new Date()) {
            console.error('Token has expired');
            this.removeToken();
            this.authService.setAuthenticationStatus(false);
            return false;
          }
        }

        // If all checks pass, the token is valid
        this.authService.setAuthenticationStatus(true);
        return true;
      } catch (error) {
        console.error('Error decoding or validating token:', error);
        this.authService.setAuthenticationStatus(false);
        return false;
      }
    }
    this.authService.setAuthenticationStatus(false);
    return false;
  }
  
  private checkTokenExistence(): Observable<void> {
    return new Observable((observer) => {
      const tokenExists = !!this.getToken();
      console.log(tokenExists,"token");
      if (!tokenExists) {
        observer.next();
      }
      observer.complete();
    });
  }

  private startTokenChecking(): void {
    console.log("here");
    this.tokenCheckingSubscription = interval(1000)
      .pipe(
        takeWhile(() =>this.checkAndSetAuthenticationStatus()), // Continue checking until token exists
        switchMap(() => this.checkTokenExistence())
      )
      .subscribe(res=>{console.log(res)});
  }

  stopTokenChecking(): void {
    if (this.tokenCheckingSubscription) {
      this.tokenCheckingSubscription.unsubscribe();
    }
  }


 // Method to check the token existence and set the authentication status
private checkAndSetAuthenticationStatus(): boolean {
  const tokenExists = !!this.getToken();
  if (!tokenExists) {
    console.log(tokenExists,"false")
    this.ngzone.run(()=>{
      this.authService.setAuthenticationStatus(false);
    })
    
  }
  return tokenExists; // Return true to continue checking, false to stop
}
}


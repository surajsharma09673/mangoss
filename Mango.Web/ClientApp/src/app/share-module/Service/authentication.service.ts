// authentication.service.ts
import { Inject, Injectable, NgZone} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
  constructor(private ngzone: NgZone){
    this.isAuthenticatedSubject.next(this.isAuthenticated());
  }
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  // Observable to track the authentication status
  isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Method to set the authentication status
  setAuthenticationStatus(isAuthenticated: boolean): void {
    console.log(isAuthenticated,"value");
    this.ngzone.run(()=>{
    this.isAuthenticatedSubject.next(isAuthenticated);
  })
  }

  // Example method to check if the user is authenticated
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
  

}

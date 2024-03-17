import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../Service/authentication.service';
import { Observable } from 'rxjs';
import { LoginService } from '../Service/login.service';



@Injectable()
export class HomeGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}


  canActivate(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.loginService.CheckSignIn().subscribe(res => {
        if (res.isSuccess) {
          observer.next(true); // Allow navigation
          observer.complete();
        } else {
          // If user is not signed in, redirect to login page
          this.router.navigate(['/home/login']);
          observer.next(false); // Block navigation
          observer.complete();
        }
      }, err => {
        console.error(err);
        observer.next(false); // Block navigation on error
        observer.complete();
      });
    });
  }
}
import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Service/authentication.service';
import { Observable } from 'rxjs';
import { TokenService } from '../../Service/token.service';
import { LoginService } from '../../Service/login.service';
import { UserService } from '../../Service/UserService.seervice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit,AfterViewInit {
  isLoggedIn: Observable<boolean>;
  email: string | undefined;
  IsAdmin: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService,
    private tokenService: TokenService,

    private loginService: LoginService
  ) {
    this.isLoggedIn = this.authService.isAuthenticated$();
    this.IsAdmin=this.tokenService.isAdmin();
    console.log(this.IsAdmin);
  }
ngAfterViewInit()
{
  this.getEmail();
}
  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated$();
    console.log(this.isLoggedIn);
    
  }
  navigateToLogin() {
    console.log('Navigating to login...');
    this.router.navigate(['/home/login']);
  }

  register() {
    // Implement register logic
    this.router.navigate(['/home/register']);
  }

  logout() {
    // Implement logout logic
    this.loginService.Logout().subscribe((res) => {
      if (res.isSuccess) {
        this.userService.clearUserData();
        this.authService.setAuthenticationStatus(false);
        this.router.navigate(['/home']);
      }
    });
  }
  getEmail(): void {
    this.authService.isAuthenticated$().subscribe((res) => {
      console.log(res, 'res');
      if (res) {
        // Call your service or method to get the email
        var data = this.userService.getUserData();
        console.log(data,"data");

        this.email = data?.user.email; // Replace this with your actual email retrieval logic
      } else {
        this.email = undefined;
      }
    });
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}

import { Component } from '@angular/core';
import { TokenService } from '../../share-module/Service/token.service';
import { Router } from '@angular/router';
import { LoginService } from '../../share-module/Service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private tokenService: TokenService, private router: Router,private LoginService:LoginService) {
  }

  ngOnInit(): void {
    // Check if user is signed in and navigate based on role
    this.checkSignInAndNavigate();
  }
  checkSignInAndNavigate() {
    // Check if user is signed in
    this.LoginService.CheckSignIn().subscribe(res=>{

    
    if (res.isSuccess) {
      // If signed in, check user role and navigate accordingly
      if (this.tokenService.isAdmin()) {
        // If user is admin, navigate to admin dashboard
        this.router.navigate(['/admin/dashboard']);
      } else {
        // If user is not admin, navigate to regular home page
       // this.router.navigate(['/home']);
      }
    } else {
      // If user is not signed in, redirect to login page
      this.router.navigate(['/home/login']);
    }
  })
}
  
}

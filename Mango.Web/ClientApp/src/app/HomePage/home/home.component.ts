import { Component } from '@angular/core';
import { TokenService } from '../../share-module/Service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private Tokenservice: TokenService, private router: Router) {
    this.checkUserRoleAndNavigate();
  }

  checkUserRoleAndNavigate() {
    if (this.Tokenservice.validateToken())
      this.router.navigate(['/admin/dashboard']);
      this.router.navigate(['/home']);
  }
}

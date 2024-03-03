import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../share-module/Service/token.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
  constructor (private Tokenservice :TokenService,private router :Router){
    this.checkUserRoleAndNavigate()
  }

  checkUserRoleAndNavigate()
{
    if(!this.Tokenservice.validateToken())
        this.router.navigate(['/home']);
}
}

// order-success.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from '../Service/cart.service';
import { LoaderService } from '../Service/loader.service';

@Injectable()
export class OrderSuccessGuard implements CanActivate {

  constructor(private CartService: CartService, private router: Router,private loaderService:LoaderService) {
  }

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const orderIdString = route.paramMap.get('id')!;
    this.loaderService.setLoading(true);
  console.log("inside authsuccessservice");
    try {
      const response = await this.CartService.validateStripeSession(parseInt(orderIdString)).toPromise();
  
      if (response?.isSuccess) {
        return true; // Allow navigation
      } else {
        // Redirect to the home page or any other route
        this.router.navigate(['/home/OrderFail']);
        return false; // Block navigation
      }
    } catch (error) {
      console.error('Error validating stripe session:', error);
      return false; // Handle errors and block navigation if needed
    } finally {
      this.loaderService.setLoading(false);
    }
  }
  
}

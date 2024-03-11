import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../share-module/Service/cart.service';
import { IcartItem } from '../../../share-module/Interface/cart-item.interface';
import { ICartDetails } from '../../../share-module/Interface/cart-details.Interface';
import { ICartHeader } from '../../../share-module/Interface/cart-header.interface';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  orderForm!: FormGroup;
  orderDetails: any[]=[]; 
  cartItems!: IcartItem;
  cartHeader: ICartHeader | undefined;
  cartDetails: ICartDetails[] = [];
  CouponCode: string = '';
  CouponCodeAdded: boolean = false;
  // Replace with your actual data

  constructor(private fb: FormBuilder,private cartService :CartService,private  zone:NgZone) { }

  ngOnInit(): void {
    this.initForm();
    this.getOrderDetails();
    this.loadCartItems() // Replace with your actual method to fetch order details
  }

  private initForm(): void {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });
  }
  loadCartItems() {
    this.zone.run(() => {
      this.cartService.getCartItems().subscribe((res: IcartItem) => {
        this.cartItems = res;
        this.cartHeader = res.cartHeader;
        this.cartDetails = res.cartDetails;
        if (this.cartHeader?.couponCode) {
          this.CouponCode = this.cartHeader.couponCode;
          this.CouponCodeAdded = true;
        } else {
          this.CouponCode = '';
          this.CouponCodeAdded = false;
        }
      });
    });
  }


  private getOrderDetails(): void {
    // Replace with your actual method to fetch order details
    this.orderDetails = this.cartDetails;
  }

  placeOrder(): void {
    // Implement your place order logic here
    console.log('Placing Order:', this.orderForm.value);
  }
}

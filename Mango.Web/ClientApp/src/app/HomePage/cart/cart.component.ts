import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { CartService } from '../../share-module/Service/cart.service';
import { IcartItem } from '../../share-module/Interface/cart-item.interface';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';
import { ICartHeader } from '../../share-module/Interface/cart-header.interface';
import { ICartDetails } from '../../share-module/Interface/cart-details.Interface';
import { STRING_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems!: IcartItem;
  cartHeader: ICartHeader | undefined;
  cartDetails: ICartDetails[] = [];
  CouponCode: string = '';
  CouponCodeAdded: boolean = false;

  constructor(private cartService: CartService, private zone: NgZone) {}

  ngOnInit(): void {
    this.loadCartItems();
  }
  loadCartItems() {
    this.zone.run(() => {
      this.cartService.getCartItems().subscribe((res: IcartItem) => {
        this.cartItems = res;
        this.cartHeader = res.cartHeader;
        this.cartDetails = res.cartDetails;
        if (this.cartHeader.couponCode) {
          this.CouponCode = this.cartHeader.couponCode;
          this.CouponCodeAdded = true;
        } else {
          this.CouponCode = '';
          this.CouponCodeAdded = false;
        }
      });
    });
  }

  removeFromCart(cartDetailId: number) {
    console.log(cartDetailId, 'yo');
    this.cartService.removeFromCart(cartDetailId).subscribe((res) => {
      if (res.isSuccess) {
        console.log('card remove succefully');
        this.loadCartItems();
      }
    });
    // Implement logic to remove item by cartDetailId
    // Example: this.cartService.removeFromCart(cartDetailId);
  }

  clearCart() {
    // Implement logic to clear the cart
    // Example: this.cartService.clearCart();
  }

  ApplyCoupon() {
    this.cartItems.cartHeader.couponCode = this.CouponCode;
    this.cartService.ApplyCartCoupon(this.cartItems).subscribe((res) => {
      if (res.isSuccess) {
        this.loadCartItems();
        console.log(res);
      }
    });
  }

  RemoveCoupon() {
    this.cartService.RemoveCartCoupon(this.cartItems).subscribe((res) => {
      if (res.isSuccess) {
        this.loadCartItems();
        console.log(res);
      }
    });
  }
}

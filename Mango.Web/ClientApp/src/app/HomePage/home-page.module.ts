import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { SharedModule } from '../share-module/share.module';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './Product/product-card/product-card.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { OrderDetailsCardComponent } from './cart/order-details-card/order-details-card.component';
import { OrderSummaryComponent } from './cart/order-summary/order-summary.component';
import { OrderConfirmationComponent } from './cart/checkout/order-confirmation/order-confirmation.component';
import { OrderFailComponent } from './cart/checkout/order-fail/order-fail.component';
import { OrderListComponent } from './cart/checkout/order-list/order-list.component';
import { OrderService } from '../share-module/Service/Order.service';
import { CartService } from '../share-module/Service/cart.service';
import { HomeGuard } from '../share-module/AuthGuard/Home.guard';
import { OrderSuccessGuard } from '../share-module/AuthGuard/order-success.guard';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductCardComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    OrderDetailsCardComponent,
    OrderSummaryComponent,
    OrderConfirmationComponent,
    OrderFailComponent,
    OrderListComponent,
  ],
  imports: [HomePageRoutingModule, SharedModule],
  exports: [LoginComponent, RegisterComponent, HomeComponent],
  providers: [OrderService, CartService, OrderSuccessGuard, HomeGuard],
})
export class HomePageModule {}

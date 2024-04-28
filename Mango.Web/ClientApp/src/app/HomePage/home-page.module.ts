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
    OrderSummaryComponent
    
  ],
  imports: [
    HomePageRoutingModule,
    SharedModule
  ],
  exports:[LoginComponent,
    RegisterComponent,
    HomeComponent]
})
export class HomePageModule { }

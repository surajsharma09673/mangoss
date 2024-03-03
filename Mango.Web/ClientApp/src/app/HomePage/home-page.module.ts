import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { SharedModule } from '../share-module/share.module';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './Product/product-card/product-card.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductCardComponent,
    ProductDetailComponent
    
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

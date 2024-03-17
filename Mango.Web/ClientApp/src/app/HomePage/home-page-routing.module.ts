import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { ProductCardComponent } from './Product/product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { OrderSummaryComponent } from './cart/order-summary/order-summary.component';
import { OrderConfirmationComponent } from './cart/checkout/order-confirmation/order-confirmation.component';
import { OrderFailComponent } from './cart/checkout/order-fail/order-fail.component';
import { OrderSuccessGuard } from '../share-module/AuthGuard/order-success.guard';
import { HomeGuard } from '../share-module/AuthGuard/Home.guard';
import { OrderListComponent } from './cart/checkout/order-list/order-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', component: ProductCardComponent },
      { path: 'product/:id', component: ProductDetailComponent ,canActivate:[HomeGuard] },
      { path: 'cart', component: CartComponent ,canActivate:[HomeGuard]},
      { path: 'orderSummary', component: OrderSummaryComponent,canActivate:[HomeGuard] },
      { path: 'OrderConfirm/:id', component: OrderConfirmationComponent,canActivate:[HomeGuard,OrderSuccessGuard] },
      { path: 'OrderFail', component: OrderFailComponent },
      { path: 'Order', component: OrderListComponent },
      // Add additional child routes if needed
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

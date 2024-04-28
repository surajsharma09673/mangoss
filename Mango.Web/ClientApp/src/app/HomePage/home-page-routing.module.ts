import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { ProductCardComponent } from './Product/product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { OrderSummaryComponent } from './cart/order-summary/order-summary.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', component: ProductCardComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'orderSummary', component: OrderSummaryComponent },
      // Add additional child routes if needed
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

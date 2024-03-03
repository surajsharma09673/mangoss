import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './coupon/coupon.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    component: DashBoardComponent,
    children: [
      { path: 'coupon', component: CouponComponent },
      { path: 'product', component: ProductComponent },
      // Add additional child routes if needed
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

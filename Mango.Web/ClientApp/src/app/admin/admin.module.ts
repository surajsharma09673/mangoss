import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CouponComponent } from './coupon/coupon.component';
import { SharedModule } from '../share-module/share.module';
import { CouponFormComponent } from './coupon/coupon-form/coupon-form.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CouponService } from './Service/admin-coupon.service';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductService } from './Service/admin-product.service';
import { AdminOrderService } from './Service/admin-Order.service';
import { AdminOrderListComponent } from './Orders/order-list/order-list.component';
import { AdminOrderDetailComponent } from './Orders/order-detail/order-detail.component';

@NgModule({
  declarations: [
    CouponComponent,
    CouponFormComponent,
    DashBoardComponent,
    ProductFormComponent,
    ProductComponent,
    ProductListComponent,
    AdminOrderListComponent,
    AdminOrderDetailComponent
  ],
  imports: [AdminRoutingModule, SharedModule],
  providers: [CouponService, ProductService,AdminOrderService],
  exports: [CouponComponent, CouponFormComponent],
})
export class AdminModule {}

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminOrderService } from '../../Service/admin-Order.service';
import { IOrderList } from '../../../share-module/Interface/OrderList.Interface';
import { IOrderHeader } from '../../../share-module/Interface/OrderHeader.model';
import { FormService } from '../../../share-module/Service/Form.service';
import { OrderDetailFormConfig } from '../../../share-module/FormConfig/OrderDetail-config';
import { FormGroup } from '@angular/forms';
import { Status_Pending, Status_Approved, Status_ReadyForPickup, Status_Completed, Status_Refunded, Status_Cancelled } from '../../../share-module/Constants/order-status.constants';

@Component({
  selector: 'Admin-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
})
export class AdminOrderDetailComponent implements OnInit,AfterViewInit {
  constructor(private router: Router, private route: ActivatedRoute,
    private orderService:AdminOrderService,private formService:FormService){}
  OrderHeaderId!:number;
  orderless!: IOrderHeader;
  OrderDetailForm!:FormGroup
  orderStatus!:string;
  statusApproved = Status_Approved;
  statusReadyForPickup = Status_ReadyForPickup;
  statusCompleted = Status_Completed;
  statusCancelled = Status_Cancelled;

  ngOnInit(): void {
    //this.getOrderHeaderIdFromRoute()
    this.initForm()
  }
  ngAfterViewInit(): void {
    this.getOrderHeaderIdFromRoute()
  }
 // Function to get OrderHeader ID from route parameters
getOrderHeaderIdFromRoute() {
  this.route.paramMap.subscribe((params) => {
    // Check if params is not null before accessing its properties
    if (params) {
      // Access the OrderHeader ID using the safe navigation operator and parse it to an integer
      const orderIdString = params.get('id');
      this.OrderHeaderId = orderIdString ? +orderIdString : -1;
      console.log('OrderHeader ID:', this.OrderHeaderId);

      // Call the orderService to fetch order details by OrderHeader ID
      this.orderService.getOrder(this.OrderHeaderId).subscribe((res) => {
        if(res.isSuccess){
        this.orderless = res.result as IOrderList;
        this.orderStatus=this.orderless.status
        console.log('Order details:', this.orderless);
       this.populateForm()
        }
      });
    }
  });
}
initForm(): void {
  this.OrderDetailForm = this.formService.createForm(
    OrderDetailFormConfig.formInstance,
    OrderDetailFormConfig.validationRules,
  );
}
populateForm(): void {
  this.OrderDetailForm.patchValue({
    name: this.orderless.firstName + ' ' + this.orderless.lastName,
    phone: this.orderless.phone,
    email: this.orderless.email,
    orderDate: this.orderless.orderTime,
    sessionId: this.orderless.stripsSessionId,
    paymentIntentId: this.orderless.payementIntentId,
    orderStatus: this.orderless.status
    // Patch other form controls here
  });
}
GoOrder()
{
  this.router.navigate(["/admin/dashboard/order"])
}
UpdateOrderStatus(orderHeaderId: number, status: string) {
this.orderService.updateOrderStatus(orderHeaderId,status).subscribe(res=>{
  if(res.isSuccess)
  {
   this. GoOrder()
    
  }
  console.log(res,"hey data comming");
})
}



}

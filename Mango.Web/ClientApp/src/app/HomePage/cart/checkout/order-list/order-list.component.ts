import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../share-module/Service/Order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {
constructor(private orderService:OrderService){
  
}
ngOnInit(): void {
 this.GetAllOrders()
}

GetAllOrders()
{
this.orderService.getAllOrder().subscribe(res=>{
  console.log("hey data comming",res);
})
}
}

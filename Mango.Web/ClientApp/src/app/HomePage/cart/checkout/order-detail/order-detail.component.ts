import { Component, Input } from '@angular/core';
import { IOrderDetail } from '../../../../share-module/Interface/OrderDetail.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent {
  @Input() orderDetails: IOrderDetail[] = []; // Define input property to receive array of order detail objects
}

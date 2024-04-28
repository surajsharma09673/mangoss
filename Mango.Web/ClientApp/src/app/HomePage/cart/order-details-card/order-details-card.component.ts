import { Component, Input } from '@angular/core';
import { ICartDetails } from '../../../share-module/Interface/cart-details.Interface';
import { ICartHeader } from '../../../share-module/Interface/cart-header.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-details-card',
  templateUrl: './order-details-card.component.html',
  styleUrl: './order-details-card.component.css'
})
export class OrderDetailsCardComponent {
  @Input() cardDetails: ICartDetails[]=[];
  @Input()  cartHeader: ICartHeader | undefined;
  @Input() orderForm!: FormGroup;
}

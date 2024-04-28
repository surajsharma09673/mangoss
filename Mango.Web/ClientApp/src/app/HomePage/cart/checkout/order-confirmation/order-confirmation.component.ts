// order-confirmation.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../../../share-module/Service/loader.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  orderId: number | null = null;

  constructor(private route: ActivatedRoute,private loaderService:LoaderService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (params) {
        // Access the product ID using the safe navigation operator and parse it to an integer
        const orderIdString = params.get('id');
        this.orderId = orderIdString ? +orderIdString : null;
        console.log('Product ID:', this.orderId);
      }
    });
  }
}

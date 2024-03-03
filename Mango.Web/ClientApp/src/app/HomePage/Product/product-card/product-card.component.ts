import { Component } from '@angular/core';
import { IProduct } from '../../../share-module/Interface/Iproduct.model';
import { HomeProductService } from '../../../share-module/Service/home-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  products: IProduct[] =[];
  showFullDescription: { [key: number]: boolean } = {};
  constructor(private HomeproductService: HomeProductService,private router:Router){
   this.initializeProducts();
  }

  initializeProducts() {
    this.HomeproductService.getAllProduct().subscribe((product) => {
    this.products=product;
    })
  }


  // Function to toggle the visibility of the full description
  toggleDescription(productId: number ): void {
    this.showFullDescription[productId] = !this.showFullDescription[productId];
  }

  viewProductDetail(productId: number): void  {
    console.log(productId,"yo")
    this.router.navigate(['home/product', productId.toString()]);
  }
}

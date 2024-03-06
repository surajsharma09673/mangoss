// product-detail.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../share-module/Interface/Iproduct.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeProductService } from '../../../share-module/Service/home-product.service';
import { AuthenticationService } from '../../../share-module/Service/authentication.service';
import { TokenService } from '../../../share-module/Service/token.service';
 // Import your product interface

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct ;
  numberOfItems: number = 1; // Default to 1 item

  productId: number | null = null; // Initialize with a default value
  quantity: number = 1; // Default quantity
 

  constructor(private route: ActivatedRoute,
    private HomeproductService:HomeProductService,
    private router:Router,
    private Tokenservice: TokenService, ) { }

ngOnInit()
{
  this.route.paramMap.subscribe((params) => {
    // Check if params is not null before accessing its properties
    if (params) {
      // Access the product ID using the safe navigation operator and parse it to an integer
      const productIdString = params.get('id');
      this.productId = productIdString ? +productIdString : null;
      console.log('Product ID:', this.productId);
      this.HomeproductService.getProductById(this.productId).subscribe(res=>{
        this.product=res;
        console.log(res,"here");
      })
    }
  });
} 
addToCart(): void {
  // Implement your logic for adding the product to the cart
  // Update the item count
  this.product.count=this.quantity
  this.HomeproductService.AddProductDetails(this.product).subscribe(res=>{
    console.log(res);
  })
;
}

goBack(): void {
  // Implement your logic to navigate back
  this.router.navigate(['/home']); // Adjust the route accordingly
}

viewCart(): void {
  if(this.Tokenservice.isCustomer()){
  // Implement your logic to navigate to the cart page
  this.router.navigate(['/home/cart']);
  }
  else{
  this.router.navigate(['/home/login']); 
  }// Adjust the route accordingly
}

  
}


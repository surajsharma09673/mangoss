import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../share-module/Interface/Iproduct.model';
import { PaginationService } from '../../../share-module/Service/pagination.service';
import { ProductService } from '../../Service/admin-product.service';
import { ToastService } from '../../../share-module/Service/Toast.service';
import { ConfirmationDialogData } from '../../../share-module/Interface/confirmation-dialog-data.interface';
import { Observable, Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from '../../../share-module/Service/search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  isLoading: boolean = false;
  pageSize = 5;
  currentPage = 1;
  totalPages = 0;
  pages: number[] = [];
  Product: IProduct[] = [];
  displayedProducts: IProduct[] = [];
  showProductForm: boolean = false;
  productFormInitialValues!: any;
  ProductIdHide: boolean = false;
  selectedProduct!: IProduct;
  searchTerm = '';

  constructor(
    public paginationService: PaginationService,
    private productService: ProductService,
    private toastService: ToastService,
    private searchService: SearchService
  ) {}
  ngOnInit() {
    this.initializeProducts();
  }
  createProduct() {
    console.log('Creating a new coupon');
    this.showProductForm = !this.showProductForm;
    this.productFormInitialValues = {};
    this.ProductIdHide = true;
  }

  async search(): Promise<void> {
    this.searchService.updateSearchTerm(this.searchTerm);
    this.displayedProducts = await this.searchService.search(this.Product);
    console.log('here');
  }

  onSearchTermChange(): void {
    console.log('here,inserchterm');
    this.search();
  }

  onRowClick(Product: IProduct) {}

  deleteProduct(product: IProduct) {
    console.log('Deleting coupon:', product);
    const confirmationData: ConfirmationDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to proceed?',
    };

    this.toastService
      .showConfirmation(confirmationData)
      .then((confirmation) => {
        console.log(confirmation);
        if (confirmation) {
          this.productService.DeleteProduct(product).subscribe((res) => {
            if (res.isSuccess) {
              // Find the index of the coupon in the list
              const index = this.Product.findIndex(
                (c) => c.productId === product.productId
              );
              // Remove the coupon from the list if found
              if (index !== -1) {
                this.Product.splice(index, 1);
                this.Paginate();
                this.toastService.showToast(
                  'Coupon Deleted Successfully',
                  'Coupon Deleted',
                  'error'
                );
              }
            }
          });
        } else {
          this.toastService.showToast('Action canceled', '', 'info');
        }
      });
  }

  onPageChanged(page: number) {
    this.setPage(page);
  }

  initializeProducts() {
    this.isLoading = true;
    this.productService.getAllProduct().subscribe((product) => {
      this.isLoading = false;
      console.log(product, 'hey');
      this.Product = product;
      this.displayedProducts = product;
      this.Paginate();
    });
  }

  Paginate() {
    this.displayedProducts = this.paginationService.getPaginatedItems(
      this.Product,
      this.currentPage,
      this.pageSize
    );
    this.calculateTotalPages();
    this.pages = this.paginationService.getPageNumbers(this.totalPages);
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    console.log('here');
    this.currentPage = page;
    this.displayedProducts = this.paginationService.getPaginatedItems(
      this.Product,
      this.currentPage,
      this.pageSize
    );
    this.pages = this.paginationService.getPageNumbers(this.totalPages);
  }

  private calculateTotalPages() {
    this.totalPages = this.paginationService.calculateTotalPages(
      this.Product.length,
      this.pageSize
    );
  }

  GotoList(data: any) {
    this.showProductForm = false;
  }

  editProduct(product: IProduct) {
    console.log(product);
    this.showProductForm = true;
    this.selectedProduct = product;
    this.productFormInitialValues = product;
    this.ProductIdHide = false;
  }
  onFormSubmitted(newproduct: any) {
    if (!newproduct) {
      return;
    }

    const existingProductIndex = this.Product.findIndex(
      (product) => product.productId === newproduct.formData.productId
    );

    if (existingProductIndex === -1) {
      var product = this.buildFormData(newproduct, 0);
      this.createOrUpdateCoupon(product, 0);
    } else {
      this.Product[existingProductIndex] = newproduct.formData;
      var product = this.buildFormData(newproduct, 1);
      this.createOrUpdateCoupon(product, 1);
    }

    this.displayedProducts = this.Product;
    this.showProductForm = false;
  }

  private createOrUpdateCoupon(product: any, type: number) {
    if (type == 0) {
      this.productService.createProduct(product).subscribe((res) => {
        if (res.isSuccess) {
          this.initializeProducts();
          this.toastService.showToast(
            'Product Created Successfully',
            'Product Created',
            'success'
          );
        }
      });
    } else {
      this.productService.updateProduct(product).subscribe((res) => {
        if (res.isSuccess) {
          this.initializeProducts();
          this.toastService.showToast(
            'Product Updated successfully',
            'Product Updated',
            'info'
          );
        }
      });
    }
  }
  private buildFormData(newproduct: any, type: number): FormData {
    // Assuming newproduct is an object containing formData and file properties
    const formData = new FormData();
    formData.append('Name', newproduct.formData.name || '');
    formData.append('Description', newproduct.formData.description || '');
    formData.append('Price', newproduct.formData.price.toString() || '0');
    formData.append('CategoryName', newproduct.formData.categoryName || '');
    formData.append('Image', newproduct.file);
    

    // Check if type is 0 and append productId accordingly
    if (type === 0) {
      formData.append('ProductId', '0'); // Assuming productId should be '0' for new product
    } else {
      formData.append('ProductId', newproduct.formData.productId.toString() || '');
    }

    return formData;
  }
  showConfirmation(): void {
    const confirmationData: ConfirmationDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to proceed?',
    };

    this.toastService
      .showConfirmation(confirmationData)
      .then((result) => {
        if (result) {
          console.log('Confirmed');
          // Perform the action when confirmed
        } else {
          console.log('Canceled');
          // Perform the action when canceled or closed
        }
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  }
}

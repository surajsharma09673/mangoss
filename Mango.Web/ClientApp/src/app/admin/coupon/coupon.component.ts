// coupon-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ICoupon } from '../../share-module/Interface/Icoupon';
import { CouponService } from '../Service/admin-coupon.service';
import { PaginationService } from '../../share-module/Service/pagination.service';
import { ToastService } from '../../share-module/Service/Toast.service';
import { ConfirmationDialogData } from '../../share-module/Interface/confirmation-dialog-data.interface';
import { SearchService } from '../../share-module/Service/search.service';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
})

export class CouponComponent implements OnInit {
  coupons: ICoupon[] = [];
  displayedCoupons: ICoupon[] = [];
  pageSize = 5;
  currentPage = 1;
  totalPages = 0;
  pages: number[] = [];
  searchTerm = '';
  selectedCoupon!: ICoupon;
  showCouponForm: boolean = false;
  couponFormInitialValues!: any;
  CouponIDHide: boolean = false;
  
 
  constructor(
    private couponService: CouponService,
    public paginationService: PaginationService,
    private toastService: ToastService,
    private searchService:SearchService
  ) {}

  ngOnInit(): void {
    this.initializeCoupons();
  }

  initializeCoupons() {
    this.couponService.getCoupons().subscribe((coupons) => {
      this.coupons = coupons;
      this.Paginate()
    });
  }
  async search(): Promise<void> {
    this.searchService.updateSearchTerm(this.searchTerm)
    this.displayedCoupons = await this.searchService.search(this.coupons);
    console.log("here");
  }


  onSearchTermChange(): void {
    console.log("here,inserchterm")
    this.search();
  }


  Paginate()
  {
    this.displayedCoupons = this.paginationService.getPaginatedItems(
      this.coupons,
      this.currentPage,
      this.pageSize
    );
    this.calculateTotalPages();
    this.pages = this.paginationService.getPageNumbers(this.totalPages);
    this.setPage(1);
  }

  createCoupon() {
    console.log('Creating a new coupon');
    this.showCouponForm = !this.showCouponForm;
    this.couponFormInitialValues = {};
    this.CouponIDHide = true;
    // Implement logic for creating a new coupon
  }

 

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    console.log('here');
    this.currentPage = page;
    this.displayedCoupons = this.paginationService.getPaginatedItems(
      this.coupons,
      this.currentPage,
      this.pageSize
    );
    this.pages = this.paginationService.getPageNumbers(this.totalPages);
  }

  private calculateTotalPages() {
    this.totalPages = this.paginationService.calculateTotalPages(
      this.coupons.length,
      this.pageSize
    );
  }

  editCoupon(coupon: ICoupon) {
    this.showCouponForm = true;
    this.selectedCoupon = coupon;
    console.log(this.selectedCoupon, coupon);
    this.couponFormInitialValues = coupon;
    this.CouponIDHide = false;
    // Implement logic for editing a coupon
  }

  deleteCoupon(coupon: ICoupon) {
    console.log('Deleting coupon:', coupon);
    const confirmationData: ConfirmationDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to proceed?',
    };

    this.toastService.showConfirmation(confirmationData).then((confirmation) => {
      console.log(confirmation)
      if (confirmation) {
    this.couponService.DeleteCoupon(coupon).subscribe((res) => {
      if (res.isSuccess) {
        // Find the index of the coupon in the list
        const index = this.coupons.findIndex(
          (c) => c.couponId === coupon.couponId
        );
        // Remove the coupon from the list if found
        if (index !== -1) {
          this.coupons.splice(index, 1);
         this.Paginate();
      this.toastService.showToast('Coupon Deleted Successfully', 'Coupon Deleted','error');
         
        }
      }
    });
  }
  else{
    this.toastService.showToast('Action canceled','', 'info');
  }
})

  }

  onRowClick(coupon: ICoupon) {
    this.selectedCoupon = coupon;
    console.log('coupon,', coupon);
  }

  onPageChanged(page: number) {
    console.log('here');
    this.setPage(page);
  }
  onFormSubmitted(newCoupon: ICoupon) {
    if (!newCoupon) {
      return;
    }

    const existingCouponIndex = this.coupons.findIndex(
      (coupon) => coupon.couponId === newCoupon.couponId
    );

    if (existingCouponIndex === -1) {
      this.createOrUpdateCoupon(newCoupon,0);
    } else {

      this.coupons[existingCouponIndex] = newCoupon;
      this.createOrUpdateCoupon(newCoupon,1);
    }

    this.displayedCoupons = this.coupons;
    this.showCouponForm = false;
  }

  private createOrUpdateCoupon(newCoupon: ICoupon,type:number) {
    if(type==0){
   
       newCoupon.couponId =0;
       this.couponService.createCoupons(newCoupon).subscribe((res) => {
        if (res.isSuccess) {
          this.initializeCoupons();
          this.toastService.showToast('Coupon Created Successfully','Coupon Created', 'success');
        }
      });
    }
    else
    {
      this.couponService.updateCoupons(newCoupon).subscribe((res) => {
        if (res.isSuccess) {
          this.initializeCoupons();
          this.toastService.showToast('Coupon Updated successfully','Coupon Updated', 'info');
        }
      });
    }

   
  }

  GotoList(data: any) {
    this.showCouponForm = false;
  }

  showConfirmation(): void {
    const confirmationData: ConfirmationDialogData = {
      title: 'Confirmation',
      message: 'Are you sure you want to proceed?',
    };

    this.toastService
      .showConfirmation(confirmationData)
      .then(result => {
        if (result) {
          console.log('Confirmed');
          // Perform the action when confirmed
        } else {
          console.log('Canceled');
          // Perform the action when canceled or closed
        }
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }
 
}

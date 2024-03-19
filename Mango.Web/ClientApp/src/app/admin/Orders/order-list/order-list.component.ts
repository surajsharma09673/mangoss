import { Component, OnInit } from '@angular/core';
import { IOrderList } from '../../../share-module/Interface/OrderList.Interface';
import { AdminOrderService } from '../../Service/admin-Order.service';
import { PaginationService } from '../../../share-module/Service/pagination.service';
import { SearchService } from '../../../share-module/Service/search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'Admin-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css',
})
export class AdminOrderListComponent implements OnInit {
  orderlist: IOrderList[] = [];
  Displayorderlist: IOrderList[] = [];
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pages: number[] = [];
  searchTerm = '';
  constructor(
    private orderService: AdminOrderService,
    public paginationService: PaginationService,
    private searchService: SearchService,
    private Router:Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.GetAllOrders();
  }
  async search(): Promise<void> {
    this.searchService.updateSearchTerm(this.searchTerm)
    this.Displayorderlist = await this.searchService.search(this.orderlist);
  }
  onSearchTermChange(): void {
    if (this.searchTerm === '') {
   this.Paginate();
    }
    else{
    this.search();
    }
  }
  GetAllOrders() {
    this.orderService.getAllOrder().subscribe((res) => {
      this.orderlist = res.result as IOrderList[];
      console.log('hey data comming', this.orderlist);
      this.Paginate()
    });
  }
  goBack() {}
  Paginate()
  {
    this.Displayorderlist = this.paginationService.getPaginatedItems(
      this.orderlist,
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
    this.Displayorderlist = this.paginationService.getPaginatedItems(
      this.orderlist,
      this.currentPage,
      this.pageSize
    );
    this.pages = this.paginationService.getPageNumbers(this.totalPages);
  }

  private calculateTotalPages() {
    this.totalPages = this.paginationService.calculateTotalPages(
      this.orderlist.length,
      this.pageSize
    );
  }
  onPageChanged(page: number) {
    console.log('here');
    this.setPage(page);
  }

  editOrder(order:IOrderList)
  {
    
   this.Router.navigate(["/admin/dashboard/orderDetail/"+order.orderHeaderId])
  }
}

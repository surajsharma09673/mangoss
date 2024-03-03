import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements AfterViewInit {
  @Input() currentPage: number=0;
  @Input() totalPages: number=0;
  @Input()  pages: number[] = [];
  @Output() pageChanged = new EventEmitter<number>();

  onPageClick(page: number) {
    this.pageChanged.emit(page);
  }
  constructor()
  {
  }
  ngAfterViewInit(): void {
    console.log(this.pages,this.totalPages,this.currentPage)
  }
}
  

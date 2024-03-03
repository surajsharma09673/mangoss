// pagination.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {
  pageSize = 5;
  currentPage = 1;
  totalPages = 0;
  constructor() {}

  getPageSize(): number {
    return this.pageSize;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  getTotalPages(): number {
    return this.totalPages;
  }
  getPaginatedItems<T>(items: T[], currentPage: number, pageSize: number): T[] {
    if (!items || items.length === 0) {
      return [];
    }

    const startIndex = (currentPage - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  }

  calculateTotalPages(totalItems: number, pageSize: number): number {
    return Math.ceil(totalItems / pageSize);
  }

  getPageNumbers(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}

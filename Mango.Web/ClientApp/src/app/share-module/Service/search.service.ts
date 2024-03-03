// search.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchSubject.asObservable();

  constructor() {}

  // Generic search method that searches for a given term across all properties
  async search<T extends ArrayLike<unknown>>(data: T): Promise<T> {
    
    const searchTerm = await firstValueFrom(this.searchTerm$.pipe(debounceTime(300), distinctUntilChanged())) ?? ''; 
    if (searchTerm === '') {
        return data as T; // Return all data if search term is empty
      }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    const filteredData = Array.from(
      Array.prototype.filter.call(
        data,
        (item: Record<string, any>) =>
          Object.values(item).some(value =>
            this.isValueMatchingSearchTerm(value, lowerCaseSearchTerm)
          )
      )
    ) as unknown as T;

    return filteredData;
  }

  private isValueMatchingSearchTerm(value: any, searchTerm: string): boolean {
    if (typeof value === 'string' || typeof value === 'number') {
      const stringValue = String(value).toLowerCase();
      return stringValue.includes(searchTerm);
    }

    return false;
  }

  updateSearchTerm(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }
}

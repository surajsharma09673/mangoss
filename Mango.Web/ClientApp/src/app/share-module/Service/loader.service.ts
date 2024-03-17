import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  public isLoading = new BehaviorSubject<boolean>(false);
  constructor(private ngzone: NgZone) {
    this.isLoading.next(this.isLoadings());
  }
  setLoading(value: boolean): void {
    this.ngzone.run(() => {
      this.isLoading.next(value);
    });
  }

  GetLoading$(): Observable<boolean> {
    return this.isLoading.asObservable();
  }
  // Example method to check if the user is authenticated
  isLoadings(): boolean {
    return this.isLoading.value;
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PopupService {
  constructor(private router: Router) {}

  togglePopup(showPopup: boolean) {
    showPopup = !showPopup;
    if (!showPopup) {
      this.navigateToDefault();
    }
    return showPopup;
  }

  private navigateToDefault() {
    this.router.navigate(['/']);
  }
}

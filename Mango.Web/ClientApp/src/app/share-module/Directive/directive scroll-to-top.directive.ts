import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.querySelector('.btn-scroll-top') as HTMLElement;
    if (button) {
      if (window.scrollY > 200) { // Adjust this value as needed
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

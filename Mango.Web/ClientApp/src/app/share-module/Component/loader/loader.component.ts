import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { LoaderService } from '../../Service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
isLoading!: boolean;
constructor(public loaderService:LoaderService,private ngzone: NgZone){
  this.ngzone.run(() => {
    this.loaderService.isLoading.subscribe(value => {
      this.isLoading = value;
      // Trigger change detection if needed
    });
  });

}
}

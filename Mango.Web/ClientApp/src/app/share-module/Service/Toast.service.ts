import { Injectable } from "@angular/core";
import { IndividualConfig, ToastrService } from "ngx-toastr";
import { ConfirmationDialogData } from "../Interface/confirmation-dialog-data.interface";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../Component/confirmation-modal/confirmation-modal.component";
// Define ToastrMethod type
type ToastrMethod = (message: string, title: string, config?: Partial<IndividualConfig>) => void;

@Injectable()
  export class ToastService {
    private toastrMethods: Record<string, ToastrMethod> = {};
    
    constructor(private toastr: ToastrService,private dialog: MatDialog) {
      // Initialize the toastr methods
      this.toastrMethods = {
        info: this.toastr.info.bind(this.toastr),
        error: this.toastr.error.bind(this.toastr),
        success: this.toastr.success.bind(this.toastr),
        // Add other methods as needed
      };
    }
  
    showToast(message: string, title: string, type: string): void {
      const toastrConfig: Partial<IndividualConfig> = {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing',
        closeButton: true,
        positionClass: 'toast-top-right',
      };
      const toastrMethod = this.toastrMethods[type];
      if (toastrMethod) {
        toastrMethod(message, title, toastrConfig);
      } else {
        console.error(`Invalid toastr type: ${type}`);
      }
    }
  

      
        // Return a promise that resolves based on user interaction
    
   
    showConfirmation(data: ConfirmationDialogData): Promise<boolean> {
            const dialogRef = this.dialog.open<ConfirmationDialogComponent, ConfirmationDialogData>(
              ConfirmationDialogComponent,
              { data }
            );
            return dialogRef.afterClosed().toPromise().then(result => result as boolean);

          }
        }
      
    
      
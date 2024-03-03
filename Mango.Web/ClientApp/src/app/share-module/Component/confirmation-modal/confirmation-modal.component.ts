// confirmation-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogData } from '../../Interface/confirmation-dialog-data.interface';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl:'./confirmation-Modal.component.html' ,
  styleUrls: ['confirmation-modal.component.css'],
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
  
}

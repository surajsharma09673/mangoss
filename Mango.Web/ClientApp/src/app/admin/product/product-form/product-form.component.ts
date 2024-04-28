import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../../share-module/Service/Form.service';
import { ProductFormConfig } from '../../../share-module/FormConfig/Product-config';
import { IProduct } from '../../../share-module/Interface/Iproduct.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<any>();
  @Output() BackButton = new EventEmitter<any>();
  productForm!: FormGroup;
  @Input() initialFormValues: any;
  @Input() ProductIdHide: boolean = false;
  selectedFile: File | null = null;

  constructor(private formService: FormService) {}
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  submitForm(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.getRawValue();
      this.formSubmitted.emit({ formData, file: this.selectedFile });
      this.initForm(); // Reset the form after submission
    }
  }
  goBack() {
    this.BackButton.emit(true);
  }
  ngOnInit(): void {
    this.initForm();
    this.disableProductId();
  }
  ngAfterViewInit(): void {
    if(this.initialFormValues !=null){
      this.productForm?.patchValue(this.initialFormValues);
      }
      else{
        this.initForm();
        
      }
    }

  disableProductId() {
    this.productForm.get('productId')?.disable();
  }
  initForm(): void {
    this.productForm = this.formService.createForm(
      ProductFormConfig.formInstance,
      ProductFormConfig.validationRules
    );
  }
 
}

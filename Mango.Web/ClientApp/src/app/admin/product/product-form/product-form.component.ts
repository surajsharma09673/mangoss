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

  constructor(private formService: FormService) {}

  submitForm(): void {
    if (this.productForm.valid) {
      console.log(this.productForm.getRawValue());
      this.formSubmitted.emit(this.productForm.getRawValue());
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

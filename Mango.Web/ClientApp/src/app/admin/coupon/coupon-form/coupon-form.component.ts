// coupon-form.component.ts

import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../share-module/Service/Form.service';
import { CouponFormConfig } from '../../../share-module/FormConfig/Coupon-config';

@Component({
  selector: 'app-coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.css']
})
export class CouponFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<any>();
  @Output() BackButton = new EventEmitter<any>();
  couponForm!: FormGroup;
  @Input() initialFormValues: any;
  @Input()CouponIDHide:boolean=false;

  constructor(private formService:FormService) {
    
  }
  

  ngOnInit(): void {
    this.initForm();
  this.disableCouponId() 

  }
  ngAfterViewInit(): void {
  if(this.initialFormValues !=null){
    this.couponForm?.patchValue(this.initialFormValues);
    }
    else{
      this.initForm();
      
    }
  }
  disableCouponId() {
    this.couponForm.get('couponId')?.disable();
  }

  initForm(): void {
    this.couponForm = this.formService.createForm(
      CouponFormConfig.formInstance,
      CouponFormConfig.validationRules,
    );
  }

  submitForm(): void {
    if (this.couponForm.valid) {
      console.log(this.couponForm.getRawValue());
      this.formSubmitted.emit(this.couponForm.getRawValue());
      this.initForm(); // Reset the form after submission
    }
  }
  goBack()
  {
this.BackButton.emit(true);
  }
}

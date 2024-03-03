import { Validators } from "@angular/forms";

export const CouponFormConfig = {
    validationRules: {
        couponCode:[Validators.required],
        discountAmount:[Validators.required, Validators.min(0)],
        minAmount: [Validators.required, Validators.min(0)]
    },
    formInstance: {
     
        couponId: '',
        couponCode: '',
        discountAmount:'',
        minAmount:''
    },
  };


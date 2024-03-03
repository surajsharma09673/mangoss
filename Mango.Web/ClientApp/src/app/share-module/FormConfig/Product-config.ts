import { Validators } from "@angular/forms";

export const ProductFormConfig = {
    validationRules: {
      name: [Validators.required],
      price: [Validators.required,Validators.min(0)],
      categoryName: [Validators.required],
      imageUrl: [Validators.required],
    },
    formInstance: {
      productId: '',
      name: '',
      description: '',
      price: 0,
      categoryName: '',
      imageUrl: '',
    },
  };
  
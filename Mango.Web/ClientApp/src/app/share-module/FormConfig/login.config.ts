// login.config.ts
import { Validators } from '@angular/forms';

export const loginFormConfig = {
  validationRules: {
    UserName: [Validators.required],
    Password:[Validators.required]
  },
  formInstance: {
   
    UserName: '',
    Password: '',
  },
};

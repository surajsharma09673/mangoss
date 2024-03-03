// login.config.ts
import { Validators } from '@angular/forms';
import { emailOrPhoneValidator } from '../Validators/emailOrPhoneValidator';

export const registerFormConfig = {
  validationRules: {
    Email: [Validators.required],
    Name: [Validators.required],
    Password: [Validators.required, Validators.minLength(8)],
    PhoneNumber:[Validators.required, Validators.minLength(8)],
  },
  formInstance: {
    Name: '',
    Email: '',
    PhoneNumber: '',
    Password:''
  },
};

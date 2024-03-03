import { AbstractControl, ValidatorFn } from '@angular/forms';
import { EmailOrPhonePipe } from '../Pipes/EmailOrPhonePipe';


export function emailOrPhoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const errorMessage = new EmailOrPhonePipe().transform(value);

    return errorMessage
    ? errorMessage === 'Email' || errorMessage === 'Phone'
      ? null
      : errorMessage === 'required'
      ? { required: errorMessage }
      : { numberOrEmail: errorMessage }
    : null;

  };
}

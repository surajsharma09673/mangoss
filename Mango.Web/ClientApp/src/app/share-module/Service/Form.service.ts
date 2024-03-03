// form.service.ts
import { Injectable } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormService {
  constructor(private fb: UntypedFormBuilder) {}

  createForm(formInstance: any,validationRules?:{ [key: string]: any}): UntypedFormGroup {
    const formControls: { [key: string]: any } = {};

    Object.keys(formInstance).forEach(key => {
        const rules = validationRules && validationRules[key] ? validationRules[key] : [Validators.required];
      formControls[key] = [formInstance[key], rules];
    });

    return this.fb.group(formControls);
  }
}

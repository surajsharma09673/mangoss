import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { registerFormConfig } from "../../../share-module/FormConfig/register.config";
import { IuserRegister } from "../../../share-module/Interface/IuserRegister";
import { FormService } from "../../../share-module/Service/Form.service";
import { LoaderService } from "../../../share-module/Service/loader.service";
import { RegisterService } from "../../../share-module/Service/register.service";
import { PopupService } from "../../../share-module/Service/Popup.service";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showRegister: boolean = true;
  errorMessage: string = '';

  constructor(
    private registerService: RegisterService,
    private formService: FormService,
    private router: Router,
    private popupService:PopupService,
    private loaderservice:LoaderService
  ) {
    this.registerForm = this.formService.createForm(
      registerFormConfig.formInstance,
      registerFormConfig.validationRules
    );
    
  }

  ngOnInit(): void {
    this.registerForm.get('Name')?.setValue('suraj');
    this.registerForm.get('Email')?.setValue('8876309673');
    this.registerForm.get('Password')?.setValue('Suraj@123456');
  }
  onSubmit() {
    const Userdata: IuserRegister = this.registerForm.value as IuserRegister;
    this.register(Userdata);
  }
  register(Userdata: IuserRegister) {
    if(this.registerForm.valid){
    this.loaderservice.setLoading(true)
    this.registerService.register(Userdata).subscribe((res) => {
      console.log('registerdataa', res);
      this.loaderservice.setLoading(false)
    },error=> this.handleError(error));
  }
  }
  navigateToLogin() {
    this.router.navigate(['/home/login']); // Navigate to the registration route
  }
  toggleRegisterPopup() {
    this.showRegister = this.popupService.togglePopup(this.showRegister);;
  }
  handleError(error:any)
  {
    this.errorMessage=error.error
    setTimeout(() => {
      this.loaderservice.setLoading(false)
    }, 2000);
   
  }
}

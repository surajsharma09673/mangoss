import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { loginFormConfig } from "../../../share-module/FormConfig/login.config";
import { IuserLogin } from "../../../share-module/Interface/IuserRegister";
import { FormService } from "../../../share-module/Service/Form.service";
import { LoginService } from "../../../share-module/Service/login.service";
import { PopupService } from "../../../share-module/Service/Popup.service";
import { TokenService } from "../../../share-module/Service/token.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showLogin = true;
  constructor(
    private loginservice: LoginService,
    private formService: FormService,
    private router:Router,
    private popupService:PopupService,
    private tokenService:TokenService

  ) {
    console.log("login");
    this.loginForm = this.formService.createForm(
      loginFormConfig.formInstance,
      loginFormConfig.validationRules
    );
  }

  ngOnInit(): void {
    this.loginForm.get('Name')?.setValue('suraj');
    this.loginForm.get('EmailOrPhoneNumber')?.setValue('7876309670');
    this.loginForm.get('Password')?.setValue('UNIpay@123');
  }

  onSubmit() {
    const loginFormValues: IuserLogin = this.loginForm.value as IuserLogin; // Use the LoginForm interface
    if(this.loginForm.valid)
    {
    this.login(loginFormValues);
    }
  }

  login(Logindetail: IuserLogin) {
    this.loginservice.login(Logindetail).subscribe((res) => {
      if(res.isSuccess)
      {
        if(this.tokenService.isAdmin())
        this.router.navigate(['/admin/dashboard']);
        this.router.navigate(['/home']);

      }
      console.log('logindata', res);
    });
  }
  toggleLoginPopup() {
    this.showLogin =this.popupService.togglePopup(this.showLogin);
    
  }
  navigateToRegister(): void {
    this.router.navigate(['/home/register']); // Navigate to the registration route
  }
}

import {
  CartService,
  DefaultValueAccessor,
  FooterComponent,
  FormControlName,
  FormGroupDirective,
  FormService,
  HeaderComponent,
  HomeProductService,
  LoaderService,
  LoginService,
  MatButton,
  MatError,
  MatFormField,
  MatIcon,
  MatIconButton,
  MatInput,
  MatLabel,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  PopupService,
  RegisterService,
  SharedModule,
  ToastService,
  TokenService,
  Validators,
  ɵNgNoValidate
} from "./chunk-G46NJT44.js";
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-4V623VH6.js";
import {
  CurrencyPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgZone,
  SlicePipe,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NDXHV5NK.js";

// src/app/share-module/FormConfig/login.config.ts
var loginFormConfig = {
  validationRules: {
    UserName: [Validators.required],
    Password: [Validators.required]
  },
  formInstance: {
    UserName: "",
    Password: ""
  }
};

// src/app/HomePage/Account/login/login.component.ts
function LoginComponent_div_0_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " User Name is required. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_0_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function LoginComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleLoginPopup());
    });
    \u0275\u0275elementStart(3, "mat-icon", 4);
    \u0275\u0275text(4, "clear");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 5);
    \u0275\u0275listener("ngSubmit", function LoginComponent_div_0_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onSubmit());
    });
    \u0275\u0275elementStart(6, "mat-form-field", 6)(7, "mat-label");
    \u0275\u0275text(8, "User Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 7);
    \u0275\u0275template(10, LoginComponent_div_0_mat_error_10_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 6)(12, "mat-label");
    \u0275\u0275text(13, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 9);
    \u0275\u0275template(15, LoginComponent_div_0_mat_error_15_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 10);
    \u0275\u0275text(17, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 11);
    \u0275\u0275listener("click", function LoginComponent_div_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.navigateToRegister());
    });
    \u0275\u0275text(19, " Register ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r0.loginForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx_r0.loginForm.get("UserName")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r0.loginForm.get("UserName")) == null ? null : tmp_1_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r0.loginForm.get("Password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.loginForm.get("Password")) == null ? null : tmp_2_0.touched));
  }
}
var _LoginComponent = class _LoginComponent {
  constructor(loginservice, formService, router, popupService, tokenService) {
    this.loginservice = loginservice;
    this.formService = formService;
    this.router = router;
    this.popupService = popupService;
    this.tokenService = tokenService;
    this.showLogin = true;
    console.log("login");
    this.loginForm = this.formService.createForm(loginFormConfig.formInstance, loginFormConfig.validationRules);
  }
  ngOnInit() {
    this.loginForm.get("Name")?.setValue("suraj");
    this.loginForm.get("EmailOrPhoneNumber")?.setValue("7876309670");
    this.loginForm.get("Password")?.setValue("UNIpay@123");
  }
  onSubmit() {
    const loginFormValues = this.loginForm.value;
    if (this.loginForm.valid) {
      this.login(loginFormValues);
    }
  }
  login(Logindetail) {
    this.loginservice.login(Logindetail).subscribe((res) => {
      if (res.isSuccess) {
        if (this.tokenService.isAdmin())
          this.router.navigate(["/admin/dashboard"]);
        this.router.navigate(["/home"]);
      }
      console.log("logindata", res);
    });
  }
  toggleLoginPopup() {
    this.showLogin = this.popupService.togglePopup(this.showLogin);
  }
  navigateToRegister() {
    this.router.navigate(["/home/register"]);
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(\u0275\u0275directiveInject(LoginService), \u0275\u0275directiveInject(FormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PopupService), \u0275\u0275directiveInject(TokenService));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["class", "modal-overlay", 4, "ngIf"], [1, "modal-overlay"], [1, "modal-popup"], ["mat-icon-button", "", 1, "close-button", 3, "click"], ["aria-label", "Close"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "type", "text", "formControlName", "UserName", 1, "input-field"], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "Password", 1, "input-field"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mat-stroked-button", "", "color", "accent", 1, "register-button", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LoginComponent_div_0_Template, 20, 3, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.showLogin);
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgIf, FormGroupDirective, FormControlName, MatIcon, MatButton, MatIconButton, MatInput, MatFormField, MatLabel, MatError], styles: ["\n\n.login-button[_ngcontent-%COMP%]:hover {\n  background-color: #1976d2;\n  color: white;\n}\n.register-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  align-self: flex-end;\n  padding: 8px 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: transparent;\n  transition:\n    background-color 0.3s ease-in-out,\n    color 0.3s ease-in-out,\n    border-color 0.3s ease-in-out;\n}\n.register-button[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n  border-color: #999;\n}\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\HomePage\\Account\\login\\login.component.ts", lineNumber: 18 });
})();

// src/app/share-module/FormConfig/register.config.ts
var registerFormConfig = {
  validationRules: {
    Email: [Validators.required],
    Name: [Validators.required],
    Password: [Validators.required, Validators.minLength(8)],
    PhoneNumber: [Validators.required, Validators.minLength(8)]
  },
  formInstance: {
    Name: "",
    Email: "",
    PhoneNumber: "",
    Password: ""
  }
};

// src/app/HomePage/Account/register/register.component.ts
function RegisterComponent_div_0_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Name is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Invalid email format. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password should be at least 6 characters long. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Phone Number is required. ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r7.errorMessage);
  }
}
function RegisterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function RegisterComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.toggleRegisterPopup());
    });
    \u0275\u0275elementStart(3, "mat-icon", 4);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "form", 5);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_div_0_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.onSubmit());
    });
    \u0275\u0275elementStart(6, "mat-form-field", 6)(7, "mat-label");
    \u0275\u0275text(8, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 7);
    \u0275\u0275template(10, RegisterComponent_div_0_mat_error_10_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 6)(12, "mat-label");
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 9);
    \u0275\u0275template(15, RegisterComponent_div_0_mat_error_15_Template, 2, 0, "mat-error", 8)(16, RegisterComponent_div_0_mat_error_16_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 6)(18, "mat-label");
    \u0275\u0275text(19, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 10);
    \u0275\u0275template(21, RegisterComponent_div_0_mat_error_21_Template, 2, 0, "mat-error", 8)(22, RegisterComponent_div_0_mat_error_22_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 11)(24, "mat-label");
    \u0275\u0275text(25, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 12);
    \u0275\u0275template(27, RegisterComponent_div_0_mat_error_27_Template, 2, 0, "mat-error", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, RegisterComponent_div_0_div_28_Template, 2, 1, "div", 13);
    \u0275\u0275elementStart(29, "button", 14);
    \u0275\u0275text(30, "Register ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 15);
    \u0275\u0275listener("click", function RegisterComponent_div_0_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r11 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r11.navigateToLogin());
    });
    \u0275\u0275text(32, " Login ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r0.registerForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx_r0.registerForm.get("Name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r0.registerForm.get("Name")) == null ? null : tmp_1_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r0.registerForm.get("Email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.registerForm.get("Email")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r0.registerForm.get("Email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.registerForm.get("Email")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.registerForm.get("Password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.registerForm.get("Password")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.registerForm.get("Password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.registerForm.get("Password")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r0.registerForm.get("PhoneNumber")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.registerForm.get("PhoneNumber")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
  }
}
var _RegisterComponent = class _RegisterComponent {
  constructor(registerService, formService, router, popupService, loaderservice) {
    this.registerService = registerService;
    this.formService = formService;
    this.router = router;
    this.popupService = popupService;
    this.loaderservice = loaderservice;
    this.showRegister = true;
    this.errorMessage = "";
    this.registerForm = this.formService.createForm(registerFormConfig.formInstance, registerFormConfig.validationRules);
  }
  ngOnInit() {
    this.registerForm.get("Name")?.setValue("suraj");
    this.registerForm.get("Email")?.setValue("8876309673");
    this.registerForm.get("Password")?.setValue("Suraj@123456");
  }
  onSubmit() {
    const Userdata = this.registerForm.value;
    this.register(Userdata);
  }
  register(Userdata) {
    if (this.registerForm.valid) {
      this.loaderservice.showLoader();
      this.registerService.register(Userdata).subscribe((res) => {
        console.log("registerdataa", res);
        this.loaderservice.hideLoader();
      }, (error) => this.handleError(error));
    }
  }
  navigateToLogin() {
    this.router.navigate(["/home/login"]);
  }
  toggleRegisterPopup() {
    this.showRegister = this.popupService.togglePopup(this.showRegister);
    ;
  }
  handleError(error) {
    this.errorMessage = error.error;
    setTimeout(() => {
      this.loaderservice.hideLoader();
    }, 2e3);
  }
};
_RegisterComponent.\u0275fac = function RegisterComponent_Factory(t) {
  return new (t || _RegisterComponent)(\u0275\u0275directiveInject(RegisterService), \u0275\u0275directiveInject(FormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PopupService), \u0275\u0275directiveInject(LoaderService));
};
_RegisterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 1, vars: 1, consts: [["class", "modal-overlay", 4, "ngIf"], [1, "modal-overlay"], [1, "modal-popup"], ["mat-icon-button", "", 1, "close-button", 3, "click"], ["aria-label", "Close"], [1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "type", "text", "formControlName", "Name", "id", "Name", 1, "input-field"], [4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "Email", "id", "Email", 1, "input-field"], ["matInput", "", "type", "password", "formControlName", "Password", "id", "Password", 1, "input-field"], ["appearance", "outline"], ["matInput", "", "type", "text", "formControlName", "PhoneNumber", "id", "PhoneNumber", 1, "input-field"], ["class", "error-message", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "register-button"], ["mat-stroked-button", "", "color", "accent", "type", "button", 1, "login-button", 3, "click"], [1, "error-message"]], template: function RegisterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RegisterComponent_div_0_Template, 33, 8, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.showRegister);
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgIf, FormGroupDirective, FormControlName, MatIcon, MatButton, MatIconButton, MatInput, MatFormField, MatLabel, MatError], styles: ["\n\n.login-button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-top: 20px;\n  padding: 8px 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: transparent;\n  transition:\n    background-color 0.3s ease-in-out,\n    color 0.3s ease-in-out,\n    border-color 0.3s ease-in-out;\n}\n.login-button[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n  border-color: #999;\n}\n.register-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;\n}\n.register-button[_ngcontent-%COMP%]:hover {\n  background-color: #1976d2;\n  color: white;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
var RegisterComponent = _RegisterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\HomePage\\Account\\register\\register.component.ts", lineNumber: 18 });
})();

// src/app/HomePage/home/home.component.ts
var _HomeComponent = class _HomeComponent {
  constructor(Tokenservice, router) {
    this.Tokenservice = Tokenservice;
    this.router = router;
    this.checkUserRoleAndNavigate();
  }
  checkUserRoleAndNavigate() {
    if (this.Tokenservice.validateToken())
      this.router.navigate(["/admin/dashboard"]);
    this.router.navigate(["/home"]);
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)(\u0275\u0275directiveInject(TokenService), \u0275\u0275directiveInject(Router));
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, consts: [[1, "main-content"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-footer");
  }
}, dependencies: [RouterOutlet, HeaderComponent, FooterComponent], styles: ["\n\n/*# sourceMappingURL=home.component.css.map */"] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\HomePage\\home\\home.component.ts", lineNumber: 10 });
})();

// src/app/HomePage/Product/product-detail/product-detail.component.ts
function ProductDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
    \u0275\u0275listener("click", function ProductDetailComponent_div_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(4, "Go Back");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
    \u0275\u0275element(7, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 8)(10, "h2");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 9);
    \u0275\u0275listener("click", function ProductDetailComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.viewCart());
    });
    \u0275\u0275text(13, "View Cart ");
    \u0275\u0275elementStart(14, "span", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "p", 11);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 12);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 13)(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "button", 15);
    \u0275\u0275listener("click", function ProductDetailComponent_div_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.addToCart());
    });
    \u0275\u0275text(26, "Add to Cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 16)(28, "label", 17);
    \u0275\u0275text(29, "Quantity:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_0_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.quantity, $event) || (ctx_r5.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275propertyInterpolate("alt", ctx_r0.product.name);
    \u0275\u0275property("src", ctx_r0.product.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.product.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(18, 8, ctx_r0.product.price, "USD", "symbol", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.product.categoryName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.product.description);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.quantity);
  }
}
var _ProductDetailComponent = class _ProductDetailComponent {
  constructor(route, HomeproductService, router, Tokenservice, toastService) {
    this.route = route;
    this.HomeproductService = HomeproductService;
    this.router = router;
    this.Tokenservice = Tokenservice;
    this.toastService = toastService;
    this.numberOfItems = 1;
    this.productId = null;
    this.quantity = 1;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (params) {
        const productIdString = params.get("id");
        this.productId = productIdString ? +productIdString : null;
        console.log("Product ID:", this.productId);
        this.HomeproductService.getProductById(this.productId).subscribe((res) => {
          this.product = res;
          console.log(res, "here");
        });
      }
    });
  }
  addToCart() {
    this.product.count = this.quantity;
    this.HomeproductService.AddProductDetails(this.product).subscribe((res) => {
      if (res != null && res.isSuccess) {
        this.toastService.showToast("Item Added SUccessfully", this.product.name + " SUccessfully ", "success");
        console.log(res);
      }
    });
  }
  goBack() {
    this.router.navigate(["/home"]);
  }
  viewCart() {
    if (this.Tokenservice.isCustomer()) {
      this.router.navigate(["/home/cart"]);
    } else {
      this.router.navigate(["/home/login"]);
    }
  }
};
_ProductDetailComponent.\u0275fac = function ProductDetailComponent_Factory(t) {
  return new (t || _ProductDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HomeProductService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TokenService), \u0275\u0275directiveInject(ToastService));
};
_ProductDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "row", "mt-3", "mb-3"], [1, "col-md-12"], [1, "btn", "btn-primary", 3, "click"], [1, "row"], [1, "col-md-6"], [1, "img-fluid", 3, "src", "alt"], [1, "d-flex", "justify-content-between", "align-items-start", "flex-wrap"], [1, "btn", "btn-info", "mt-2", "view-cart-btn", 3, "click"], [1, "badge", "badge-light"], [1, "text-danger", 2, "font-size", "24px", "font-weight", "bold"], [1, "badge", "bg-warning", "text-white"], [1, "description-container"], [1, "mt-3"], [1, "btn", "btn-success", 3, "click"], [1, "mt-2"], ["for", "quantity"], ["type", "number", "id", "quantity", "placeholder", "1", "min", "1", 1, "form-control", "quantity-input", 3, "ngModel", "ngModelChange"]], template: function ProductDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailComponent_div_0_Template, 31, 13, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.product);
  }
}, dependencies: [DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, NgIf, CurrencyPipe], styles: ["\n\n.quantity-input[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.view-cart-btn[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: #fff;\n  border: 1px solid #28a745;\n  box-shadow: 0 2px 4px rgba(40, 167, 69, 0.1);\n  transition:\n    background-color 0.3s ease-in-out,\n    border-color 0.3s ease-in-out,\n    color 0.3s ease-in-out;\n}\n.view-cart-btn[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n  border-color: #218838;\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
var ProductDetailComponent = _ProductDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\HomePage\\Product\\product-detail\\product-detail.component.ts", lineNumber: 16 });
})();

// src/app/HomePage/Product/product-card/product-card.component.ts
var _c0 = (a0) => ({ "collapsed": a0 });
function ProductCardComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275element(3, "img", 6);
    \u0275\u0275elementStart(4, "div", 7)(5, "h5", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9)(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 12)(14, "p", 13);
    \u0275\u0275listener("click", function ProductCardComponent_div_3_Template_p_click_14_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r3);
      const product_r1 = restoredCtx.$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDescription(product_r1.productId));
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "slice");
    \u0275\u0275elementStart(17, "span", 14);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 15)(20, "a", 16);
    \u0275\u0275listener("click", function ProductCardComponent_div_3_Template_a_click_20_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r3);
      const product_r1 = restoredCtx.$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.viewProductDetail(product_r1.productId));
    });
    \u0275\u0275text(21, "Details");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", product_r1.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 7, product_r1.price, "USD", "symbol", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r1.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c0, !ctx_r0.showFullDescription[product_r1.productId]));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.showFullDescription[product_r1.productId] ? product_r1.description : \u0275\u0275pipeBind3(16, 12, product_r1.description, 0, 22), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", product_r1.description.length > 35 ? ctx_r0.showFullDescription[product_r1.productId] ? "See less" : "... See more" : "", " ");
  }
}
var _ProductCardComponent = class _ProductCardComponent {
  constructor(HomeproductService, router) {
    this.HomeproductService = HomeproductService;
    this.router = router;
    this.products = [];
    this.showFullDescription = {};
    this.initializeProducts();
  }
  initializeProducts() {
    this.HomeproductService.getAllProduct().subscribe((product) => {
      this.products = product;
    });
  }
  // Function to toggle the visibility of the full description
  toggleDescription(productId) {
    this.showFullDescription[productId] = !this.showFullDescription[productId];
  }
  viewProductDetail(productId) {
    console.log(productId, "yo");
    this.router.navigate(["home/product", productId.toString()]);
  }
};
_ProductCardComponent.\u0275fac = function ProductCardComponent_Factory(t) {
  return new (t || _ProductCardComponent)(\u0275\u0275directiveInject(HomeProductService), \u0275\u0275directiveInject(Router));
};
_ProductCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "row"], ["class", "col-lg-3 col-md-4 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-4", "col-sm-6"], [1, "border", "rounded", "product-card", "mb-3"], [1, "card"], ["alt", "Product Image", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "d-flex", "justify-content-between", "py-2"], [1, "text-danger", 2, "font-size", "20px", "font-weight", "bold"], [1, "badge", "bg-warning", "text-white"], [1, "d-flex", "align-items-center", "description-container"], [1, "card-text", 3, "ngClass", "click"], [2, "color", "#3498db", "font-weight", "bold"], [1, "mt-2"], [1, "btn", "btn-success", "btn-sm", "form-control", 3, "click"]], template: function ProductCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form")(1, "div", 0)(2, "div", 1);
    \u0275\u0275template(3, ProductCardComponent_div_3_Template, 22, 18, "div", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.products);
  }
}, dependencies: [\u0275NgNoValidate, NgControlStatusGroup, NgForm, NgClass, NgForOf, SlicePipe, CurrencyPipe], styles: ['\n\n.product-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.product-card[_ngcontent-%COMP%] {\n  flex: 0 1 calc(33.33% - 10px);\n  margin: 1px 0;\n  padding: 1px;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease-in-out;\n  background-color: #ffffff;\n  cursor: pointer;\n  max-width: 350px;\n}\n@media (max-width: 1200px) {\n  .product-card[_ngcontent-%COMP%] {\n    flex: 0 1 calc(33.33% - 10px);\n  }\n}\n@media (max-width: 992px) {\n  .product-card[_ngcontent-%COMP%] {\n    flex: 0 1 calc(50% - 10px);\n  }\n}\n@media (max-width: 576px) {\n  .product-card[_ngcontent-%COMP%] {\n    flex: 0 1 calc(100% - 10px);\n  }\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 180px;\n  object-fit: cover;\n  border-radius: 10px;\n}\n.product-details[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 8px;\n  color: #333333;\n}\n.product-description[_ngcontent-%COMP%] {\n  color: #666666;\n  margin-bottom: 12px;\n}\n.product-price[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #e44d26;\n  font-size: 1.1em;\n}\n.collapsed[_ngcontent-%COMP%] {\n  max-height: 3.6em;\n  overflow: hidden;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.product-card[_ngcontent-%COMP%]::before {\n  content: "\\1f958";\n  font-size: 2em;\n  color: #e44d26;\n  display: block;\n  margin-bottom: 10px;\n}\n.description-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.hidden-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 0 5px;\n  font-weight: bold;\n  color: #e44d26;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=product-card.component.css.map */'] });
var ProductCardComponent = _ProductCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src\\app\\HomePage\\Product\\product-card\\product-card.component.ts", lineNumber: 11 });
})();

// src/app/HomePage/cart/cart.component.ts
function CartComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 43)(15, "a", 44);
    \u0275\u0275listener("click", function CartComponent_div_24_div_1_Template_a_click_15_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r9);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r8 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r8.removeFromCart(item_r7.cartDetailId));
    });
    \u0275\u0275element(16, "i", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r7.productDto.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.productDto.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r7 == null ? null : item_r7.productDto == null ? null : item_r7.productDto.description, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" $$ ", item_r7 == null ? null : item_r7.productDto == null ? null : item_r7.productDto.price, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r7 == null ? null : item_r7.count, "");
  }
}
function CartComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CartComponent_div_24_div_1_Template, 17, 5, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.cartDetails);
  }
}
function CartComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "p", 47);
    \u0275\u0275text(2, "Your cart is empty. Please add items to your cart.");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function CartComponent_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.RemoveCoupon());
    });
    \u0275\u0275text(1, " Remove Coupon ");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function CartComponent_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.ApplyCoupon());
    });
    \u0275\u0275text(1, " Apply ");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Order Discount: ");
    \u0275\u0275elementStart(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(4, 1, ctx_r5.cartHeader.discount, "USD", "symbol", "1.2-2"), " ");
  }
}
var _CartComponent = class _CartComponent {
  constructor(cartService, zone) {
    this.cartService = cartService;
    this.zone = zone;
    this.cartDetails = [];
    this.CouponCode = "";
    this.CouponCodeAdded = false;
  }
  ngOnInit() {
    this.loadCartItems();
  }
  loadCartItems() {
    this.zone.run(() => {
      this.cartService.getCartItems().subscribe((res) => {
        this.cartItems = res;
        this.cartHeader = res.cartHeader;
        this.cartDetails = res.cartDetails;
        if (this.cartHeader?.couponCode) {
          this.CouponCode = this.cartHeader.couponCode;
          this.CouponCodeAdded = true;
        } else {
          this.CouponCode = "";
          this.CouponCodeAdded = false;
        }
      });
    });
  }
  removeFromCart(cartDetailId) {
    console.log(cartDetailId, "yo");
    this.cartService.removeFromCart(cartDetailId).subscribe((res) => {
      if (res.isSuccess) {
        console.log("card remove succefully");
        this.loadCartItems();
      }
    });
  }
  clearCart() {
  }
  ApplyCoupon() {
    this.cartItems.cartHeader.couponCode = this.CouponCode;
    this.cartService.ApplyCartCoupon(this.cartItems).subscribe((res) => {
      if (res.isSuccess) {
        this.loadCartItems();
        console.log(res);
      }
    });
  }
  RemoveCoupon() {
    this.cartService.RemoveCartCoupon(this.cartItems).subscribe((res) => {
      if (res.isSuccess) {
        this.loadCartItems();
        console.log(res);
      }
    });
  }
};
_CartComponent.\u0275fac = function CartComponent_Factory(t) {
  return new (t || _CartComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(NgZone));
};
_CartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 56, vars: 12, consts: [["method", "post", 1, "container", "mt-4"], [1, "card", "border-dark", "shadow"], [1, "card-header", "bg-dark", "text-light", "row"], [1, "col-6"], [1, "text-success"], [1, "bi", "bi-cart"], [1, "col-6", "text-end"], [1, "btn", "btn-outline-warning", "mt-2", "btn-sm"], [1, "card-body"], [1, "d-none", "d-lg-block"], [1, "row", "text-info"], [1, "col-lg-2"], [1, "col-lg-5"], [1, "col-lg-1"], [4, "ngIf", "ngIfElse"], ["emptyCart", ""], [1, "row", "mt-3"], [1, "col-12"], [1, "text-primary"], [1, "row"], [1, "col-12", "col-md-3", "mb-2"], [1, "input-group"], [1, "input-group-text", "bg-primary", "text-light"], ["type", "search", 1, "form-control", "form-control-sm", 2, "width", "80px", 3, "ngModel", "ngModelChange"], ["type", "button", "class", "btn btn-danger btn-sm ms-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success btn-sm ms-2", 3, "click", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-12", "text-end"], [1, "text-primary", "total-cost"], [1, "bi", "bi-currency-dollar"], [1, "badge", "bg-success", "p-2", 2, "font-size", "18px", "box-shadow", "5px 9px 13px rgba(0, 0, 0, 0.1)", "width", "135px", "display", "inline-block", "margin-left", "10px", "margin-right", "10px"], [4, "ngIf"], [1, "col-6", "col-md-3", "mb-2"], ["type", "submit", 1, "btn", "btn-outline-danger", "form-control"], [1, "col-6", "col-md-3", "offset-md-6"], ["disabled", "", 1, "btn", "btn-success", "form-control"], ["class", "row mb-3", 4, "ngFor", "ngForOf"], [1, "row", "mb-3"], [1, "col-12", "col-md-2", "text-center"], ["width", "80", 1, "rounded", 3, "src"], [1, "col-12", "col-md-5"], [2, "font-size", "14px"], [1, "col-6", "col-md-2", "pt-md-4", 2, "font-size", "14px"], [1, "col-6", "col-md-1", "pt-md-4", "text-center"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bi", "bi-trash-fill"], [1, "text-center"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "ms-2", 3, "click"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "ms-2", 3, "click"], [1, "badge", "bg-warning", "text-dark", "p-2", 2, "font-size", "18px", "box-shadow", "5px 9px 13px rgba(0, 0, 0, 0.1)", "width", "135px", "display", "inline-block", "margin-left", "10px", "margin-top", "5px", "margin-right", "10px"]], template: function CartComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275element(5, "i", 5);
    \u0275\u0275text(6, " \xA0 Shopping Cart ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "a", 7);
    \u0275\u0275text(9, "Continue Shopping");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11);
    \u0275\u0275text(14, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275text(16, "Product Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11);
    \u0275\u0275text(18, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 11);
    \u0275\u0275text(20, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 13);
    \u0275\u0275text(22, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(23, "hr");
    \u0275\u0275template(24, CartComponent_div_24_Template, 2, 1, "div", 14)(25, CartComponent_ng_template_25_Template, 3, 0, "ng-template", null, 15, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(27, "hr");
    \u0275\u0275elementStart(28, "div", 16)(29, "div", 17)(30, "h5", 18);
    \u0275\u0275text(31, "Apply Coupon");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "span", 22);
    \u0275\u0275text(36, "Coupon:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function CartComponent_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.CouponCode, $event) || (ctx.CouponCode = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, CartComponent_button_38_Template, 2, 0, "button", 24)(39, CartComponent_button_39_Template, 2, 0, "button", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 26)(41, "div", 27)(42, "p", 28);
    \u0275\u0275element(43, "i", 29);
    \u0275\u0275text(44, " Total Price: ");
    \u0275\u0275elementStart(45, "span", 30);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, CartComponent_span_48_Template, 5, 6, "span", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 16)(50, "div", 32)(51, "button", 33);
    \u0275\u0275text(52, "Email Cart");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 34)(54, "button", 35);
    \u0275\u0275text(55, "(Coming Soon!)");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const _r2 = \u0275\u0275reference(26);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngIf", ctx.cartDetails.length > 0)("ngIfElse", _r2);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.CouponCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.CouponCodeAdded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.CouponCodeAdded);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(47, 7, ctx.cartHeader == null ? null : ctx.cartHeader.cartTotal, "USD", "symbol", "1.2-2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.cartHeader && ctx.cartHeader.discount > 0);
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NgForOf, NgIf, CurrencyPipe], styles: ["\n\n/*# sourceMappingURL=cart.component.css.map */"] });
var CartComponent = _CartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\HomePage\\cart\\cart.component.ts", lineNumber: 15 });
})();

// src/app/HomePage/home-page-routing.module.ts
var routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", component: ProductCardComponent },
      { path: "product/:id", component: ProductDetailComponent },
      { path: "cart", component: CartComponent }
      // Add additional child routes if needed
    ]
  }
];
var _HomePageRoutingModule = class _HomePageRoutingModule {
};
_HomePageRoutingModule.\u0275fac = function HomePageRoutingModule_Factory(t) {
  return new (t || _HomePageRoutingModule)();
};
_HomePageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomePageRoutingModule });
_HomePageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var HomePageRoutingModule = _HomePageRoutingModule;

// src/app/HomePage/home-page.module.ts
var _HomePageModule = class _HomePageModule {
};
_HomePageModule.\u0275fac = function HomePageModule_Factory(t) {
  return new (t || _HomePageModule)();
};
_HomePageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomePageModule });
_HomePageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  HomePageRoutingModule,
  SharedModule
] });
var HomePageModule = _HomePageModule;
export {
  HomePageModule
};
//# sourceMappingURL=chunk-DAXYPNVO.js.map

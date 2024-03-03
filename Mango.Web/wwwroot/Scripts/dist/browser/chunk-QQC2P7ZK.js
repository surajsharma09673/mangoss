import {
  ApiEndpointService,
  DefaultValueAccessor,
  FooterComponent,
  FormControlName,
  FormGroupDirective,
  FormService,
  HeaderComponent,
  HttpService,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  PaginationComponent,
  PaginationService,
  SearchService,
  SharedModule,
  ToastService,
  TokenService,
  Validators,
  ɵNgNoValidate
} from "./chunk-X7KZHDOJ.js";
import {
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-4V623VH6.js";
import {
  CurrencyPipe,
  EventEmitter,
  NgForOf,
  NgIf,
  __async,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
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

// src/app/admin/Service/admin-coupon.service.ts
var _CouponService = class _CouponService {
  constructor(http, endpointservice) {
    this.http = http;
    this.endpointservice = endpointservice;
  }
  getCoupons() {
    var url = this.endpointservice.endpoints.GetCoupon;
    return this.http.get(url);
  }
  createCoupons(Icoupon) {
    var url = this.endpointservice.endpoints.CreateCoupon;
    return this.http.post(url, Icoupon);
  }
  updateCoupons(Icoupon) {
    var url = this.endpointservice.endpoints.UpdateCoupon;
    return this.http.post(url, Icoupon);
  }
  DeleteCoupon(data) {
    var url = this.endpointservice.endpoints.DeleteCoupon;
    return this.http.post(url, data);
  }
};
_CouponService.\u0275fac = function CouponService_Factory(t) {
  return new (t || _CouponService)(\u0275\u0275inject(HttpService), \u0275\u0275inject(ApiEndpointService));
};
_CouponService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CouponService, factory: _CouponService.\u0275fac });
var CouponService = _CouponService;

// src/app/share-module/FormConfig/Coupon-config.ts
var CouponFormConfig = {
  validationRules: {
    couponCode: [Validators.required],
    discountAmount: [Validators.required, Validators.min(0)],
    minAmount: [Validators.required, Validators.min(0)]
  },
  formInstance: {
    couponId: "",
    couponCode: "",
    discountAmount: "",
    minAmount: ""
  }
};

// src/app/admin/coupon/coupon-form/coupon-form.component.ts
function CouponFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 19);
    \u0275\u0275text(2, "Coupon ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", true);
  }
}
function CouponFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "Coupon Code is required.");
    \u0275\u0275elementEnd();
  }
}
function CouponFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "Maximum length is 10 characters.");
    \u0275\u0275elementEnd();
  }
}
function CouponFormComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "Discount Amount is required.");
    \u0275\u0275elementEnd();
  }
}
function CouponFormComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "Discount Amount must be greater than or equal to 0.");
    \u0275\u0275elementEnd();
  }
}
function CouponFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "Minimum Amount is required.");
    \u0275\u0275elementEnd();
  }
}
function CouponFormComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "Minimum Amount must be greater than or equal to 0.");
    \u0275\u0275elementEnd();
  }
}
var _CouponFormComponent = class _CouponFormComponent {
  constructor(formService) {
    this.formService = formService;
    this.formSubmitted = new EventEmitter();
    this.BackButton = new EventEmitter();
    this.CouponIDHide = false;
  }
  ngOnInit() {
    this.initForm();
    this.disableCouponId();
  }
  ngAfterViewInit() {
    if (this.initialFormValues != null) {
      this.couponForm?.patchValue(this.initialFormValues);
    } else {
      this.initForm();
    }
  }
  disableCouponId() {
    this.couponForm.get("couponId")?.disable();
  }
  initForm() {
    this.couponForm = this.formService.createForm(CouponFormConfig.formInstance, CouponFormConfig.validationRules);
  }
  submitForm() {
    if (this.couponForm.valid) {
      console.log(this.couponForm.getRawValue());
      this.formSubmitted.emit(this.couponForm.getRawValue());
      this.initForm();
    }
  }
  goBack() {
    this.BackButton.emit(true);
  }
};
_CouponFormComponent.\u0275fac = function CouponFormComponent_Factory(t) {
  return new (t || _CouponFormComponent)(\u0275\u0275directiveInject(FormService));
};
_CouponFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CouponFormComponent, selectors: [["app-coupon-form"]], inputs: { initialFormValues: "initialFormValues", CouponIDHide: "CouponIDHide" }, outputs: { formSubmitted: "formSubmitted", BackButton: "BackButton" }, decls: 33, vars: 8, consts: [[1, "mb-4", "border", "rounded", "p-4", "shadow", 2, "max-width", "800px", "margin", "auto", 3, "formGroup"], [1, "text-start", "mb-3"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "row"], ["class", "col-md-4 mb-3", 4, "ngIf"], [1, "col-md-4", "mb-3"], ["for", "couponCode", 1, "form-label", "custom-label"], ["type", "text", "id", "couponCode", "formControlName", "couponCode", "placeholder", "Enter coupon code", 1, "form-control", "form-control-lg", "custom-input"], ["class", "text-danger", 4, "ngIf"], ["for", "discountAmount", 1, "form-label", "custom-label"], [1, "input-group"], ["id", "discountAmountLabel", 1, "input-group-text", "custom-input"], ["type", "number", "id", "discountAmount", "formControlName", "discountAmount", "placeholder", "Enter discount amount", 1, "form-control", "form-control-lg", "custom-input"], ["for", "minAmount", 1, "form-label", "custom-label"], ["id", "minAmountLabel", 1, "input-group-text", "custom-input"], ["type", "number", "id", "minAmount", "formControlName", "minAmount", "placeholder", "Enter minimum amount", 1, "form-control", "form-control-lg", "custom-input"], [1, "text-center"], [1, "btn", "btn-primary", "btn-sm", "btn-hover", 3, "click"], ["for", "couponId", 1, "form-label", "custom-label"], ["type", "text", "id", "couponId", "formControlName", "couponId", 1, "form-control", "form-control-lg", "custom-input", 3, "disabled"], [1, "text-danger"]], template: function CouponFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function CouponFormComponent_Template_button_click_2_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(3, "i", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275template(5, CouponFormComponent_div_5_Template, 4, 1, "div", 5);
    \u0275\u0275elementStart(6, "div", 6)(7, "label", 7);
    \u0275\u0275text(8, "Coupon Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 8);
    \u0275\u0275template(10, CouponFormComponent_div_10_Template, 2, 0, "div", 9)(11, CouponFormComponent_div_11_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 6)(13, "label", 10);
    \u0275\u0275text(14, "Discount Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11)(16, "span", 12);
    \u0275\u0275text(17, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 13);
    \u0275\u0275template(19, CouponFormComponent_div_19_Template, 2, 0, "div", 9)(20, CouponFormComponent_div_20_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 6)(22, "label", 14);
    \u0275\u0275text(23, "Minimum Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11)(25, "span", 15);
    \u0275\u0275text(26, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 16);
    \u0275\u0275template(28, CouponFormComponent_div_28_Template, 2, 0, "div", 9)(29, CouponFormComponent_div_29_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 17)(31, "button", 18);
    \u0275\u0275listener("click", function CouponFormComponent_Template_button_click_31_listener() {
      return ctx.submitForm();
    });
    \u0275\u0275text(32, "Submit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    \u0275\u0275property("formGroup", ctx.couponForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx.CouponIDHide);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.couponForm.get("couponCode")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.couponForm.get("couponCode")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.couponForm.get("couponCode")) == null ? null : tmp_3_0.hasError("maxlength")) && ((tmp_3_0 = ctx.couponForm.get("couponCode")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.couponForm.get("discountAmount")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.couponForm.get("discountAmount")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.couponForm.get("discountAmount")) == null ? null : tmp_5_0.hasError("min")) && ((tmp_5_0 = ctx.couponForm.get("discountAmount")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.couponForm.get("minAmount")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.couponForm.get("minAmount")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.couponForm.get("minAmount")) == null ? null : tmp_7_0.hasError("min")) && ((tmp_7_0 = ctx.couponForm.get("minAmount")) == null ? null : tmp_7_0.touched));
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, NgIf, FormGroupDirective, FormControlName], styles: ['\n\n.btn-hover[_ngcontent-%COMP%] {\n  transition: background-color 0.3s;\n}\n.btn-hover[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n}\n.custom-label[_ngcontent-%COMP%] {\n  font-family: "YourCustomFont", sans-serif;\n  color: #337ab7;\n  cursor: pointer;\n}\n.custom-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n.custom-input[_ngcontent-%COMP%]:hover {\n  border-color: #66afe9;\n  box-shadow: 0 0 5px rgba(102, 175, 233, 0.5);\n}\n/*# sourceMappingURL=coupon-form.component.css.map */'] });
var CouponFormComponent = _CouponFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CouponFormComponent, { className: "CouponFormComponent", filePath: "src\\app\\admin\\coupon\\coupon-form\\coupon-form.component.ts", lineNumber: 13 });
})();

// src/app/admin/coupon/coupon.component.ts
function CouponComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function CouponComponent_div_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.searchTerm, $event) || (ctx_r4.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CouponComponent_div_7_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onSearchTermChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 9);
    \u0275\u0275listener("click", function CouponComponent_div_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.search());
    });
    \u0275\u0275text(3, "Search");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchTerm);
  }
}
function CouponComponent_div_8_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 13);
    \u0275\u0275listener("click", function CouponComponent_div_8_tr_15_Template_tr_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r11);
      const coupon_r9 = restoredCtx.$implicit;
      const ctx_r10 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r10.onRowClick(coupon_r9));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 14)(13, "button", 15);
    \u0275\u0275listener("click", function CouponComponent_div_8_tr_15_Template_button_click_13_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r11);
      const coupon_r9 = restoredCtx.$implicit;
      const ctx_r12 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r12.editCoupon(coupon_r9));
    });
    \u0275\u0275text(14, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 16);
    \u0275\u0275listener("click", function CouponComponent_div_8_tr_15_Template_button_click_15_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r11);
      const coupon_r9 = restoredCtx.$implicit;
      const ctx_r13 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r13.deleteCoupon(coupon_r9));
    });
    \u0275\u0275text(16, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const coupon_r9 = ctx.$implicit;
    const ctx_r8 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r8.selectedCoupon === coupon_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(coupon_r9.couponId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(coupon_r9.couponCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(7, 6, coupon_r9.discountAmount, "INR", "symbol", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 11, coupon_r9.minAmount, "INR", "symbol", "1.2-2"));
  }
}
function CouponComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 11)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Coupon ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Coupon Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Discount Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Minimum Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, CouponComponent_div_8_tr_15_Template, 17, 16, "tr", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.displayedCoupons);
  }
}
function CouponComponent_app_pagination_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-pagination", 17);
    \u0275\u0275listener("pageChanged", function CouponComponent_app_pagination_9_Template_app_pagination_pageChanged_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r14 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r14.onPageChanged($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("currentPage", ctx_r2.currentPage)("totalPages", ctx_r2.totalPages)("pages", ctx_r2.pages);
  }
}
function CouponComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "app-coupon-form", 20);
    \u0275\u0275listener("formSubmitted", function CouponComponent_div_10_Template_app_coupon_form_formSubmitted_2_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r16 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r16.onFormSubmitted($event));
    })("BackButton", function CouponComponent_div_10_Template_app_coupon_form_BackButton_2_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r18 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r18.GotoList($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("initialFormValues", ctx_r3.couponFormInitialValues)("CouponIDHide", ctx_r3.CouponIDHide);
  }
}
var _CouponComponent = class _CouponComponent {
  constructor(couponService, paginationService, toastService, searchService) {
    this.couponService = couponService;
    this.paginationService = paginationService;
    this.toastService = toastService;
    this.searchService = searchService;
    this.coupons = [];
    this.displayedCoupons = [];
    this.pageSize = 5;
    this.currentPage = 1;
    this.totalPages = 0;
    this.pages = [];
    this.searchTerm = "";
    this.showCouponForm = false;
    this.CouponIDHide = false;
  }
  ngOnInit() {
    this.initializeCoupons();
  }
  initializeCoupons() {
    this.couponService.getCoupons().subscribe((coupons) => {
      this.coupons = coupons;
      this.Paginate();
    });
  }
  search() {
    return __async(this, null, function* () {
      this.searchService.updateSearchTerm(this.searchTerm);
      this.displayedCoupons = yield this.searchService.search(this.coupons);
      console.log("here");
    });
  }
  onSearchTermChange() {
    console.log("here,inserchterm");
    this.search();
  }
  Paginate() {
    this.displayedCoupons = this.paginationService.getPaginatedItems(this.coupons, this.currentPage, this.pageSize);
    this.calculateTotalPages();
    this.pages = this.paginationService.getPageNumbers(this.totalPages);
    this.setPage(1);
  }
  createCoupon() {
    console.log("Creating a new coupon");
    this.showCouponForm = !this.showCouponForm;
    this.couponFormInitialValues = {};
    this.CouponIDHide = true;
  }
  setPage(page) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    console.log("here");
    this.currentPage = page;
    this.displayedCoupons = this.paginationService.getPaginatedItems(this.coupons, this.currentPage, this.pageSize);
    this.pages = this.paginationService.getPageNumbers(this.totalPages);
  }
  calculateTotalPages() {
    this.totalPages = this.paginationService.calculateTotalPages(this.coupons.length, this.pageSize);
  }
  editCoupon(coupon) {
    this.showCouponForm = true;
    this.selectedCoupon = coupon;
    console.log(this.selectedCoupon, coupon);
    this.couponFormInitialValues = coupon;
    this.CouponIDHide = false;
  }
  deleteCoupon(coupon) {
    console.log("Deleting coupon:", coupon);
    const confirmationData = {
      title: "Confirmation",
      message: "Are you sure you want to proceed?"
    };
    this.toastService.showConfirmation(confirmationData).then((confirmation) => {
      console.log(confirmation);
      if (confirmation) {
        this.couponService.DeleteCoupon(coupon).subscribe((res) => {
          if (res.isSuccess) {
            const index = this.coupons.findIndex((c) => c.couponId === coupon.couponId);
            if (index !== -1) {
              this.coupons.splice(index, 1);
              this.Paginate();
              this.toastService.showToast("Coupon Deleted Successfully", "Coupon Deleted", "error");
            }
          }
        });
      } else {
        this.toastService.showToast("Action canceled", "", "info");
      }
    });
  }
  onRowClick(coupon) {
    this.selectedCoupon = coupon;
    console.log("coupon,", coupon);
  }
  onPageChanged(page) {
    console.log("here");
    this.setPage(page);
  }
  onFormSubmitted(newCoupon) {
    if (!newCoupon) {
      return;
    }
    const existingCouponIndex = this.coupons.findIndex((coupon) => coupon.couponId === newCoupon.couponId);
    if (existingCouponIndex === -1) {
      this.createOrUpdateCoupon(newCoupon, 0);
    } else {
      this.coupons[existingCouponIndex] = newCoupon;
      this.createOrUpdateCoupon(newCoupon, 1);
    }
    this.displayedCoupons = this.coupons;
    this.showCouponForm = false;
  }
  createOrUpdateCoupon(newCoupon, type) {
    if (type == 0) {
      newCoupon.couponId = 0;
      this.couponService.createCoupons(newCoupon).subscribe((res) => {
        if (res.isSuccess) {
          this.initializeCoupons();
          this.toastService.showToast("Coupon Created Successfully", "Coupon Created", "success");
        }
      });
    } else {
      this.couponService.updateCoupons(newCoupon).subscribe((res) => {
        if (res.isSuccess) {
          this.initializeCoupons();
          this.toastService.showToast("Coupon Updated successfully", "Coupon Updated", "info");
        }
      });
    }
  }
  GotoList(data) {
    this.showCouponForm = false;
  }
  showConfirmation() {
    const confirmationData = {
      title: "Confirmation",
      message: "Are you sure you want to proceed?"
    };
    this.toastService.showConfirmation(confirmationData).then((result) => {
      if (result) {
        console.log("Confirmed");
      } else {
        console.log("Canceled");
      }
    }).catch((err) => {
      console.error("Error:", err);
    });
  }
};
_CouponComponent.\u0275fac = function CouponComponent_Factory(t) {
  return new (t || _CouponComponent)(\u0275\u0275directiveInject(CouponService), \u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(SearchService));
};
_CouponComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CouponComponent, selectors: [["app-coupon"]], decls: 11, vars: 6, consts: [[1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "mb-3"], [1, "btn", "btn-primary", 3, "click"], ["class", "input-group", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [3, "currentPage", "totalPages", "pages", "pageChanged", 4, "ngIf"], ["class", "row justify-content-center mt-4", 4, "ngIf"], [1, "input-group"], ["type", "text", "placeholder", "Search Coupon", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "table-responsive"], [1, "table"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-info", "me-2", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [3, "currentPage", "totalPages", "pages", "pageChanged"], [1, "row", "justify-content-center", "mt-4"], [1, "col-md-8"], [3, "initialFormValues", "CouponIDHide", "formSubmitted", "BackButton"]], template: function CouponComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div")(5, "button", 2);
    \u0275\u0275listener("click", function CouponComponent_Template_button_click_5_listener() {
      return ctx.createCoupon();
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CouponComponent_div_7_Template, 4, 1, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CouponComponent_div_8_Template, 16, 1, "div", 4)(9, CouponComponent_app_pagination_9_Template, 1, 3, "app-pagination", 5)(10, CouponComponent_div_10_Template, 3, 2, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.showCouponForm ? "Create Coupon" : "Coupon List");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.showCouponForm ? "Back" : "Create Coupon", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showCouponForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showCouponForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showCouponForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showCouponForm);
  }
}, dependencies: [PaginationComponent, DefaultValueAccessor, NgControlStatus, NgModel, NgForOf, NgIf, CouponFormComponent, CurrencyPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.d-flex[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.btn-primary[_ngcontent-%COMP%], .btn-info[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 14px;\n}\n.input-group[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: center;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #343a40;\n  color: #fff;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  cursor: pointer;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n}\n.pagination[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=coupon.component.css.map */"] });
var CouponComponent = _CouponComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CouponComponent, { className: "CouponComponent", filePath: "src\\app\\admin\\coupon\\coupon.component.ts", lineNumber: 16 });
})();

// src/app/admin/dash-board/dash-board.component.ts
var _DashBoardComponent = class _DashBoardComponent {
  constructor(Tokenservice, router) {
    this.Tokenservice = Tokenservice;
    this.router = router;
    this.checkUserRoleAndNavigate();
  }
  checkUserRoleAndNavigate() {
    if (!this.Tokenservice.validateToken())
      this.router.navigate(["/home"]);
  }
};
_DashBoardComponent.\u0275fac = function DashBoardComponent_Factory(t) {
  return new (t || _DashBoardComponent)(\u0275\u0275directiveInject(TokenService), \u0275\u0275directiveInject(Router));
};
_DashBoardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashBoardComponent, selectors: [["app-dash-board"]], decls: 3, vars: 0, template: function DashBoardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header")(1, "router-outlet")(2, "app-footer");
  }
}, dependencies: [RouterOutlet, HeaderComponent, FooterComponent], styles: ["\n\n/*# sourceMappingURL=dash-board.component.css.map */"] });
var DashBoardComponent = _DashBoardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashBoardComponent, { className: "DashBoardComponent", filePath: "src\\app\\admin\\dash-board\\dash-board.component.ts", lineNumber: 10 });
})();

// src/app/admin/Service/admin-product.service.ts
var _ProductService = class _ProductService {
  constructor(http, endpointservice) {
    this.http = http;
    this.endpointservice = endpointservice;
  }
  getAllProduct() {
    var url = this.endpointservice.endpoints.GetAllProduct;
    return this.http.get(url);
  }
  createProduct(product) {
    var url = this.endpointservice.endpoints.CreateProduct;
    return this.http.post(url, product);
  }
  updateProduct(product) {
    var url = this.endpointservice.endpoints.UpdateProduct;
    return this.http.post(url, product);
  }
  DeleteProduct(data) {
    var url = this.endpointservice.endpoints.DeleteProduct;
    return this.http.post(url, data);
  }
};
_ProductService.\u0275fac = function ProductService_Factory(t) {
  return new (t || _ProductService)(\u0275\u0275inject(HttpService), \u0275\u0275inject(ApiEndpointService));
};
_ProductService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac });
var ProductService = _ProductService;

// src/app/share-module/FormConfig/Product-config.ts
var ProductFormConfig = {
  validationRules: {
    name: [Validators.required],
    price: [Validators.required, Validators.min(0)],
    categoryName: [Validators.required],
    imageUrl: [Validators.required]
  },
  formInstance: {
    productId: "",
    name: "",
    description: "",
    price: 0,
    categoryName: "",
    imageUrl: ""
  }
};

// src/app/admin/product/product-form/product-form.component.ts
function ProductFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label", 22);
    \u0275\u0275text(2, "Product ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 23);
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Product Name is required.");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Price is required.");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Price must be greater than or equal to 0.");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Category Name is required.");
    \u0275\u0275elementEnd();
  }
}
function ProductFormComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Image URL is required.");
    \u0275\u0275elementEnd();
  }
}
var _ProductFormComponent = class _ProductFormComponent {
  constructor(formService) {
    this.formService = formService;
    this.formSubmitted = new EventEmitter();
    this.BackButton = new EventEmitter();
    this.ProductIdHide = false;
  }
  submitForm() {
    if (this.productForm.valid) {
      console.log(this.productForm.getRawValue());
      this.formSubmitted.emit(this.productForm.getRawValue());
      this.initForm();
    }
  }
  goBack() {
    this.BackButton.emit(true);
  }
  ngOnInit() {
    this.initForm();
    this.disableProductId();
  }
  ngAfterViewInit() {
    if (this.initialFormValues != null) {
      this.productForm?.patchValue(this.initialFormValues);
    } else {
      this.initForm();
    }
  }
  disableProductId() {
    this.productForm.get("productId")?.disable();
  }
  initForm() {
    this.productForm = this.formService.createForm(ProductFormConfig.formInstance, ProductFormConfig.validationRules);
  }
};
_ProductFormComponent.\u0275fac = function ProductFormComponent_Factory(t) {
  return new (t || _ProductFormComponent)(\u0275\u0275directiveInject(FormService));
};
_ProductFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductFormComponent, selectors: [["app-product-form"]], inputs: { initialFormValues: "initialFormValues", ProductIdHide: "ProductIdHide" }, outputs: { formSubmitted: "formSubmitted", BackButton: "BackButton" }, decls: 37, vars: 7, consts: [[1, "mb-4", "border", "rounded", "p-4", "shadow", 2, "max-width", "800px", "margin", "auto", 3, "formGroup"], [1, "text-start", "mb-3"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "row"], ["class", "col-md-4 mb-3", 4, "ngIf"], [1, "col-md-4", "mb-3"], ["for", "name", 1, "form-label", "custom-label"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter product name", 1, "form-control", "form-control-lg", "custom-input"], ["class", "text-danger", 4, "ngIf"], ["for", "description", 1, "form-label", "custom-label"], ["type", "text", "id", "description", "formControlName", "description", "placeholder", "Enter description", 1, "form-control", "form-control-lg", "custom-input"], ["for", "price", 1, "form-label", "custom-label"], [1, "input-group"], ["id", "priceLabel", 1, "input-group-text", "custom-input"], ["type", "number", "id", "price", "formControlName", "price", "placeholder", "Enter price", 1, "form-control", "form-control-lg", "custom-input"], ["for", "categoryName", 1, "form-label", "custom-label"], ["type", "text", "id", "categoryName", "formControlName", "categoryName", "placeholder", "Enter category name", 1, "form-control", "form-control-lg", "custom-input"], ["for", "imageUrl", 1, "form-label", "custom-label"], ["type", "text", "id", "imageUrl", "formControlName", "imageUrl", "placeholder", "Enter image URL", 1, "form-control", "form-control-lg", "custom-input"], [1, "text-center"], [1, "btn", "btn-primary", "btn-sm", "btn-hover", 3, "click"], ["for", "productId", 1, "form-label", "custom-label"], ["type", "text", "id", "productId", "formControlName", "productId", "placeholder", "Enter product ID", 1, "form-control", "form-control-lg", "custom-input"], [1, "text-danger"]], template: function ProductFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function ProductFormComponent_Template_button_click_2_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(3, "i", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275template(5, ProductFormComponent_div_5_Template, 4, 0, "div", 5);
    \u0275\u0275elementStart(6, "div", 6)(7, "label", 7);
    \u0275\u0275text(8, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 8);
    \u0275\u0275template(10, ProductFormComponent_div_10_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "label", 10);
    \u0275\u0275text(13, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 6)(16, "label", 12);
    \u0275\u0275text(17, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 13)(19, "span", 14);
    \u0275\u0275text(20, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 15);
    \u0275\u0275template(22, ProductFormComponent_div_22_Template, 2, 0, "div", 9)(23, ProductFormComponent_div_23_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 6)(25, "label", 16);
    \u0275\u0275text(26, "Category Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 17);
    \u0275\u0275template(28, ProductFormComponent_div_28_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 6)(30, "label", 18);
    \u0275\u0275text(31, "Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 19);
    \u0275\u0275template(33, ProductFormComponent_div_33_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 20)(35, "button", 21);
    \u0275\u0275listener("click", function ProductFormComponent_Template_button_click_35_listener() {
      return ctx.submitForm();
    });
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    \u0275\u0275property("formGroup", ctx.productForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx.ProductIdHide);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.productForm.get("name")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.productForm.get("name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.productForm.get("price")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx.productForm.get("price")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.productForm.get("price")) == null ? null : tmp_4_0.hasError("min")) && ((tmp_4_0 = ctx.productForm.get("price")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.productForm.get("categoryName")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.productForm.get("categoryName")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.productForm.get("imageUrl")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.productForm.get("imageUrl")) == null ? null : tmp_6_0.touched));
  }
}, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, NgIf, FormGroupDirective, FormControlName], styles: ["\n\n/*# sourceMappingURL=product-form.component.css.map */"] });
var ProductFormComponent = _ProductFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductFormComponent, { className: "ProductFormComponent", filePath: "src\\app\\admin\\product\\product-form\\product-form.component.ts", lineNumber: 12 });
})();

// src/app/admin/product/product-list/product-list.component.ts
function ProductListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ProductListComponent_div_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.searchTerm, $event) || (ctx_r4.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ProductListComponent_div_7_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onSearchTermChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 9);
    \u0275\u0275listener("click", function ProductListComponent_div_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.search());
    });
    \u0275\u0275text(3, "Search");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchTerm);
  }
}
function ProductListComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 13);
    \u0275\u0275text(2, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_div_8_ng_template_2_ng_container_18_tr_1_img_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const product_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r15.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
function ProductListComponent_div_8_ng_template_2_ng_container_18_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 17);
    \u0275\u0275listener("click", function ProductListComponent_div_8_ng_template_2_ng_container_18_tr_1_Template_tr_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r19);
      const product_r15 = restoredCtx.$implicit;
      const ctx_r18 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r18.onRowClick(product_r15));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, ProductListComponent_div_8_ng_template_2_ng_container_18_tr_1_img_13_Template, 1, 1, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 19)(16, "button", 20);
    \u0275\u0275listener("click", function ProductListComponent_div_8_ng_template_2_ng_container_18_tr_1_Template_button_click_16_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r19);
      const product_r15 = restoredCtx.$implicit;
      const ctx_r20 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r20.editProduct(product_r15));
    });
    \u0275\u0275text(17, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 21);
    \u0275\u0275listener("click", function ProductListComponent_div_8_ng_template_2_ng_container_18_tr_1_Template_button_click_18_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r19);
      const product_r15 = restoredCtx.$implicit;
      const ctx_r21 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r21.deleteProduct(product_r15));
    });
    \u0275\u0275text(19, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r15 = ctx.$implicit;
    const ctx_r14 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r14.selectedProduct === product_r15);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r15.productId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r15.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 8, product_r15.price, "INR", "symbol", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r15.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r15.imageUrl);
  }
}
function ProductListComponent_div_8_ng_template_2_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductListComponent_div_8_ng_template_2_ng_container_18_tr_1_Template, 20, 13, "tr", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r11.displayedProducts);
  }
}
function ProductListComponent_div_8_ng_template_2_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No products found.");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_div_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 14)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Product ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Category Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, ProductListComponent_div_8_ng_template_2_ng_container_18_Template, 2, 1, "ng-container", 11)(19, ProductListComponent_div_8_ng_template_2_ng_template_19_Template, 3, 0, "ng-template", null, 15, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const _r13 = \u0275\u0275reference(20);
    const ctx_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r9.displayedProducts && ctx_r9.displayedProducts.length > 0)("ngIfElse", _r13);
  }
}
function ProductListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, ProductListComponent_div_8_div_1_Template, 3, 0, "div", 11)(2, ProductListComponent_div_8_ng_template_2_Template, 21, 2, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const _r10 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading)("ngIfElse", _r10);
  }
}
function ProductListComponent_app_pagination_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-pagination", 24);
    \u0275\u0275listener("pageChanged", function ProductListComponent_app_pagination_9_Template_app_pagination_pageChanged_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r22 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r22.onPageChanged($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("currentPage", ctx_r2.currentPage)("totalPages", ctx_r2.totalPages)("pages", ctx_r2.pages);
  }
}
function ProductListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "app-product-form", 27);
    \u0275\u0275listener("formSubmitted", function ProductListComponent_div_10_Template_app_product_form_formSubmitted_2_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r24 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r24.onFormSubmitted($event));
    })("BackButton", function ProductListComponent_div_10_Template_app_product_form_BackButton_2_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r26 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r26.GotoList($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("initialFormValues", ctx_r3.productFormInitialValues)("ProductIdHide", ctx_r3.ProductIdHide);
  }
}
var _ProductListComponent = class _ProductListComponent {
  constructor(paginationService, productService, toastService, searchService) {
    this.paginationService = paginationService;
    this.productService = productService;
    this.toastService = toastService;
    this.searchService = searchService;
    this.isLoading = false;
    this.pageSize = 5;
    this.currentPage = 1;
    this.totalPages = 0;
    this.pages = [];
    this.Product = [];
    this.displayedProducts = [];
    this.showProductForm = false;
    this.ProductIdHide = false;
    this.searchTerm = "";
  }
  ngOnInit() {
    this.initializeProducts();
  }
  createProduct() {
    console.log("Creating a new coupon");
    this.showProductForm = !this.showProductForm;
    this.productFormInitialValues = {};
    this.ProductIdHide = true;
  }
  search() {
    return __async(this, null, function* () {
      this.searchService.updateSearchTerm(this.searchTerm);
      this.displayedProducts = yield this.searchService.search(this.Product);
      console.log("here");
    });
  }
  onSearchTermChange() {
    console.log("here,inserchterm");
    this.search();
  }
  onRowClick(Product) {
  }
  deleteProduct(product) {
    console.log("Deleting coupon:", product);
    const confirmationData = {
      title: "Confirmation",
      message: "Are you sure you want to proceed?"
    };
    this.toastService.showConfirmation(confirmationData).then((confirmation) => {
      console.log(confirmation);
      if (confirmation) {
        this.productService.DeleteProduct(product).subscribe((res) => {
          if (res.isSuccess) {
            const index = this.Product.findIndex((c) => c.productId === product.productId);
            if (index !== -1) {
              this.Product.splice(index, 1);
              this.Paginate();
              this.toastService.showToast("Coupon Deleted Successfully", "Coupon Deleted", "error");
            }
          }
        });
      } else {
        this.toastService.showToast("Action canceled", "", "info");
      }
    });
  }
  onPageChanged(page) {
    this.setPage(page);
  }
  initializeProducts() {
    this.isLoading = true;
    this.productService.getAllProduct().subscribe((product) => {
      this.isLoading = false;
      console.log(product, "hey");
      this.Product = product;
      this.displayedProducts = product;
      this.Paginate();
    });
  }
  Paginate() {
    this.displayedProducts = this.paginationService.getPaginatedItems(this.Product, this.currentPage, this.pageSize);
    this.calculateTotalPages();
    this.pages = this.paginationService.getPageNumbers(this.totalPages);
    this.setPage(1);
  }
  setPage(page) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    console.log("here");
    this.currentPage = page;
    this.displayedProducts = this.paginationService.getPaginatedItems(this.Product, this.currentPage, this.pageSize);
    this.pages = this.paginationService.getPageNumbers(this.totalPages);
  }
  calculateTotalPages() {
    this.totalPages = this.paginationService.calculateTotalPages(this.Product.length, this.pageSize);
  }
  GotoList(data) {
    this.showProductForm = false;
  }
  editProduct(product) {
    this.showProductForm = true;
    this.selectedProduct = product;
    this.productFormInitialValues = product;
    this.ProductIdHide = false;
  }
  onFormSubmitted(newproduct) {
    if (!newproduct) {
      return;
    }
    const existingProductIndex = this.Product.findIndex((product) => product.productId === newproduct.productId);
    if (existingProductIndex === -1) {
      this.createOrUpdateCoupon(newproduct, 0);
    } else {
      this.Product[existingProductIndex] = newproduct;
      this.createOrUpdateCoupon(newproduct, 1);
    }
    this.displayedProducts = this.Product;
    this.showProductForm = false;
  }
  createOrUpdateCoupon(product, type) {
    if (type == 0) {
      product.productId = 0;
      this.productService.createProduct(product).subscribe((res) => {
        if (res.isSuccess) {
          this.initializeProducts();
          this.toastService.showToast("Product Created Successfully", "Product Created", "success");
        }
      });
    } else {
      this.productService.updateProduct(product).subscribe((res) => {
        if (res.isSuccess) {
          this.initializeProducts();
          this.toastService.showToast("Product Updated successfully", "Product Updated", "info");
        }
      });
    }
  }
  showConfirmation() {
    const confirmationData = {
      title: "Confirmation",
      message: "Are you sure you want to proceed?"
    };
    this.toastService.showConfirmation(confirmationData).then((result) => {
      if (result) {
        console.log("Confirmed");
      } else {
        console.log("Canceled");
      }
    }).catch((err) => {
      console.error("Error:", err);
    });
  }
};
_ProductListComponent.\u0275fac = function ProductListComponent_Factory(t) {
  return new (t || _ProductListComponent)(\u0275\u0275directiveInject(PaginationService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(SearchService));
};
_ProductListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], decls: 11, vars: 6, consts: [[1, "container", "mt-4"], [1, "d-flex", "justify-content-between", "mb-3"], [1, "btn", "btn-primary", 3, "click"], ["class", "input-group", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [3, "currentPage", "totalPages", "pages", "pageChanged", 4, "ngIf"], ["class", "row justify-content-center mt-4", 4, "ngIf"], [1, "input-group"], ["type", "text", "placeholder", "Search Product", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "table-responsive"], [4, "ngIf", "ngIfElse"], ["productTable", ""], [1, "loader"], [1, "table"], ["noData", ""], [3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["alt", "Product Image", "style", "max-width: 100px; max-height: 100px;", 3, "src", 4, "ngIf"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-info", "me-2", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], ["alt", "Product Image", 2, "max-width", "100px", "max-height", "100px", 3, "src"], ["colspan", "7", 1, "text-center"], [3, "currentPage", "totalPages", "pages", "pageChanged"], [1, "row", "justify-content-center", "mt-4"], [1, "col-md-8"], [3, "initialFormValues", "ProductIdHide", "formSubmitted", "BackButton"]], template: function ProductListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div")(5, "button", 2);
    \u0275\u0275listener("click", function ProductListComponent_Template_button_click_5_listener() {
      return ctx.createProduct();
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ProductListComponent_div_7_Template, 4, 1, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProductListComponent_div_8_Template, 4, 2, "div", 4)(9, ProductListComponent_app_pagination_9_Template, 1, 3, "app-pagination", 5)(10, ProductListComponent_div_10_Template, 3, 2, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.showProductForm ? "Create Product" : "Product List");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.showProductForm ? "Back" : "Create Product", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showProductForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showProductForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showProductForm && ctx.displayedProducts && ctx.displayedProducts.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showProductForm);
  }
}, dependencies: [PaginationComponent, DefaultValueAccessor, NgControlStatus, NgModel, NgForOf, NgIf, ProductFormComponent, CurrencyPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.d-flex[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.btn-primary[_ngcontent-%COMP%], .btn-info[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 14px;\n}\n.input-group[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: center;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #343a40;\n  color: #fff;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  cursor: pointer;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n}\n.pagination[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=product-list.component.css.map */"] });
var ProductListComponent = _ProductListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent", filePath: "src\\app\\admin\\product\\product-list\\product-list.component.ts", lineNumber: 15 });
})();

// src/app/admin/product/product.component.ts
var _ProductComponent = class _ProductComponent {
};
_ProductComponent.\u0275fac = function ProductComponent_Factory(t) {
  return new (t || _ProductComponent)();
};
_ProductComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductComponent, selectors: [["app-product"]], decls: 1, vars: 0, template: function ProductComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-list");
  }
}, dependencies: [ProductListComponent], styles: ["\n\n/*# sourceMappingURL=product.component.css.map */"] });
var ProductComponent = _ProductComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductComponent, { className: "ProductComponent", filePath: "src\\app\\admin\\product\\product.component.ts", lineNumber: 8 });
})();

// src/app/admin/admin-routing.module.ts
var routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashBoardComponent,
    children: [
      { path: "coupon", component: CouponComponent },
      { path: "product", component: ProductComponent }
      // Add additional child routes if needed
    ]
  }
];
var _AdminRoutingModule = class _AdminRoutingModule {
};
_AdminRoutingModule.\u0275fac = function AdminRoutingModule_Factory(t) {
  return new (t || _AdminRoutingModule)();
};
_AdminRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminRoutingModule });
_AdminRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var AdminRoutingModule = _AdminRoutingModule;

// src/app/admin/admin.module.ts
var _AdminModule = class _AdminModule {
};
_AdminModule.\u0275fac = function AdminModule_Factory(t) {
  return new (t || _AdminModule)();
};
_AdminModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminModule });
_AdminModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [CouponService, ProductService], imports: [AdminRoutingModule, SharedModule] });
var AdminModule = _AdminModule;
export {
  AdminModule
};
//# sourceMappingURL=chunk-QQC2P7ZK.js.map

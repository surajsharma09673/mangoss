// shared.module.ts
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Component/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './Component/footer/footer.component';
import { PaginationComponent } from './Component/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { PaginationService } from './Service/pagination.service';
import { ToastService } from './Service/Toast.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialogComponent } from './Component/confirmation-modal/confirmation-modal.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormService } from './Service/Form.service';
import { HttpService } from './Service/http.service';
import { LoaderService } from './Service/loader.service';
import { AuthenticationService } from './Service/authentication.service';
import { TokenService } from './Service/token.service';
import {
  ApiEndpointService,
  ENDPOINT_INSTANCES,
} from './Service/ApiEndpoint.service';
import { PopupService } from './Service/Popup.service';
import { JWT_OPTIONS, JwtInterceptor, JwtModule } from '@auth0/angular-jwt';
import { UserService } from './Service/UserService.seervice';
import { SearchService } from './Service/search.service';
import { HomeProductService } from './Service/home-product.service';
import { TruncatePipe } from './Pipes/truncate.pipe';
import { RegisterService } from './Service/register.service';
import { LoginService } from './Service/login.service';
import { AuthenticationEndpoint } from './UrlEndpoints/Authentication-endpoints';
import { CartEndpoint } from './UrlEndpoints/Cart-endpoint';
import { CouponEndpoint } from './UrlEndpoints/Coupon-endpoints';
import { OrderEndpoint } from './UrlEndpoints/Order-endpoint';
import { ProductEndpoint } from './UrlEndpoints/Product-endpoints';
import { LoaderComponent } from './Component/loader/loader.component';


const Authenticationendpoint = {
  provide: ENDPOINT_INSTANCES,
  multi: true,
  useValue: AuthenticationEndpoint,
};
const OrderEndpointendpoint = {
  provide: ENDPOINT_INSTANCES,
  multi: true,
  useValue: OrderEndpoint,
};

const CouponEndpointendpoint = {
  provide: ENDPOINT_INSTANCES,
  multi: true,
  useValue: CouponEndpoint,
};
const ProductEndpointendpoint = {
  provide: ENDPOINT_INSTANCES,
  multi: true,
  useValue: ProductEndpoint,
};
const CartEndpointendpoint = {
  provide: ENDPOINT_INSTANCES,
  multi: true,
  useValue: CartEndpoint,
};
export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('your_token_key'); // Change this based on where your token is stored
    },
    allowedDomains: [''], // Replace with your domain
    disallowedRoutes: ['/homepage'], // Replace with your unauthorized routes
  };
}
// Import and export the modules/components you want to share
const SHARED_MODULES = [
  FormsModule,
  HttpClientModule,
  CommonModule,
  NgbModule,
  ReactiveFormsModule,
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,

  // Add more modules as needed
];

const SHARED_DECLARATIONS = [
  HeaderComponent,
  FooterComponent,
  PaginationComponent,
  ConfirmationDialogComponent,
  TruncatePipe,
  LoaderComponent
  // Add more declarations as needed
];
@NgModule({
  imports: [
    ...SHARED_MODULES,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },
    }),
  ],
  exports: [...SHARED_DECLARATIONS, ...SHARED_MODULES],
  declarations: [...SHARED_DECLARATIONS],
  providers: [
    PaginationService,
    ToastService,
    FormService,
    HttpService,
    LoaderService,
    AuthenticationService,
    TokenService,
    ApiEndpointService,
    PopupService,
    UserService,
    SearchService,
    HomeProductService,
    RegisterService,
    LoginService,
    Authenticationendpoint,
    OrderEndpointendpoint,
    CouponEndpointendpoint,
    ProductEndpointendpoint,
    CartEndpointendpoint,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    
  ],
})
export class SharedModule {}

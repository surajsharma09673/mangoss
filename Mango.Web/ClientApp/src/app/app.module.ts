import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./share-module/share.module";
import { AdminModule } from "./admin/admin.module";
import { ToastrModule } from "ngx-toastr";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [  
  
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

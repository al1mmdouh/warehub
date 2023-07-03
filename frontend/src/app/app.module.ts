import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessProductsModule } from './business-products/business-products.module';


@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BusinessProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

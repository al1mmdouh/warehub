import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessProductsModule } from './business-products/business-products.module';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentModalComponent } from './orders/payment-modal/payment-modal.component';

@NgModule({
  declarations: [AppComponent, OrderListComponent, PaymentModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BusinessProductsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlus, faMinus, faTrash);
  }
}

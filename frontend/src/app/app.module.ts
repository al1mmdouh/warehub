import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import {
  faHome,
  faMinus,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
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
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';

import { ProfileComponent } from './profile/profile.component';
import { CaruselComponent } from './home-page/carusel/carusel.component';
import { WhyWarehubComponent } from './home-page/why-warehub/why-warehub.component';
import { AboutUsComponent } from './home-page/about-us/about-us.component';
import { OurServicesComponent } from './home-page/our-services/our-services.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WarehouseModule } from './warehouse/warehouse.module';
import { BusinessFormComponent } from './business-form/business-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HomePageComponent,
    RegistrationComponent,
    ProfileComponent,
    CaruselComponent,
    WhyWarehubComponent,
    AboutUsComponent,
    OurServicesComponent,
    FooterComponent,
    ContactUsComponent,
    BusinessFormComponent,
   OrderListComponent, 
  PaymentModalComponent
],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    WarehouseModule,
    
    
    SharedModule,
    BusinessProductsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlus, faMinus, faTrash, faHome);
  }
}

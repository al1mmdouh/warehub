import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CaruselComponent } from './home-page/carusel/carusel.component';
import { WhyWarehubComponent } from './home-page/why-warehub/why-warehub.component';
import { AboutUsComponent } from './home-page/about-us/about-us.component';
import { OurServicesComponent } from './home-page/our-services/our-services.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CounterComponent } from './home-page/counter/counter.component';
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
    CounterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

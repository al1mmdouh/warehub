import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import {LoginComponent}from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"login-Page",
    component:LoginComponent
  },
  {
    path:"registeration",
    component:RegistrationComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"about-us",
    component:AboutUsComponent
  },
  {
    path:"contact-us",
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import {LoginComponent}from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

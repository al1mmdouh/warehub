import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HomePageComponent} from './home-page/home-page.component';
import {LoginComponent}from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { AuthGuard } from './shared/auth.guard';

import { BusinessFormComponent } from './business-form/business-form.component';
const routes: Routes = [
    {
        path:"",
        component:HomePageComponent
      },
      {
        path:"login-Page",
        component:LoginComponent,
        canActivate: [AuthGuard], data: { accessLevel: 'guest' }
      },
      {
        path:"registeration",
        component:RegistrationComponent
      },
      {
        path:"profile",
        component:ProfileComponent
        ,canActivate: [AuthGuard], data: { accessLevel: 'warehouse'||'product' }
      },

  {
    path:"business",
    component:BusinessFormComponent,
    canActivate: [AuthGuard], data: { accessLevel: 'no business' }
  },
       {
        path:"about-us",
        component:AboutUsComponent,
        canActivate: [AuthGuard], data: { accessLevel: 'guest' }
    
      },
      {
        path:"contact-us",
        component:ContactUsComponent
      },
      {
      path: 'warehouse',
      loadChildren: () => import('./warehouse/warehouse.module')
      .then(module => module.WarehouseModule),
      canActivate: [AuthGuard], data: { accessLevel: 'warehouse' }
    },
    {path: 'loading', component:LoadingSpinnerComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
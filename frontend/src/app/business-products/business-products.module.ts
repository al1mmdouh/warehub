import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { HeaderComponent } from './header/header.component';
import { TicketModalComponent } from '../shared/ticket-modal/ticket-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListingComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
   
  ]
})
export class BusinessProductsModule { }

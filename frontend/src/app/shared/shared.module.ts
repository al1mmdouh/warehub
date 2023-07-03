import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TicketModalComponent } from './ticket-modal/ticket-modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TicketModalComponent
  ],
  imports: [
    CommonModule
  ]
  ,exports: [
    NavbarComponent,
    TicketModalComponent
  ]
})
export class SharedModule { }

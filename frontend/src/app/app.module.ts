import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseModule } from './warehouse/warehouse.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //WarehouseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

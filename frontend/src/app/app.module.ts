import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseHomeComponent } from './warehouse/warehouse-home/warehouse-home.component';
import { CircleProgressComponent } from './warehouse/warehouse-home/circle-progress/circle-progress.component';
import { WarehouseRegisterComponent } from './warehouse/warehouse-register/warehouse-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { WarehouseModule } from './warehouse/warehouse.module';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseHomeComponent,
    CircleProgressComponent,
    WarehouseRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // WarehouseModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 40,
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 5,
      "showBackground": false,
      "startFromZero": false,
      "animation": false,
      "animateTitle": false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseHomeComponent } from './warehouse-home/warehouse-home.component';
import { CircleProgressComponent } from './warehouse-home/circle-progress/circle-progress.component';
import { WarehouseRegisterComponent } from './warehouse-register/warehouse-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress/lib/ng-circle-progress.module';



@NgModule({
  declarations: [
    // WarehouseHomeComponent,
    // CircleProgressComponent,
    // WarehouseRegisterComponent
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    // NgCircleProgressModule.forRoot({
    //   "radius": 40,
    //   "outerStrokeWidth": 10,
    //   "innerStrokeWidth": 5,
    //   "showBackground": false,
    //   "startFromZero": false,
    //   "animation": false,
    //   "animateTitle": false,
    // })
  ]
})
export class WarehouseModule { }
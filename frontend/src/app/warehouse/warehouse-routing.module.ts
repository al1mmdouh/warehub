import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleProgressComponent } from 'ng-circle-progress';
import { WarehouseHomeComponent } from './warehouse-home/warehouse-home.component';
import { WarehouseRegisterComponent } from './warehouse-register/warehouse-register.component';

const routes: Routes = [

  {path: 'warehouse', component: WarehouseHomeComponent},
  {path: 'circle', component: CircleProgressComponent},
  {path: 'register', component: WarehouseRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleProgressComponent } from './warehouse/warehouse-home/circle-progress/circle-progress.component';
import { WarehouseHomeComponent } from './warehouse/warehouse-home/warehouse-home.component';
import { WarehouseRegisterComponent } from './warehouse/warehouse-register/warehouse-register.component';

const routes: Routes = [
  {path: 'warehouse', component: WarehouseHomeComponent},
  {path: 'circle', component: CircleProgressComponent},
  {path: 'register', component: WarehouseRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

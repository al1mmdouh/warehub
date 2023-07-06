import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

const routes: Routes = [
  {
    path: 'warehouse',
    loadChildren: () => import('./warehouse/warehouse.module')
    .then(module => module.WarehouseModule)
  },
  {path: 'loading', component:LoadingSpinnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

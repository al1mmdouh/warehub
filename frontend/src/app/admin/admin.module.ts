import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule, Routes } from '@angular/router';
import { BusinessProductsModule } from '../business-products/business-products.module';

import { ProductListComponent } from './product-list/product-list.component';
import { AddModalComponent } from './product-list/add-modal/add-modal.component';
import { EditModalComponent } from './product-list/edit-modal/edit-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminOrderListComponent } from './admin-order-list/admin-order-list.component';
import { StatusBadgePipe } from '../pipes/status-badge.pipe';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'admin/products', component: ProductListComponent },
  { path: 'admin/orders', component: AdminOrderListComponent },
  { path: 'admin/orders/:id', component: OrderDetailsComponent },
  { path: 'admin/home', component: ProductListComponent },
];
@NgModule({
  declarations: [
    DashboardSidebarComponent,
    ProductListComponent,
    AddModalComponent,
    EditModalComponent,
    StatusBadgePipe,
    AdminOrderListComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BusinessProductsModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgxPaginationModule,

    RouterModule.forChild(routes),
  ],
  exports: [DashboardSidebarComponent, RouterModule, StatusBadgePipe],
})
export class AdminModule {}

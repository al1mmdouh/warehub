import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { HeaderComponent } from './listing/header/header.component';

import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './business-products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StockStatusPipe } from '../pipes/stock-status.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ListingComponent,
    HeaderComponent,
    AddProductComponent,
    StockStatusPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  exports: [StockStatusPipe, AddProductComponent],
})
export class BusinessProductsModule {}

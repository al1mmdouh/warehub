import { NgModule } from "@angular/core";
import {Routes, RouterModule } from '@angular/router'; 
import { ListingComponent } from "./listing/listing.component";
import { OrderListComponent } from "../orders/order-list/order-list.component";
import { AddProductComponent } from "./add-product/add-product.component";



const routes: Routes = [
    {path: "product/listing" , component: ListingComponent},
    {path: "orders" , component: OrderListComponent},
    {path: "product/create" , component: AddProductComponent}
]

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [ RouterModule]

})
export class ProductRoutingModule {}
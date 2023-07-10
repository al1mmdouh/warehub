import { Component } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-admin-warehouse',
  templateUrl: './admin-warehouse.component.html',
  styleUrls: ['./admin-warehouse.component.scss'],
})
export class AdminWarehouseComponent {
  data!: any;
  warehouses: any[] = [];
  currentPage = 1; // start with the first page
  itemsPerPage = 4; // show 5 items per page

  constructor(public warehouseervice: WarehouseService) {}

  ngOnInit() {
    this.warehouseervice.getWarehouses().subscribe((res): any => {
      this.data = res;

      console.log(this.warehouses);

      this.warehouses = this.data.data;

      console.log(this.warehouses);
    });
  }

  // deleteOrder(orderId: number) {
  //   this.warehouseervice.deleteOrder(orderId);
  // }
}

import { Component, Input } from '@angular/core';
import { Warehouse } from 'src/app/interfaces/warehouse';

@Component({
  selector: 'app-warehouse-home',
  templateUrl: './warehouse-home.component.html',
  styleUrls: ['./warehouse-home.component.scss']
})
export class WarehouseHomeComponent {
  selectedWarehouseId =0;
  warehouses: Array<Warehouse> = 
  [
    {
      warehouseName: "warehouso",
      ownerName: "Owner",
      ownerEmail: "owner@email.com",
      address: "tttttt",
      availableCapacity: 100,
      capacity: 1000,
      lastMileName: "aramex",
      lastMileTax: 10,
      earning: 999,
      serviceFee: 99
    },
    {
      warehouseName: "warehouso2",
      ownerName: "adminown",
      ownerEmail: "admin@email.com",
      address: "new one",
      availableCapacity: 100,
      capacity: 500,
      lastMileName: "aramex",
      lastMileTax: 10,
      earning: 89,
      serviceFee: 10
    }
  ]
  capacityPerecent(availableCapacity: number, capacity: number): number{

    return (availableCapacity/capacity)*100
  }
  
  selectWarehouse(id: number){
    this.selectedWarehouseId = id;
  }
}

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Warehouse } from 'src/app/interfaces/warehouse';

@Component({
  selector: 'app-warehouse-home',
  templateUrl: './warehouse-home.component.html',
  styleUrls: ['./warehouse-home.component.scss']
})
export class WarehouseHomeComponent {
  selectedWarehouseId =0;

  selectedRadio: string = "update";

  ticketForm!: FormGroup;
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
  constructor(private fb: FormBuilder){}
  ngOnInit(){
    this.ticketForm = this.fb.group({
      warehouseAddress : this.warehouses[this.selectedWarehouseId].address,
      capacity : this.warehouses[this.selectedWarehouseId].capacity,
      availableCapacity : this.warehouses[this.selectedWarehouseId].availableCapacity,
      name : this.warehouses[this.selectedWarehouseId].warehouseName,
      earning : this.warehouses[this.selectedWarehouseId].earning,
      serviceFeePerVolume : this.warehouses[this.selectedWarehouseId].serviceFee,



    })
  }
  createTicket(){
    this.ticketForm = this.fb.group({
      name : this.warehouses[this.selectedWarehouseId].warehouseName,
      warehouseAddress : this.warehouses[this.selectedWarehouseId].address,
      capacity : this.warehouses[this.selectedWarehouseId].capacity,
      availableCapacity : this.warehouses[this.selectedWarehouseId].availableCapacity,
      earning : this.warehouses[this.selectedWarehouseId].earning,
      serviceFeePerVolume : this.warehouses[this.selectedWarehouseId].serviceFee,



    })
  }
  capacityPerecent(availableCapacity: number, capacity: number): number{

    return (availableCapacity/capacity)*100
  }
  
  selectWarehouse(id: number){
    this.selectedWarehouseId = id;
  }
}

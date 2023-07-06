import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Warehouse } from 'src/app/interfaces/warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-warehouse-home',
  templateUrl: './warehouse-home.component.html',
  styleUrls: ['./warehouse-home.component.scss']
})
export class WarehouseHomeComponent {
  isLoading = true;

  apiError !: string;

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
    },
    {
      warehouseName: "big warehouse",
      ownerName: "admssinown",
      ownerEmail: "n@email.com",
      address: "new york",
      availableCapacity: 100,
      capacity: 589,
      
      earning: 89,
      serviceFee: 10
    }
  ]
  constructor(private fb: FormBuilder, private warehouseService: WarehouseService){}
  ngOnInit(){
    this.ticketForm = this.fb.group({
      warehouseAddress : this.warehouses[this.selectedWarehouseId].address,
      capacity : this.warehouses[this.selectedWarehouseId].capacity,
      availableCapacity : this.warehouses[this.selectedWarehouseId].availableCapacity,
      name : this.warehouses[this.selectedWarehouseId].warehouseName,
      earning : this.warehouses[this.selectedWarehouseId].earning,
      serviceFeePerVolume : this.warehouses[this.selectedWarehouseId].serviceFee,
      shipments: this.warehouses[this.selectedWarehouseId].lastMileName

      
    })
    this.warehouseService.getWarehouses().subscribe(
      (data)=>{
        this.warehouses = data;
        this.isLoading = false;
        //console.log(this.warehouses);
      },
      (error)=>{
        //console.log(error.statusText);
        this.apiError = error.statusText;
        this.isLoading = false;

      }
    )
  }
  createTicket(){
    this.ticketForm = this.fb.group({
      name : [this.warehouses[this.selectedWarehouseId].warehouseName,
      [Validators.minLength(3), Validators.maxLength(30), Validators.required]],
      warehouseAddress : [this.warehouses[this.selectedWarehouseId].address,
      [Validators.minLength(5),Validators.maxLength(200), Validators.required ]],
      capacity : [this.warehouses[this.selectedWarehouseId].capacity,
      [ Validators.min(10),  Validators.pattern("^[0-9]*$") , Validators.max(50000), Validators.required ]],
      availableCapacity : [this.warehouses[this.selectedWarehouseId].availableCapacity,
      [ Validators.min(10), Validators.pattern("^[0-9]*$"), Validators.max(50000), Validators.required ]],
      earning : this.warehouses[this.selectedWarehouseId].earning,
      serviceFeePerVolume : [this.warehouses[this.selectedWarehouseId].serviceFee,
      [Validators.min(1), Validators.pattern("^[0-9]*$"), Validators.max(50000), Validators.required ]],
      shipments: this.warehouses[this.selectedWarehouseId].lastMileName
    })
  }
  capacityPerecent(availableCapacity: number, capacity: number): number{
    return (availableCapacity/capacity)*100
  }
  
  selectWarehouse(id: number){
    this.selectedWarehouseId = id;
  }
}

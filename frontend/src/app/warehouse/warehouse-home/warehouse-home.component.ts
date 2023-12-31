import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Warehouse } from 'src/app/interfaces/warehouse';
import { AuthService } from 'src/app/services/auth.service';
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
      warehouseName: "warehouseName",
      ownerName: "ownerName",
      ownerEmail: "ownerEmail",
      address: "address",
      availableCapacity: 0,
      capacity: 0,
      lastMileName: "lastMileName",
      lastMileTax: 0,
      earning: 0,
      serviceFee: 0
    }
  ]
  constructor(private fb: FormBuilder, private warehouseService: WarehouseService, private auth: AuthService){}
  ngOnInit(){
    this.ticketForm = this.fb.group({
      warehouseAddress : this.warehouses[this.selectedWarehouseId].address,
      capacity : this.warehouses[this.selectedWarehouseId].capacity,
      availableCapacity : this.warehouses[this.selectedWarehouseId].availableCapacity,
      name : this.warehouses[this.selectedWarehouseId].warehouseName,
      earning : this.warehouses[this.selectedWarehouseId].earning,
      serviceFeePerVolume : this.warehouses[this.selectedWarehouseId].serviceFee,
      shipments: this.warehouses[this.selectedWarehouseId].lastMileName,

      
    })
    // this.warehouseService.getWarehouses().subscribe(
    // {
    //     next:  (data)=>{
    //     this.warehouses = data;
    //     this.isLoading = false;
    //   },
    //     error: (error)=>{
    //     this.apiError = error.statusText;
    //     this.isLoading = false;

    //   }}
    // )
    let userId = this.auth.userBuisnessData.user_id
    console.log(userId);
    this.warehouseService.getWarehouseByUser(userId).subscribe(
      {
          next:  (data)=>{
          this.warehouses = data;
          this.isLoading = false;
          console.log(data);
        },
          error: (error)=>{
          this.apiError = error.statusText;
          this.isLoading = false;
          console.log(error);
  
        }}
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
      shipments: this.warehouses[this.selectedWarehouseId].lastMileName,
      
    })
  }
  capacityPerecent(availableCapacity: number, capacity: number): number{
    return (availableCapacity/capacity)*100
  }
  
  selectWarehouse(id: number){
    this.selectedWarehouseId = id;
  }
}

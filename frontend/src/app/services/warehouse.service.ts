import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Warehouse } from '../interfaces/warehouse';


@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) { }

  getWarehouses(): Observable<any[]>{
    return  this.http.get<any[]>("http://127.0.0.1:8000/api/warehouse")
    //parsing data
    //owner name and email static must be changed
    .pipe(
      map(
        (data)=> data.map(
          raw =>{
            let warehouse: Warehouse =
            {
              address: raw.address,
              availableCapacity: raw.available_capacity,
              earning: raw.earnings,
              ownerName: "dummy",
              ownerEmail: "dummy",
              serviceFee: raw.service_fee,
              warhouseType: raw.warehouse_type,
              warehouseName: raw.name,
              capacity: raw.capacity
            }
            return warehouse;
          }
        )
      )
    )
  }

  createWarehouse(data:any){
    //parsing input
    //buisness id and earnings are static must be changed 
    let warehouse = {
      name: data.name,
      business_id: 1,
      address: data.warehouseAddress,
      capacity: data.capacity,
      available_capacity: data.availableCapacity,
      shipping_available: data.shipments,
      service_fee: Number(data.serviceFeePerVolume),
      earnings: 9999,
      warehouse_type: data.warehouseType
    }
    
    return this.http.post('http://127.0.0.1:8000/api/warehouse', warehouse)
  }
}

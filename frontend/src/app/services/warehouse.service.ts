import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Warehouse } from '../interfaces/warehouse';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getWarehouses(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/warehouse');
  }

  getWarehouseByUser(id: any): Observable<any[]> {
    const userData = this.auth.userBuisnessData;
    return (
      this.http
        .get<any[]>(`http://127.0.0.1:8000/api/warehouse/users/` + id)
        //parsing data
        //owner name and email static must be changed

        .pipe(
          map((data: any) =>
            data['data'].map(
              (raw: {
                address: string;
                available_capacity: number;
                earnings: number;
                service_fee: number;
                warehouse_type: string;
                name: string;
                capacity: number;
              }) => {
                let warehouse: Warehouse = {
                  address: raw.address,
                  availableCapacity: raw.available_capacity,
                  earning: raw.earnings,
                  ownerName: userData.user_name,
                  ownerEmail: userData.user_email,
                  serviceFee: raw.service_fee,
                  warhouseType: raw.warehouse_type,
                  warehouseName: raw.name,
                  capacity: raw.capacity,
                };
                return warehouse;
              }
            )
          )
        )
    );
  }

  createWarehouse(data: any) {
    //parsing input
    //buisness id and earnings are static must be changed
    const business_id = this.auth.userBuisnessData.business_id;
    console.log(business_id);
    let warehouse = {
      name: data.name,
      business_id: business_id,
      address: data.warehouseAddress,
      capacity: data.capacity,
      available_capacity: data.availableCapacity,
      shipping_available: data.shipments,
      service_fee: Number(data.serviceFeePerVolume),
      earnings: 9999,
      warehouse_type: data.warehouseType,
    };

    return this.http.post('http://127.0.0.1:8000/api/warehouse', warehouse);
  }
}

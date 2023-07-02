import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-warehouse-register',
  templateUrl: './warehouse-register.component.html',
  styleUrls: ['./warehouse-register.component.scss']
})
export class WarehouseRegisterComponent {
  myForm !: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.myForm = this.fb.group({
      name: '',
      warehouseType: '',
      warehouseAddress: '',
      capacity: '',
      serviceFeePerVolume: '',
      shipments: Boolean
    })
  }
}

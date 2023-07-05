import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-warehouse-register',
  templateUrl: './warehouse-register.component.html',
  styleUrls: ['./warehouse-register.component.scss']
})
export class WarehouseRegisterComponent {
  myForm !: FormGroup;
  countForm !: FormGroup;
  countFormArr : Array<number> =[0] ;


  warehouseNumber: number = 1;
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.myForm = this.fb.group({
      name: ['',[Validators.minLength(3), Validators.maxLength(30), Validators.required]],
      warehouseType: ['',[ Validators.minLength(5),  Validators.required ]],
      warehouseAddress: ['',[Validators.minLength(5),Validators.maxLength(200), Validators.required ]],
      capacity: ['',[ Validators.min(10), Validators.max(50000), Validators.required ]],
      availableCapacity: ['',[ Validators.min(10), Validators.max(50000), Validators.required ]],
      serviceFeePerVolume: ['',[Validators.min(1), Validators.max(50000), Validators.required ]],
      shipments: [true]
    })

    this.countForm = this.fb.group({
      count: ['', [Validators.min(0), Validators.max(5), Validators.required]],
    })
    
  }

  changeWarehouse(number: number){
    this.warehouseNumber = number;
  }

  onSubmitCount(){

    if(this.countForm.valid){
      this.countFormArr =  [...Array(this.countForm.value.count).keys()]
      console.log(this.countFormArr);
      this.warehouseNumber= parseInt(this.countForm.value.count)
    }

  }
  onSubmitForm(index: number){
    if(this.myForm.valid){
      
      this.countFormArr.splice(index, 1)
      console.log(this.myForm.value.shipments);
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { BusinessService } from '../services/business.service';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss']
})
export class BusinessFormComponent {
  myForm!: FormGroup;
  userId!:string;
  constructor(private fb: FormBuilder, private businessService: BusinessService){}
  ngOnInit(){
    const token  = localStorage.getItem('token')?localStorage.getItem('token'):0
    
      const payload: any = jwt_decode(token?token:"");
      this.userId = payload.user_id;
      
        this.myForm = this.fb.group({
          user_id: [this.userId?this.userId:0,],
          business_name: ['',[ Validators.minLength(4), Validators.maxLength(20),  Validators.required ]],
          business_address: ['',[Validators.minLength(5),Validators.maxLength(200), Validators.required ]],
          business_type: ['warehouse',[Validators.minLength(5), Validators.maxLength(15), Validators.required ]],
          
        })

      
    
  }
  onSubmitForm(){
    if(this.myForm.valid){
      console.log(this.myForm.value);
      this.businessService.createBusiness(this.myForm.value).subscribe(
        (data)=>{
          console.log(data);
        }
      )

    }
  }
}

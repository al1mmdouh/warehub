import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registeration: FormGroup ;
 
  constructor(private fb :FormBuilder){
  this.registeration = this.fb.group({
    name :["",[Validators.required]],
    password :["",[Validators.required,Validators.minLength(8)]],
    email :["",[Validators.required,Validators.minLength(8)]],
    number :["",[Validators.required,Validators.minLength(10)]],
    address :["",[Validators.required,Validators.minLength(10)]],
  })
}
  submitregisteration(){
  }
}  
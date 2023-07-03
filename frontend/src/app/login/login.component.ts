import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: FormGroup ;
 
  constructor(private fb :FormBuilder){
  this.login = this.fb.group({
    email :["",[Validators.required,Validators.minLength(8)]],
    password :["",[Validators.required,Validators.minLength(8)]],
  })
}
  submitregisteration(){
  }
};

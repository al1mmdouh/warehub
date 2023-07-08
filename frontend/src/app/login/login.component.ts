import { Component,DoCheck } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import jwt_decode from 'jwt-decode';
import { finalize} from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  userId !:number;


  login: FormGroup ;
 
  constructor(private fb :FormBuilder, private authenticate: AuthService, private router: Router){
  this.login = this.fb.group({
    email :["",[Validators.required,Validators.minLength(8)]],
    password :["",[Validators.required,Validators.minLength(7)]],
  })
}

  submitLogin(){
  this.authenticate.login(this.login).pipe(
    //updating user data after login
    finalize(()=>{
      const token  = localStorage.getItem('token')?localStorage.getItem('token'):0

      if(token){
        const payload: any = jwt_decode(token?token:"");
        const user_id = payload.user_id;
        this.authenticate.getBuisness(user_id).subscribe(
          (data: any)=>{
            let dataObj =  {
              business_id: data.data[0].business_id,
              business_name: data.data[0].business_name,
              business_type: data.data[0].business_type,
              user_name: data.data[0].user.name,
              user_email: data.data[0].user.email
            }
            console.log(dataObj);
            this.authenticate.changeUserBuisnessData(dataObj);
            this.router.navigate(['/'])
          }
        )
      }
  
    })
  )
  //adding token to localstorage and decoting the user id
    .subscribe(
      (data:any)=> {

        localStorage.setItem('token', data['token']);
        const token = localStorage.getItem('token');
        const payload: any = jwt_decode(token?token:"");
        this.userId = payload.user_id;
        
      }
    )
    
  }


};



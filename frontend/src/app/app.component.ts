import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onButtonClick() {
    this.router.navigate(['/warehouse']);
  }
  title = 'frontend';
  constructor(private authService: AuthService,private router: Router){}
  ngOnInit(){
    const token  = localStorage.getItem('token')?localStorage.getItem('token'):0
    if(token){
      const payload: any = jwt_decode(token?token:"");
      const user_id = payload.user_id;
      this.authService.getBuisness(user_id).subscribe(
        (data: any)=>{
          
          // console.log(data.data[0]);
          // localStorage.setItem('business_id', data.data[0].business_id)
          // localStorage.setItem('business_name', data.data[0].business_name)
          // localStorage.setItem('user_name', data.data[0].user.name)
          // localStorage.setItem('user_email', data.data[0].user.email)
          if(data.data.length){
            let dataObj =  {
              business_id: data.data[0].business_id,
              business_name: data.data[0].business_name,
              business_type: data.data[0].business_type,
              user_name: data.data[0].user.name,
              user_email: data.data[0].user.email
            }
            console.log(dataObj);
            this.authService.changeUserBuisnessData(dataObj);

          }
          else{
            let dataObj =  {
              business_id: 'no business',
              business_name: 'no business',
              business_type: 'no business',
              user_name:'no business',
              user_email: 'no business'
            }
            this.authService.changeUserBuisnessData(dataObj);
            
          }
        }
      )
    }

  }

}



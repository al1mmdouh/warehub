import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
    
  }


  //variables approach
  userBuisnessData: any = 0;
   changeUserBuisnessData(data:any){
    this.userBuisnessData = data;
   // this.userBuisnessData;

  }

  getAccessLevel(){
    const token  = localStorage.getItem('token')?localStorage.getItem('token'):0
    if(this.userBuisnessData){
      return this.userBuisnessData.business_type
    }
    else if(token){

      return 'wait'
    }
    else{

      return 'guest'
    }
  }

  register(userData: any){
    //parsing data
    let registerData = {
      name: userData.value.name,
      email: userData.value.email,
      password: userData.value.password,
      phone_number: userData.value.number,
      address: userData.value.address
    }
    return this.http.post('http://127.0.0.1:8000/api/register', registerData)
  }

  login(loginData: any){
    let credentials = {
      email: loginData.value.email,
      password: loginData.value.password
    }

    return this.http.post('http://127.0.0.1:8000/api/login', credentials)
  }

  getBuisness(id: string){
    return this.http.get(`http://127.0.0.1:8000/api/business/${id}`)
  }

  
}

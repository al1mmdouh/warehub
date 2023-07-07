import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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
}

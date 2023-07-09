import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userData !: any
  constructor(private auth: AuthService){
    this.userData ={
      name: this.auth.userBuisnessData.user_name,
      email: this.auth.userBuisnessData.user_email,
      role: `${this.auth.userBuisnessData.business_type} owner`,
      business_name: this.auth.userBuisnessData.business_name
    }
  }

}

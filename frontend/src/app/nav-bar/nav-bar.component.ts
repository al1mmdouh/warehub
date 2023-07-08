import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements DoCheck {
  accessLevel!:string;
  userName:any = ''
  constructor(private authService: AuthService){
  
  }
  ngDoCheck(): void {
    this.accessLevel = this.authService.getAccessLevel();
    this.userName = this.authService.userBuisnessData.user_name;

  }
  ngOnInit(){
    this.accessLevel = this.authService.getAccessLevel();
  }
  logOut(){
    localStorage.clear();
    this.authService.changeUserBuisnessData(0);
  }
}

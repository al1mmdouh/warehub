import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{
  constructor(private authService: AuthService, private router: Router){console.log("gyard");}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const requiredAccessLevel = route.data['accessLevel'];
      const userAccessLevel = this.authService.getAccessLevel();
    if (requiredAccessLevel === userAccessLevel) {
      console.log(requiredAccessLevel);
      console.log(userAccessLevel);

      return true;
    } else {


      this.router.navigate(['/']);
      
      return false;
    }
  

    //return localStorage.getItem('token')?true: false
  }
  
}

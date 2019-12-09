import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  constructor(private auth:AuthService,private route:Router){}

  canActivate(route,state:RouterStateSnapshot){
    return this.auth.user$.map(user => {
      if(user) return true;

      this.route.navigate(['/login'],{queryParams : {returnUrl : state.url}})
      return false;
    })
  }
}

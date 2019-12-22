import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(){
   return this.auth.appUser$
    .map(appUser => appUser.isAdmin)
  }
}

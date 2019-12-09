import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  appUser:AppUser
  constructor(private auth : AuthService,private route:Router) {
    // afAuth.authState.subscribe(x => this.user = x)
    auth.appUser$.subscribe(appUser =>{this.appUser = appUser},
      (error)=>{
        alert(error)
        throw error;
      } )
   }

  logout(){
    this.auth.logout();
    // this.route.navigateByUrl('/')
  }
}

import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthService,private route:Router,private userService:UserService){
    this.auth.user$.subscribe(user => {
      if(!user) return

        userService.save(user);
        
        let returnUrl =  sessionStorage.getItem('returnUrl');
        if(!returnUrl) return

        this.route.navigateByUrl(returnUrl)
           
    });
  }
}

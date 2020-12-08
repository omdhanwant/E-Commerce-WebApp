import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';
import "rxjs/add/operator/take";
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaderType = SPINNER.doubleBounce;
  constructor(private auth:AuthService,private route:Router,private userService:UserService, private loaderService: NgxUiLoaderService){
    this.auth.user$.take(1).subscribe(user => {
      if(!user) return

        this.userService.save(user);
        
        let returnUrl =  sessionStorage.getItem('returnUrl');
        if(!returnUrl) return

        this.route.navigateByUrl(returnUrl)
           
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import "rxjs/add/operator/take";
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  appUser:AppUser
  ShoppingCartItemCount:number
  cart$:Observable<ShoppingCart>
  constructor(private auth : AuthService, private cartService:ShoppingCartService) {
    // afAuth.authState.subscribe(x => this.user = x)
}

  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser =>{this.appUser = appUser})    
    this.cart$ = await this.cartService.getCart();
  }

  logout(){
    this.auth.logout();
    // this.route.navigateByUrl('/')
  }
}

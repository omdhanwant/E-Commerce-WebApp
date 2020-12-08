import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$:Observable<ShoppingCart>
  constructor(private cartService:ShoppingCartService, private loader: NgxUiLoaderService) { }

  async ngOnInit() {
    this.loader.start();
    this.cart$ = await this.cartService.getCart();    
    this.loader.stop();
  }


  clearCart(){
    this.cartService.clearCart();
  }

}

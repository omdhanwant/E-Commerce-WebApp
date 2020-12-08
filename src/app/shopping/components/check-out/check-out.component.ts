import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{ 
  cart$:Observable<ShoppingCart> 

  constructor(private shoppingCartService:ShoppingCartService, private loader: NgxUiLoaderService){}
  
  async ngOnInit(){
    this.loader.start();
    this.cart$ = await this.shoppingCartService.getCart();
    this.loader.stop();
  }

}

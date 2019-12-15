import { Component, OnInit, Input } from '@angular/core';
import { Products as Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
  @Input('product') product:Product;
  @Input('showAction') showAction:boolean;
  @Input('shopping-cart') shoppingCart;
  constructor(private cartService:ShoppingCartService) { }

  addToCart(){
    this.cartService.addToCart(this.product);
  }
}

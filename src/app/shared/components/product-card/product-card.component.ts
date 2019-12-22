import { Component, Input } from '@angular/core';
import { Products as Product } from 'app/shared/models/Product';
import { ShoppingCartService } from 'app/shared/services/shopping-cart.service';

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

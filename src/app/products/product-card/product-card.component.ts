import { Component, OnInit, Input } from '@angular/core';
import { Products as Product } from 'src/app/models/Product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
  @Input('product') product:Product
  @Input('showAction') showAction:boolean
  constructor() { }

}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Order } from '../models/Order';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy {
  @Input('cart') cart:ShoppingCart
  shipping = {};
  userSubscription:Subscription
  userId:string
  
  constructor(
    private orderService:OrderService,
    private auth:AuthService,
    private route:Router){
    }

  ngOnInit() {
    this.userSubscription = this.auth.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder() {
    let order = new Order(this.userId ,this.shipping,this.cart);
    let result = await this.orderService.storeOrder(order);

    this.route.navigate(['/order-success',result.key])
  } 

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}

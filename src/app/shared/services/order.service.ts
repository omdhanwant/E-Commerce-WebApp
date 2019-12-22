import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';
import { Order } from '../models/Order';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private database:AngularFireDatabase,private shoppingCartService:ShoppingCartService) { }

  async storeOrder(order){
    let result = await this.database.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders():Observable<Order[]>{
    return this.database.list('/orders')
  }

  getOrderByUser(userId):Observable<Order[]>{
    return this.database.list('/orders',{
      query:{
        orderByChild:'userId',
        equalTo:userId
      }
    });
  }
}

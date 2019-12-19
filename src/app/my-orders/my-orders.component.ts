import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$:Observable<Order[]>
  constructor(private orderService:OrderService,private authService:AuthService) { }

  ngOnInit() {
    this.orders$ = this.authService.user$.switchMap(user => this.orderService.getOrderByUser(user.uid))
  }

}

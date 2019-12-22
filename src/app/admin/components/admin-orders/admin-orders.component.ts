import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/shared/services/order.service';
import { Observable } from 'rxjs';
import { Order } from 'app/shared/models/Order';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$:Observable<Order[]>
  constructor(private orderService:OrderService) {    
   }

  ngOnInit() {
    this.orders$ = this.orderService.getOrders();
  }

}

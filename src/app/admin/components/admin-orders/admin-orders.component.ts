import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/shared/services/order.service';
import { Observable } from 'rxjs';
import { Order } from 'app/shared/models/Order';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$:Observable<Order[]>
  selectedOrder: Order = null;
  constructor(private orderService:OrderService, private loading : NgxUiLoaderService) {    
   }

  ngOnInit() {
    this.orders$ = this.orderService.getOrders();
  }

  startLoading() {
    this.loading.start();
  }

  stopLoading(){
    this.loading.stop();
  }

}

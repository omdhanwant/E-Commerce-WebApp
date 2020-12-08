import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { Order } from '../../../shared/models/Order';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$:Observable<Order[]>
  constructor(private orderService:OrderService,private authService:AuthService, private loader: NgxUiLoaderService) { }

  ngOnInit() {
    this.loader.start();
    this.orders$ = this.authService.user$.switchMap(user => this.orderService.getOrderByUser(user.uid))
    this.loader.stop();
  }

}

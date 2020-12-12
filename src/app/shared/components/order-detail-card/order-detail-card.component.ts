import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'app/shared/models/Order';

@Component({
  selector: 'order-detail-card',
  templateUrl: './order-detail-card.component.html',
  styleUrls: ['./order-detail-card.component.css']
})
export class OrderDetailCardComponent implements OnInit {
  @Input() order: Order;
  constructor() { }

  ngOnInit() {
  }

}

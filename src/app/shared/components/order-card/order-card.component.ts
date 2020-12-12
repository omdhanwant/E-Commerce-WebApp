import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from 'app/shared/models/Order';

@Component({
  selector: 'order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input() order:Order;
  @Output() onClick: EventEmitter<Order> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  orderClick(){
    this.onClick.emit(this.order);
  }
}

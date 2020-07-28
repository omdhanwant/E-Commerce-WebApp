import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {
  @Input('modalData') data;
  constructor() { }

  ngOnInit() {
  }

}

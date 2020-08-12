import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl:
  './cart-summary.component.html',
})
export class CartSummaryComponent implements OnInit {
  @Input() subTotal: number;
  @Input() tax: number;
  @Input() total: number;

  constructor() { }

  ngOnInit(): void {
  }

}

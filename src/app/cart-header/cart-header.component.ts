import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
})
export class CartHeaderComponent implements OnInit {
  @Input() numberItems: number;

  constructor() { }

  ngOnInit(): void {
    // console.log('hoang toni');
    // let quare = this.numberItems * this.numberItems;
    // console.log(quare);
  }



}

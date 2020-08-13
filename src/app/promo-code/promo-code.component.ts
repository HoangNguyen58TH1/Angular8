import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
})
export class PromoCodeComponent implements OnInit {
  @Output() onHandleApplyPromoCode = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  handleApplyPromoCode(element): void {
    let valueInput = element.value;
    console.log(valueInput);
    // console.log(typeof valueInput);
    this.onHandleApplyPromoCode.emit(element.value);
  }

}

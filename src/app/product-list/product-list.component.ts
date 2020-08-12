import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter
  @Output() onUpdateQuantity = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(product_id: string): void {
    // console.log('product_id: ', product_id);

    this.onRemoveProduct.emit(product_id);
  }

  updateQuantity(product_id: string, element): void{
    // console.log('product_id: ', product_id);
    let valueInput = Number(element.value);
    // console.log(typeof valueInput);
    // console.log(element.value);
    // console.log(typeof element.value);
    // console.log(element);
    // console.log(typeof element);
    this.onUpdateQuantity.emit({product_id, valueInput})
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter
  @Output() onUpdateQuantity = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(product_id: string): void {
    this.onRemoveProduct.emit(product_id);
  }

  updateQuantity(element){
    console.log(element.value);
    this.onUpdateQuantity.emit()
    // element.value <= 20;
  }

}

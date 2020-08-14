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

  // ngOnChanges(): void {
  //   console.log('ngOnChanges Product List');
  // }
  ngOnInit(): void {
    console.log('ngOnInit Product List');
  }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck Product List');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit Product List');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked Product List');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit Product List');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked Product List');
  // }
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy Product List');
  // }

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

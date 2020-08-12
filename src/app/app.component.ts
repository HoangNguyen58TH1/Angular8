import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  numberItems:number = 9;
  subTotal: number = 29;
  tax: number = 2.9;
  total: number = 26.1;

  products: Product[] = [
    {
      id: 'abc',
      thumbnail: '/assets/iphone_6s.jpg',
      name: 'Apple iPhone 6S 32GB',
      description: 'iPhone luôn là smartphone có sức hút trong thời gian dài và iPhone 6S cũ cũng vậy. Đã ra mắt được vài năm nhưng đây vẫn là sự lựa chọn ưa thích của không ít người dùng.',
      price: 2,
      quantity: 2
    },
    {
      id: 'abcd',
      thumbnail: '/assets/iphone_x.jpg',
      name: 'iPhone Xs Max 64GB',
      description: 'iPhone Xs Max 64GB (Like New) có màn hình rộng đến 6.5inch cho nội dung hiển thị chi tiết, sắc nét. màn hình tai thỏ thời thượng. Đi cùng là hệ điều hành iOS 12 với chip A12 Bionic giúp máy chạy mượt mà mọi tác vụ',
      price: 3,
      quantity: 3
    },
    {
      id: 'abcde',
      thumbnail: '/assets/iphone_8plus.jpg',
      name: 'iPhone 8 Plus 64GB',
      description: 'iPhone 8 Plus 64GB cũ nhưng ngoại hình và chất lượng máy tương đương với máy mới. Tuy ra mắt cùng lúc với iPhone 8 nhưng phiên bản iPhone 8 Plus đem đến trải nghiệm vượt trội hơn.',
      price: 4,
      quantity: 4
    }
  ]

  removeProduct(product_id: string){
    // alert('function remove product o app: ' + product_id);

    //find index
    const index = this.products.findIndex(product => product.id === product_id);
    //remove element in array
    if(index !== -1){
      this.products.splice(index, 1);
    }
    //Tinh quantity + price
    let numberItems = 0;
    let subTotal = 0;
    for(const product of this.products){
      numberItems += product.quantity;
      subTotal += product.price * product.quantity;
    }
    this.numberItems = numberItems;
    this.subTotal = subTotal;
    this.tax = this.subTotal*10/100;
    this.total = this.subTotal - this.tax;
  }

  updateQuantity(){
    let numberItems = 0;
    for(const product of this.products){
      numberItems += product.quantity;
    }
    this.numberItems = numberItems;
    // console.log('toni');
  }

}

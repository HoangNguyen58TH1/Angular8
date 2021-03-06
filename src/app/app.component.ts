import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { PromoCode } from './promo-code.module';
// import { GetApiService } from './get-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private http: HttpClient) { }

  // ngOnChanges(): void {
  //   console.log('ngOnChanges App --------------------');
  // }
  ngOnInit(): void {
    console.log('ngOnInit App --------------------');
    this.updateCartSummary();
  }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck App --------------------');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit App --------------------');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked App --------------------');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit App --------------------');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked App --------------------');
  // }
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy App --------------------');
  // }


  Submit(object) {
    this.http.post('http://nomnom.xampps/api/v1/loginJWT', object).subscribe((result) => {
      console.log('result', result);
    })

    console.log('object: ', object);
    console.log('email: ', object.email);
    console.log('password: ', object.password);
  }

  title: string = 'Hoang Toni';

  // ngOnInit(){
  //   this.api.apiCall().subscribe((data) => {
  //     console.warn('get api data: ', data)
  //     this.title = data['title'];
  //   })
  // }


  // numberItems: number = 9;
  // subTotal: number = 29;
  // tax: number = 2.9;
  // total: number = 31.9;
  // discountPercent: number = 0;
  // discount: number = 0;
  numberItems: number = 0;
  subTotal: number = 0;
  tax: number = 0;
  total: number = 0;
  discountPercent: number = 0;
  discount: number = 0;

  products: Product[] = [
    {
      id: 'abc',
      thumbnail: '/assets/iphone_6s.jpg',
      name: 'Apple iPhone 6S 32GB',
      description: 'iPhone luôn là smartphone có sức hút trong thời gian dài và iPhone 6S cũ cũng vậy. Đã ra mắt được vài năm nhưng đây vẫn là sự lựa chọn ưa thích của không ít người dùng.',
      price: 2000,
      quantity: 2
    },
    {
      id: 'abcd',
      thumbnail: '/assets/iphone_x.jpg',
      name: 'iPhone Xs Max 64GB',
      description: 'iPhone Xs Max 64GB (Like New) có màn hình rộng đến 6.5inch cho nội dung hiển thị chi tiết, sắc nét. màn hình tai thỏ thời thượng. Đi cùng là hệ điều hành iOS 12 với chip A12 Bionic giúp máy chạy mượt mà mọi tác vụ',
      price: 3000,
      quantity: 3
    },
    {
      id: 'abcde',
      thumbnail: '/assets/iphone_8plus.jpg',
      name: 'iPhone 8 Plus 64GB',
      description: 'iPhone 8 Plus 64GB cũ nhưng ngoại hình và chất lượng máy tương đương với máy mới. Tuy ra mắt cùng lúc với iPhone 8 nhưng phiên bản iPhone 8 Plus đem đến trải nghiệm vượt trội hơn.',
      price: 4000,
      quantity: 4
    }
  ]

  promoCodes: PromoCode[] = [
    {
      id: 1,
      code: 'hoang',
      promoCode: 10,
    },
    {
      id: 2,
      code: 'toni',
      promoCode: 20,
    }
  ]



  updateCartSummary() {
    //Tinh quantity + price
    let numberItems = 0;
    let subTotal = 0;
    for (const product of this.products) {
      numberItems += product.quantity;
      subTotal += product.price * product.quantity;
    }
    this.numberItems = numberItems;
    this.subTotal = subTotal;
    this.tax = this.subTotal * 10 / 100;
    this.total = this.subTotal + this.tax - this.discount;
  }

  removeProduct(product_id: string) {
    // console.log('product_id: ', product_id);
    // alert('function remove product o app: ' + product_id);

    //find index
    const index = this.products.findIndex(product => product.id === product_id);
    //remove element in array
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    this.discount = 0;

    this.updateCartSummary();
  }

  updateQuantity(object) {
    // console.log('object: ', object);
    console.log('product_id: ', object.product_id);
    console.log('valueInput: ', object.valueInput);

    //find index
    const index = this.products.findIndex(product => product.id === object.product_id);
    //remove element in array
    if (index !== -1) {
      this.products[index].quantity = object.valueInput;
    }
    this.discount = 0;

    this.updateCartSummary();
  }

  handleApplyPromoCode(valueInput: string) {
    console.log('valueInput: ', valueInput);

    const promoCodeElement = this.promoCodes.find(promoCode => promoCode.code === valueInput)
    this.discountPercent = promoCodeElement ? promoCodeElement.promoCode : 0;
    this.discount = (this.subTotal * this.discountPercent) / 100;
    console.log('discountPercent: ', this.discountPercent);
    console.log('discount: ', this.discount);
    alert('Promo code is: \n "hoang": Discount is 10% \n "toni": Discount is 20%')

    this.updateCartSummary();
  }

}

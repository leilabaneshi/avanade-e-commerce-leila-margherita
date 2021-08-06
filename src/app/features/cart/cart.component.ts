import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',

})
export class CartComponent implements OnInit {

  products=this.cartService.getProducts();
  clickItemSubscription: Subscription | undefined;
  count: number = 0;

  constructor(private cartService: CartService) {
    this.clickItemSubscription = this.cartService.getCartItemEvent().subscribe(()=>{
      this.countFunction();
    });
  }
  countFunction(){
    this.count += 1;
  }

  // minusFunction(){
  //   if (this.count > 0)
  //   this.count-=1;
  // }

  addQuantity(){
    this.cartService.addCartItemEvent();
  }

  ngOnInit(): void {

  }

}

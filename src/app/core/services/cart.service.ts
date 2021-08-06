import { Product } from 'src/app/core/models/product';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
    products: Product[]= [];

    private subject= new Subject<any>();

    constructor() {
        this.products = [];
    }
    // event of adding item
    addCartItemEvent(){
        this.subject.next();
    }
    // getting item from cart
    getCartItemEvent():Observable<any> {
        return this.subject.asObservable();
    }

    // adding cart
    addToCart(product: Product) {
        this.products.push(product);
    }

    getProducts() {
      return this.products;
    }

    // remove(index: number) {
    //     if (index > -1) {
    //         this.products.splice(index, 1);
    //     }
    // }

    clear() {
        this.products = [];
    }


  }

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/products';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-catalog',
  template: `
    <h1>products comes here</h1>
    <div class="container ">
    <div class="row">

    <div class="card" style="width: 18rem;" *ngFor = "let product of products">
    <img src={{product?.image}} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">{{product?.title}}</h5>
    <p class="card-text">{{product?.review}}</p>
    <a routerLink="./product-details" class="btn btn-primary">see more</a>
    </div>
    </div>
     </div>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
    </div>
  `,
  styles: [
  ]
})
export class CatalogComponent implements OnInit {
products : Product [] | null = null

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.products = this.productservice.products
  }

}

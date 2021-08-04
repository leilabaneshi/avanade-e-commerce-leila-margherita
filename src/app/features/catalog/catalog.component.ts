import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/products';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-catalog',
  template: `

    <div class="container">
      <div class="mt-3">
        <h5 style="text-align: center;" class="list-group-item">
          Your favourite Books <span class="text-dark mx-2"><i class="fa fa-heart"></i></span>
        </h5>
        <hr>
      </div>

      <div class="row row-cols-1 row-cols-md-3">
        <div *ngFor = "let product of products" class="col mb-4">
          <div class="card">
            <img src={{product?.image}} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{product?.title}}</h5>
              <p class="card-text">{{product?.review}}</p>
              <a routerLink="./product-details" class="btn btn-primary">see more</a>
            </div>
          </div>
        </div>

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

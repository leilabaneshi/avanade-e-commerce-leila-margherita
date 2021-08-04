import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/products';
import { ProductService } from 'src/app/core/services/product.service';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-catalog',
  template: `

    <div class="container">
      <div class="mt-3">
        <form [formGroup]= "myForm" (ngSubmit)="save()">

          <input type="text" [formControl]="search"
          #searchInput class="form-control form-control-sm"
          placeholder="Search a book" >

          <hr>

          <select class="form-select"  name="cat" formControlName="cat">
            <option *ngFor="let prod of products" value="{{prod.category}}">
              {{prod.category}}
            </option>
          </select>

            <button class="btn btn-danger mt-2" type="submit" [disabled]="!myForm.valid">Search</button>

        </form>

      </div>

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
  myForm!: FormGroup;
  search!: FormControl;



  constructor(private productservice: ProductService,
  private fb: FormBuilder) {}

  ngOnInit(){
      this.products = this.productservice.products;

      this.myForm = this.fb.group({

        search: ['', Validators.compose([
          Validators.required, Validators.minLength(2)])],
        cat: ['', [Validators.required]]
      })

    }

  save() :void {
    const fields = this.myForm?.value;
    console.log(`Search: ${fields.search} - ${fields.text}`);
  }

}



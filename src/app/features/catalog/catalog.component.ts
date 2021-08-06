import { UserService } from './../../service/user.service';
import { CartService } from './../../core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product} from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styles: [],
  providers: [ProductService]
})

export class CatalogComponent implements OnInit {
  users : User | null = null;
  errorMessage: string = '';
  // for filtering category by select
  category: string[] = ['All', 'Javascript', 'ES6', 'Design Pattern'];
  // creating form for category
  categoryForm: FormGroup = new FormBuilder().group({
    title: [''],
    category: ['All']
  });
  // copy a product as Filtered
  filteredProducts: Product[] = [];
  products: Product[] = [];

  // badge cart
  public count: number = 0;
   // badgeCount = "6";
   number: any;
   subscription: Subscription | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute,
              private router: Router, private formBuilder: FormBuilder, private cartService: CartService) {
        // adding number item to cart
        this.subscription = this.productService.getNumber()
        .subscribe(number => { this.number = number });;
              }

  // calling API for books
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });

  }

    // function for filtering books by category
    performFilter(selectBy: string): void {
      this.filteredProducts = this.products.filter((item) => {
        if (selectBy != 'All') {
          return selectBy === item.category;
        }
        else {
          return this.products;
        }
      })
    }
    // apply the filtering function to select Option
    selectCategory() {
      let value = (this.categoryForm.get('category') || {}).value;
      this.performFilter(value);
      console.log('value =', value);
    }
    // adding to cart and update badge number
    addToCart(product: Product) {

      this.cartService.addToCart(product);
      this.cartService.addCartItemEvent();
      // this.cartService.sendNumber(this.increment());
      window.alert('Your book has been added to the cart!');
    }

    sendNumber() {
      this.productService.sendNumber(this.increment());
    }

    increment() {
      this.count += 1;
      console.log("done");
      return this.count;
    }
}

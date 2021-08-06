import { CartService } from 'src/app/core/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-navbar',
  template: `

    <nav class="navbar navbar-expand navbar-dark bg-dark text-white">
    <div class="container">
      <a class="navbar-brand">book seller</a>

        <!-- <div class="navbar-collapse collapse "> -->
          <ul class="navbar-nav nav justify-content-end">

            <li class="nav-item"
            routerLink="/home" routerLinkActive="active"
            >
              <a class="nav-link text-white">Home</a>
            </li>

            <li class="nav-item"
            routerLink="/catalog" routerLinkActive="active"
            >
              <a class="nav-link text-white"><span class="mx-1"><i class="fa fa-book"></i></span>Catalog</a>
            </li>

            <li class="nav-item"
            routerLink="/profile" routerLinkActive="active"
            >
              <a class="nav-link text-white"><span class="mx-1"><i class="fa fa-user"></i></span>User</a>
            </li>

            <li class="nav-item"
            routerLink="/cart" routerLinkActive="active"
            >

              <a class="nav-link text-white">
                <span class="mx-1"><i class="fa fa-shopping-cart"></i></span>Cart
                <span class="position-absolute top-20 start-40 translate-middle badge square-pill bg-danger" style="font-size: 0.50em; margin: 0.7em;" >{{count}}
                          <span class="visually-hidden">Adding a book to your cart</span>
                      </span>
              </a>

            </li>


          </ul>
        <!-- </div> -->
        </div>
    </nav>


  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  count: number = 0;

  clickItemSubscription:Subscription| undefined;
  constructor(private cartService: CartService)
  {
    this.clickItemSubscription = this.cartService.getCartItemEvent().subscribe(()=>{
      this.countItem();
    });
  }

  countItem(){
    this.count += 1;
  }

  ngOnInit(): void {

  }

 }

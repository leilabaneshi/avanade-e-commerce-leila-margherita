import { Component, OnInit } from '@angular/core';

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
              <a class="nav-link text-white"><span class="mx-1"><i class="fa fa-shopping-cart"></i></span>Cart</a>
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

  constructor() { }

  ngOnInit(): void {
  }

}

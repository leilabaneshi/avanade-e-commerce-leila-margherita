import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
     <nav class="navbar navbar-expand navbar-dark bg-dark text-white">

<a class="navbar-brand">book seller</a>

<div class="navbar-collapse collapse">
  <ul class="navbar-nav">

    <li class="nav-item"
    routerLink="/home" routerLinkActive="active"
    >
      <a class="nav-link">Home</a>
    </li>

    <li class="nav-item"
    routerLink="/catalog" routerLinkActive="active"
    >
      <a class="nav-link">catalog</a>
    </li>

    <li class="nav-item"
    routerLink="/profile" routerLinkActive="active"
    >
      <a class="nav-link">profile</a>
    </li>

    <li class="nav-item"
    routerLink="/cart" routerLinkActive="active"
    >
      <a class="nav-link">cart</a>
    </li>


  </ul>
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

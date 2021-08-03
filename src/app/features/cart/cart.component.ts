import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
   <div>
   <button routerLink="./checkout" routerLinkActive="btn-outline-warning" class="btn btn-primary">checkout</button>
   </div>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

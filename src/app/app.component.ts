import { User } from './model/user';
import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-root',
  template: `

    <app-navbar></app-navbar>

    <div class="container mt-2">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'avanade-e-commerce-leila-margherita';


}

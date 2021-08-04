<<<<<<< HEAD
import { WelcomeComponent } from './../welcome/welcome.component';
import { Welcome } from 'src/app/model/home';
import { Component, Input, OnInit } from '@angular/core';


=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.services';
>>>>>>> 89345bd04b38bbf1b6fa65ab557309b2c2f39605

@Component({
  selector: 'app-home',
  template: `
<<<<<<< HEAD
    <div class="container">

        <app-welcome [items]="welcome"></app-welcome>
        <div class="mt-2">
        <carousel [images]="images"></carousel>
        </div>

    </div>

=======
<h1>welcome {{user?.name}}</h1>
>>>>>>> 89345bd04b38bbf1b6fa65ab557309b2c2f39605
  `,
  styles: [
  ]
})

export class HomeComponent implements OnInit {
user : User | null = null;
params: string = '';

<<<<<<< HEAD

  welcome : Welcome [] = [
    { label: 'Welcome in your favourite Place',
      text: 'A room without books is like a body without soul'}
  ];



  images = [
    'https://picsum.photos/id/1073/355/355',
    'https://picsum.photos/id/365/355/355',
    'https://picsum.photos/id/24/355/355'


  ]
  constructor() {

=======
  constructor(private route: ActivatedRoute,
              private userService: UserService) {
    console.log(route.snapshot.queryParamMap);
>>>>>>> 89345bd04b38bbf1b6fa65ab557309b2c2f39605
  }

  ngOnInit(): void {
    //this.route.snapshot.params
     this.route.queryParams.subscribe(params => {
      console.log(params)
      this.params = params.user;
      this.userService.getUser(this.params).subscribe((data)=>{
        this.user= data;
        console.log("user->", this.user);
      }, error => {
        // serve per gestire errori della chiamata
      })
    })


  }


}

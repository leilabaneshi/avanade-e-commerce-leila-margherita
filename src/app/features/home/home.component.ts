import { WelcomeComponent } from './../welcome/welcome.component';
import { Welcome } from 'src/app/model/home';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  template: `
    <div class="container mt-3">

        <app-welcome [items]="welcome"></app-welcome>
        <div class="mt-2">
        <carousel [images]="images"></carousel>
        </div>

    </div>

  `,
  styles: [
  ]
})

export class HomeComponent implements OnInit {


  welcome : Welcome [] = [
    { label: 'Welcome in your favourite Place',
      text: 'A room without books is like a body without a soul'}
  ];



  images = [
    'https://picsum.photos/id/1073/352/352',
    'https://picsum.photos/id/365/352/352',
    'https://picsum.photos/id/24/352/352'


  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}

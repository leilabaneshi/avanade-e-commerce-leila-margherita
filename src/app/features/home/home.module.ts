import { CarouselModule } from './../../core/components/carousel.module';
import { WelcomeComponent } from '../welcome/welcome.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ]
})
export class HomeModule { }

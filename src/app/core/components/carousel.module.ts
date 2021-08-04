import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';

import { NgModule } from "@angular/core";

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CarouselComponent],
  declarations: [
    CarouselComponent,
  ]
})

export class CarouselModule{

}

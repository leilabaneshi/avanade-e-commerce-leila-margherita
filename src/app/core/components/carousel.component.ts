
import  { Component, EventEmitter, Input} from '@angular/core';

@Component ({
  selector: 'carousel',
  template: `

    <div class="container">
      <div style="margin: auto;">
        <img *ngFor="let img of images" [src]="img" style="margin: 2px"/>
      </div>
    </div>
  `
})

export class CarouselComponent {
  @Input() images!: Array<string>;
}

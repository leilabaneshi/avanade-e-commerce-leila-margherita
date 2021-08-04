
import  { Component, EventEmitter, Input} from '@angular/core';

@Component ({
  selector: 'carousel',
  template: `

    <div class="container">
      <div style="margin: auto; padding: 1px;">
        <img *ngFor="let img of images" [src]="img" />
      </div>
    </div>
  `
})

export class CarouselComponent {
  @Input() images!: Array<string>;
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Welcome } from 'src/app/model/home';

@Component({
  selector: 'app-welcome',
  template: `
  <div class="container">
  <div *ngFor="let w of items" class="list-group-item">
      <h2 style="text-align: center;">
        {{ w.label }}
      </h2>
      <hr>
      <blockquote class="blockquote" style="text-align: right;">
        <p class="mb-1  text-right" style="font-style:italic;">{{ w.text }}</p>
        <footer class="blockquote-footer  text-right">Someone famous</footer>
      </blockquote>

  </div>

`
})
export class WelcomeComponent {
  @Input() items: Welcome[] | undefined;
}

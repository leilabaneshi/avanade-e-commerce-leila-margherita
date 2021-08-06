import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    NavbarComponent,
    HttpClientModule,
    ToastrModule
  ]
})
export class CoreModule { }

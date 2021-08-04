import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }

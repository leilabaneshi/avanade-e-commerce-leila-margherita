import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFilterPipe } from './pipe/book-filter.pipe';


@NgModule({
  declarations: [
    CatalogComponent,
    BookFilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }

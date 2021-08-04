import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
//import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [{ path: '', component: CatalogComponent ,
children : [

  { path: 'productDetails', loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule) }
]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }

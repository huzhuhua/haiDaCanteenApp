import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPayPage } from './product-pay.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPayPageRoutingModule {}

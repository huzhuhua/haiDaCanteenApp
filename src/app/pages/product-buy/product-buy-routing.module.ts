import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductBuyPage } from './product-buy.page';

const routes: Routes = [
  {
    path: '',
    component: ProductBuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductBuyPageRoutingModule {}

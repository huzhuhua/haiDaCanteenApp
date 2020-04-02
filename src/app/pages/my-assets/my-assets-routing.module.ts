import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAssetsPage } from './my-assets.page';

const routes: Routes = [
  {
    path: '',
    component: MyAssetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAssetsPageRoutingModule {}

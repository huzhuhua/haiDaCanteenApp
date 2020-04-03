import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyAddressPage } from './modify-address.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyAddressPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedemptionPage } from './redemption.page';

const routes: Routes = [
  {
    path: '',
    component: RedemptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedemptionPageRoutingModule {}

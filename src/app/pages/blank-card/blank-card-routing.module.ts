import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlankCardPage } from './blank-card.page';

const routes: Routes = [
  {
    path: '',
    component: BlankCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlankCardPageRoutingModule {}

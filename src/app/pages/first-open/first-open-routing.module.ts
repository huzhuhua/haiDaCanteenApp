import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstOpenPage } from './first-open.page';

const routes: Routes = [
  {
    path: '',
    component: FirstOpenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstOpenPageRoutingModule {}

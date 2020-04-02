import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindPassPage } from './find-pass.page';

const routes: Routes = [
  {
    path: '',
    component: FindPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindPassPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenAcountPage } from './open-acount.page';

const routes: Routes = [
  {
    path: '',
    component: OpenAcountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenAcountPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransitionPasswordPage } from './transition-password.page';

const routes: Routes = [
  {
    path: '',
    component: TransitionPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransitionPasswordPageRoutingModule {}

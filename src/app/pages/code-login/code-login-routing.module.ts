import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeLoginPage } from './code-login.page';

const routes: Routes = [
  {
    path: '',
    component: CodeLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeLoginPageRoutingModule {}

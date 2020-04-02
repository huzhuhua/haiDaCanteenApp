import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnsDetailedPage } from './returns-detailed.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnsDetailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnsDetailedPageRoutingModule {}

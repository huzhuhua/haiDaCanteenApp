import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordDetailsPage } from './record-details.page';

const routes: Routes = [
  {
    path: '',
    component: RecordDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordDetailsPageRoutingModule {}

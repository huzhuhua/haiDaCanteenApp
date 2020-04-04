import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDishesPage } from './search-dishes.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDishesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDishesPageRoutingModule } from './search-dishes-routing.module';

import { SearchDishesPage } from './search-dishes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SearchDishesPageRoutingModule
  ],
  declarations: [SearchDishesPage]
})
export class SearchDishesPageModule {}

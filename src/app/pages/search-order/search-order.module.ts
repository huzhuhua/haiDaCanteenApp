import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchOrderPageRoutingModule } from './search-order-routing.module';

import { SearchOrderPage } from './search-order.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchOrderPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SearchOrderPage]
})
export class SearchOrderPageModule {}

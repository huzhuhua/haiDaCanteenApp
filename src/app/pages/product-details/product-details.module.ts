import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPageRoutingModule } from './product-details-routing.module';

import { ProductDetailsPage } from './product-details.page';
import { NgxEchartsModule } from 'ngx-echarts' 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsPageRoutingModule,
    NgxEchartsModule
  ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}

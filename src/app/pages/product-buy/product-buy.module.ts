import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductBuyPageRoutingModule } from './product-buy-routing.module';

import { ProductBuyPage } from './product-buy.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxEchartsModule } from 'ngx-echarts' 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductBuyPageRoutingModule,
    ComponentsModule,
    NgxEchartsModule
  ],
  declarations: [ProductBuyPage]
})
export class ProductBuyPageModule {}

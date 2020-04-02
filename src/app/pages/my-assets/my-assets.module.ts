import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAssetsPageRoutingModule } from './my-assets-routing.module';

import { MyAssetsPage } from './my-assets.page';
import { NgxEchartsModule } from 'ngx-echarts' 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAssetsPageRoutingModule,
    NgxEchartsModule
  ],
  declarations: [MyAssetsPage]
})
export class MyAssetsPageModule {}

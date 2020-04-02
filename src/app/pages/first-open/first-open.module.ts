import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstOpenPageRoutingModule } from './first-open-routing.module';

import { FirstOpenPage } from './first-open.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstOpenPageRoutingModule
  ],
  declarations: [FirstOpenPage]
})
export class FirstOpenPageModule {}

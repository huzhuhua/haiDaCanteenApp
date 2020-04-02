import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedemptionPageRoutingModule } from './redemption-routing.module';

import { RedemptionPage } from './redemption.page';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedemptionPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [RedemptionPage]
})
export class RedemptionPageModule {}

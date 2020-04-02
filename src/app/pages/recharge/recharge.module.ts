import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RechargePageRoutingModule } from './recharge-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { RechargePage } from './recharge.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechargePageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [RechargePage]
})
export class RechargePageModule {}

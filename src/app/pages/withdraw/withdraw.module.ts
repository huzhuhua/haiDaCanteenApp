import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { WithdrawPageRoutingModule } from './withdraw-routing.module';

import { WithdrawPage } from './withdraw.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawPageRoutingModule,
    ReactiveFormsModule,
     FormsModule,
     ComponentsModule
  ],
  declarations: [WithdrawPage]
})
export class WithdrawPageModule {}

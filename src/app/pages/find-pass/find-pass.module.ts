import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindPassPageRoutingModule } from './find-pass-routing.module';

import { FindPassPage } from './find-pass.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindPassPageRoutingModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [FindPassPage]
})
export class FindPassPageModule {}

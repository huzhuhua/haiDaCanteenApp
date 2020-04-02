import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { OpenAcountPageRoutingModule } from './open-acount-routing.module';

import { OpenAcountPage } from './open-acount.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    OpenAcountPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OpenAcountPage]
})
export class OpenAcountPageModule {}

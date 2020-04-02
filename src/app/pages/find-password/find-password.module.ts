import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindPasswordPageRoutingModule } from './find-password-routing.module';

import { FindPasswordPage } from './find-password.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindPasswordPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule
   
  ],
  declarations: [FindPasswordPage]
})
export class FindPasswordPageModule {}

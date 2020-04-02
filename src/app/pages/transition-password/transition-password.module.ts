import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransitionPasswordPageRoutingModule } from './transition-password-routing.module';

import { TransitionPasswordPage } from './transition-password.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransitionPasswordPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [TransitionPasswordPage]
})
export class TransitionPasswordPageModule {}

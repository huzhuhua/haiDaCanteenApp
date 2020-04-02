import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { BindCardPageRoutingModule } from './bind-card-routing.module';

import { BindCardPage } from './bind-card.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BindCardPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [BindCardPage]
})
export class BindCardPageModule {}

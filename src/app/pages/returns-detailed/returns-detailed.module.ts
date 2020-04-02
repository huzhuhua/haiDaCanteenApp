

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnsDetailedPageRoutingModule } from './returns-detailed-routing.module';
import { ReturnsDetailedPage } from './returns-detailed.page';

import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnsDetailedPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [ReturnsDetailedPage]
})
export class ReturnsDetailedPageModule {}






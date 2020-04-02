import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordDetailsPageRoutingModule } from './record-details-routing.module';

import { RecordDetailsPage } from './record-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordDetailsPageRoutingModule
  ],
  declarations: [RecordDetailsPage]
})
export class RecordDetailsPageModule {}

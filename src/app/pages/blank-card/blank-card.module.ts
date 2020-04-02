import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlankCardPageRoutingModule } from './blank-card-routing.module';

import { BlankCardPage } from './blank-card.page';
// import {PasswordPipe} from '../../pipes/password.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     PipesModule,
    BlankCardPageRoutingModule
  ],
  declarations: [BlankCardPage]
})
export class BlankCardPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInfomationPageRoutingModule } from './personal-infomation-routing.module';

import { PersonalInfomationPage } from './personal-infomation.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    PersonalInfomationPageRoutingModule
  ],
  declarations: [PersonalInfomationPage]
})
export class PersonalInfomationPageModule {}

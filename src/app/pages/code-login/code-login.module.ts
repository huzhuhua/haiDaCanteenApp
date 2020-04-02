import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';




import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CodeLoginPageRoutingModule } from './code-login-routing.module';
import { CodeLoginPage } from './code-login.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    CodeLoginPageRoutingModule,
    PipesModule
  ],
  declarations: [CodeLoginPage]
})
export class CodeLoginPageModule {}

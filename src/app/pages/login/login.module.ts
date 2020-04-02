import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    LoginPageRoutingModule,
    PipesModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}

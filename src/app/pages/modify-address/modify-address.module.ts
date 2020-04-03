
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifyAddressPageRoutingModule } from './modify-address-routing.module';
import { IonicModule } from '@ionic/angular';
import { ModifyAddressPage } from './modify-address.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    ModifyAddressPageRoutingModule,
  ],
  declarations: [ModifyAddressPage]
})
export class ModifyAddressPageModule {}
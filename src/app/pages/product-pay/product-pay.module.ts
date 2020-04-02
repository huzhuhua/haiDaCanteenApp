import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProductPayPageRoutingModule} from './product-pay-routing.module';

import {ProductPayPage} from './product-pay.page';
import {ComponentsModule} from 'src/app/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductPayPageRoutingModule,
        ReactiveFormsModule,
        ComponentsModule,
    ],
    declarations: [ProductPayPage]
})
export class ProductPayPageModule {
}

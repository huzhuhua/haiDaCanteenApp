import {NgModule} from '@angular/core';
import { GetCodeComponent } from './get-code/get-code.component';
import {IonicModule} from '@ionic/angular';
import { SuccessComponent } from './success/success.component';
import {CommonModule} from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderComponent } from './order/order.component';

@NgModule({
    declarations: [GetCodeComponent, SuccessComponent , ProductListComponent,OrderComponent],
    imports: [ IonicModule , CommonModule],
    exports: [GetCodeComponent, SuccessComponent , ProductListComponent,OrderComponent]
})
export class ComponentsModule {
 }
import {NgModule} from '@angular/core';
import { GetCodeComponent } from './get-code/get-code.component';
import {IonicModule} from '@ionic/angular';
import { SuccessComponent } from './success/success.component';
import {CommonModule} from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    declarations: [GetCodeComponent, SuccessComponent , ProductListComponent],
    imports: [ IonicModule , CommonModule],
    exports: [GetCodeComponent, SuccessComponent , ProductListComponent]
})
export class ComponentsModule {
 }
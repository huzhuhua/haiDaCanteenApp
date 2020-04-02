import {NgModule} from '@angular/core';

import { PasswordPipe } from './password.pipe';


@NgModule({
    declarations:[ PasswordPipe],
    exports: [
        PasswordPipe
    ]
})
export class PipesModule {
}

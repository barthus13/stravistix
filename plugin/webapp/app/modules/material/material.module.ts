import {NgModule} from "@angular/core";
import {
    MdButtonModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdIconModule,
    MdToolbarModule, MdSidenavModule, MdDialogModule
} from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdIconModule, MdToolbarModule, MdSidenavModule, MdDialogModule
    ],
    exports: [
        MdButtonModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdIconModule, MdToolbarModule, MdSidenavModule, MdDialogModule
    ]
})

export class MaterialModule {
}
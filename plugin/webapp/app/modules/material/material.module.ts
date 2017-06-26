import { NgModule } from "@angular/core";
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdIconModule } from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdIconModule
    ],
    exports: [
        MdButtonModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdIconModule
    ]
})

export class MaterialModule {
}
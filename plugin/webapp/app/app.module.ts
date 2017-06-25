import 'hammerjs';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdIconModule} from '@angular/material'; // TODO Regroup as module

import {AppComponent}  from './app.component';
import {HeroComponent}  from './hero.component';
import {MagicComponent}  from './magic.component';

const appRoutes: Routes = [
    {path: 'hero', component: HeroComponent},
    {path: 'magic', component: MagicComponent},
    {
        path: '',
        redirectTo: 'hero',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {useHash: true}), // TODO move in proper module
        BrowserAnimationsModule,
        // TODO Move in proper module
        MdButtonModule,
        MdIconModule,
        MdCheckboxModule,
        MdInputModule,
        MdMenuModule
    ],
    declarations: [AppComponent, HeroComponent, MagicComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

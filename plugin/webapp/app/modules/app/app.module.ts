import 'hammerjs';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../modules/material/material.module';

import {AppComponent}  from '../../components/app/app.component';
import {HeroComponent}  from '../../components/hero/hero.component';
import {MagicComponent}  from '../../components/magic/magic.component';

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
        MaterialModule
    ],
    declarations: [AppComponent, HeroComponent, MagicComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

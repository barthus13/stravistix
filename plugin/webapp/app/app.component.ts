import {Component} from '@angular/core';

@Component({
    selector: 'webapp',
    template: `
        <h1>Angular Router</h1>
        <nav>
            <a routerLink="/magic" routerLinkActive="active">Magic</a>
            <a routerLink="/hero" routerLinkActive="active">Hero</a>
        </nav>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent {}

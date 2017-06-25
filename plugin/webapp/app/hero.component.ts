import {Component} from '@angular/core';

@Component({
    selector: 'heroes',
    template: `Hello {{heroName}}`,
})
export class HeroComponent {

    private heroName: string;

    constructor() {
        this.heroName = 'Thomas';
    }
}

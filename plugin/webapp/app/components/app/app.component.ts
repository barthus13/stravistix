import {Component} from '@angular/core';

@Component({
    selector: 'web-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public onMenuClicked(): void {
        alert("onMenuClicked");
    }
}

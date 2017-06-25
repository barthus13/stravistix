import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <button md-raised-button>OK</button>`,
})
export class AppComponent  { name = 'Angular'; }

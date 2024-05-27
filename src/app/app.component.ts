import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h1>Hello {{value}}</h1></div>`,
})
export class AppComponent {
  value = 'World';
}

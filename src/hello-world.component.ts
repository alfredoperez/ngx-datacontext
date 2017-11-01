import { Component } from '@angular/core';

@Component({
  selector: 'ngx-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'Ngx-DataContext';
}

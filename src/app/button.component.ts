import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'example-angular-elements-component-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
  public something: any = {is: 'nothing'};
  public timestamp: number = (new Date).getTime();

  public doSomething() {
    this.something = {is: Math.random()};
  }
}

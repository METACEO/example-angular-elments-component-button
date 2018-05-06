import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { ButtonComponent } from './button.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserModule],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ButtonElement = createCustomElement(ButtonComponent, {injector: this.injector});
    customElements.define('example-angular-elements-component-button', ButtonElement);
  }
}

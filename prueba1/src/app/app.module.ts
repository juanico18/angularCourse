import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoCompoment } from './saludo.component';
import { ControlComponent } from './control/control.component';
import { IfComponentComponent } from './if-component/if-component.component';
import { ForComponentComponent } from './for-component/for-component.component';
import { ModelComponentComponent } from './model-component/model-component.component';
import { SwitchComponentComponent } from './switch-component/switch-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoCompoment,
    ControlComponent,
    IfComponentComponent,
    ForComponentComponent,
    ModelComponentComponent,
    SwitchComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

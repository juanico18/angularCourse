import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiceServiceService } from './providers/dice-service.service';
import { ConsumerDiceComponentComponent } from './consumer-dice-component/consumer-dice-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerDiceComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DiceServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

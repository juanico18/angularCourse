import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondsPipe } from './pipes/seconds.pipe';
import { SecondsflagPipe } from './pipes/secondsflag.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SecondsPipe,
    SecondsflagPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

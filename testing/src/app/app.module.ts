import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NombreComponent } from './components/nombre/nombre.component';
import { PipePruebaPipe } from './pipe-prueba.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NombreComponent,
    PipePruebaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

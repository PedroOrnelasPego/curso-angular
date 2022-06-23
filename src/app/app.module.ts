import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

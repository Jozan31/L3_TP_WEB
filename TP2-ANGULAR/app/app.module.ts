import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';

import { CardService } from './card.service';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

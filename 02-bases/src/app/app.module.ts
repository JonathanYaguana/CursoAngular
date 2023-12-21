import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ListComponent } from './heroes/list/list.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { CounterComponent } from './counter/componentes/counter/counter.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/hero.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

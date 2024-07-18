import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPagesComponent } from './pages/selectorpages/selectorpages.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectorPagesComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule { }

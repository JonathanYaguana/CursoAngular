import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/mapScreen/mapScreen.component';

@NgModule({
  imports: [
    CommonModule,
    MapScreenComponent,
  ],
  exports: [
    MapScreenComponent
  ],
  declarations: []
})
export class MapsModule { }

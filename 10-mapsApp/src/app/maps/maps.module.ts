import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
( mapboxgl as any ).accessToken = 'pk.eyJ1Ijoiam15YWd1YW5hIiwiYSI6ImNseXlvNXhleTBmeWsyaW9pdWhtdnRxangifQ._c710inhrdkOp36NurLM9w';


import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/miniMap/miniMap.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import { CounterAloneComponent } from "../alone/components/counter-alone/counter-alone.component";
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SideMenuComponent,
    CounterAloneComponent
]
})
export class MapsModule { }

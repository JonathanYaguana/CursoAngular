import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './minimap.component.html',
  styleUrls: ['./miniMap.component.css'],
})
export class MiniMapComponent implements AfterViewInit{

  @Input() lgnLat?: [number, number];

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(){
    if( !this.divMap?.nativeElement ) throw "Map Div not found"

    if( !this.lgnLat ) throw "LngLat can't be null"

    //map
    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lgnLat,
      zoom: 15, // starting zoom
      interactive: false,
    });

    //marker
    new Marker()
    .setLngLat( this.lgnLat )
    .addTo( map )
  }
}

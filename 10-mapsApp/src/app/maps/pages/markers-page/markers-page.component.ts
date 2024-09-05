import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-79.20634578867782, -3.976688740069818);

  ngAfterViewInit(): void {

    if( !this.divMap ) throw 'El elemento HTML no fue encontrado'

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 10, // starting zoo
    });

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Jonathan Yaguana'

    // const marker = new Marker({
    //   //color: 'red'
    //   element: markerHtml
    // })
    // .setLngLat( this.currentLngLat )
    // . addTo( this.map );
  }

}

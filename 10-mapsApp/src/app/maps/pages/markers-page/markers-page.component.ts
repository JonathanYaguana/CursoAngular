import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

interface MarkerAddColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lgnLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAddColor[] = [];

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

    this.readFromLocalStorage();

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Jonathan Yaguana'

    // const marker = new Marker({
    //   //color: 'red'
    //   element: markerHtml
    // })
    // .setLngLat( this.currentLngLat )
    // . addTo( this.map );
  }

  createMarker(){
    if ( !this.map ) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker( lngLat, color);
  }

  addMarker( lngLat: LngLat, color: string){
    if ( !this.map ) return;

    const marker = new Marker({
      color: color,
      draggable: true,
    })
    .setLngLat( lngLat )
    .addTo( this.map );

    this.markers.push({ color, marker });
    this.saveToLocalStorage();
  }

  deleteMarker(index: number){
    this.markers[index].marker.remove();
    this.markers.splice( index, 1)
  }

  flyTo( marker: Marker ) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage(){
    const plainMarkers: PlainMarker[] = this.markers.map( ({ color, marker }) => {
      return {
        color,
        lgnLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify( plainMarkers ));
  }

  readFromLocalStorage(){
    const plainMarkerString = localStorage.getItem( 'plainMarkers' ) ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse( plainMarkerString ); //!OJO!

    plainMarkers.forEach( ({ color, lgnLat }) => {
      const [lng, lat] = lgnLat;
      const coord = new LngLat( lng, lat );

      this.addMarker( coord, color );
    });
  }
}

import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mapView',
  standalone: true,
  imports: [],
  templateUrl: './mapView.component.html',
  styleUrls: ['./mapView.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapViewComponent implements AfterViewInit{

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  private placeService = inject(PlacesService);

  ngAfterViewInit(): void {

    if( !this.placeService.useLocation ) throw Error ('No hay placeService.useLocation')

    const map = new Map({
	    container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11',
	    center: this.placeService.useLocation, // starting position [lng, lat]
	    zoom: 5, // starting zoom
    });

    const popup = new Popup()
     .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

    new Marker({color: 'green'})
     .setLngLat( this.placeService.useLocation )
     .setPopup( popup )
     .addTo( map )
  }

}

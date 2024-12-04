import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import mapboxgl from 'mapbox-gl';

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

    if(!this.placeService.getUserLocation) throw Error ('No hay placeService.useLocation')

    const map = new mapboxgl.Map({
	    container: this.mapDivElement.nativeElement, // container ID
	    center: this.placeService.useLocation, // starting position [lng, lat]
      style: 'mapbox://styles/mapbox/streets-v11',
	    zoom: 9, // starting zoom
    });
  }

}

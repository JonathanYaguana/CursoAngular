import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PlacesService } from '../../services';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../components/loading/loading.component';
import { MapViewComponent } from '../../components/mapView/mapView.component';

@Component({
  selector: 'app-mapScreen',
  standalone: true,
  imports: [LoadingComponent, MapViewComponent, CommonModule],
  templateUrl: './mapScreen.component.html',
  styleUrls: ['./mapScreen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapScreenComponent {

  private placesService = inject(PlacesService);

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }

  constructor() {
    console.log(this.placesService.getUserLocation())
  }
}

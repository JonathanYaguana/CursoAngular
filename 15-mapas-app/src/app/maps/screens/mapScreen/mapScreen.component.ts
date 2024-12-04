import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PlacesService } from '../../services';
import { LoadingComponent } from "../../components/loading/loading.component";
import { MapViewComponent } from "../../components/mapView/mapView.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mapScreen',
  standalone: true,
  imports: [LoadingComponent, MapViewComponent, CommonModule],
  templateUrl: './mapScreen.component.html',
  styleUrls: ['./mapScreen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapScreenComponent {

  private placeService = inject(PlacesService);

  get isUserLocationReady(){
    return this.placeService.isUserLocationReady;
  }

}

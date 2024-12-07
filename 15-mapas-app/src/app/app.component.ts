import { Component } from '@angular/core';
import { MapsModule } from './maps/maps.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapsModule, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'mapas-app';

}

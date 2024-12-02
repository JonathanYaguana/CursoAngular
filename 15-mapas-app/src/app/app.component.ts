import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapScreenComponent } from "./maps/screens/mapScreen/mapScreen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mapas-app';
}

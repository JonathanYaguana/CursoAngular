import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1Ijoiam15YWd1YW5hIiwiYSI6ImNseXlvNXhleTBmeWsyaW9pdWhtdnRxangifQ._c710inhrdkOp36NurLM9w';

if( !navigator.geolocation ){
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

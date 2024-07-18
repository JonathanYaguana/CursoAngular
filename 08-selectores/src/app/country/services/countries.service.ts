import { Injectable } from '@angular/core';
import { Region } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _region: Region[] = [ Region.Africa, Region.America, Region.Asia, Region.Europa, Region.Oceania ];

  constructor() { }

  get regions(): Region[] {
    return [...this._region ];
  }
}

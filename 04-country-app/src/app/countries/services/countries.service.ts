import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/countries';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term:'', countries:[] },
    byCountries: { term:'', countries:[] },
    byRegion: { region:'', countries:[] },
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
   }

  private saveToLocalStorage() {
    localStorage.setItem( 'cacheStore', JSON.stringify( this.cacheStore ) );
  }

  private loadFromLocalStorage() {
    if( !localStorage.getItem( 'cacheStore' ) ) return;

    this.cacheStore = JSON.parse( localStorage.getItem( 'cacheStore' )! );
  }

  searchByAlpaCode (cod: string): Observable<Country | null> {

    const url = `${this.apiUrl}/alpha/${cod}`;

    return this.http.get<Country[]>(url)
    .pipe(
      map(countries => countries.length >0 ? countries[0]:null),
      catchError( error => of(null))
    );

  }

  searchCapital ( term:string ): Observable<Country[]> {

    return this.typeSearchCountriesHttp('capital',term)
      .pipe(
        tap( countries => this.cacheStore.byCapital = {term, countries}),
        tap( () => this.saveToLocalStorage()),
      )

  }

  searchCountry( term:string ): Observable<Country[]> {

    return this.typeSearchCountriesHttp('name',term)
      .pipe(
        tap( countries => this.cacheStore.byCountries = {term, countries}),
        tap( () => this.saveToLocalStorage()),
      )

  }

  searchRegion( region:Region ): Observable<Country[]> {

    return this.typeSearchCountriesHttp('region',region)
      .pipe(
        tap( countries => this.cacheStore.byRegion = {region ,countries}),
        tap( () => this.saveToLocalStorage()),
      )

  }

  private typeSearchCountriesHttp(tipo: string, term: string|Region): Observable<Country[]> {

    const url = `${this.apiUrl}/${tipo}/${term}`;

    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error => of([])),
    );

  }
}

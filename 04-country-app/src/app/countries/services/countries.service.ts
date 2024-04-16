import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';

import { Country } from '../interfaces/countries';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term:'', countries:[] },
    byCountries: { term:'', countries:[] },
    byRegion: { region:'', countries:[] },
  }

  constructor(private http: HttpClient) { }

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

  }

  searchCountry( term:string ): Observable<Country[]> {

    return this.typeSearchCountriesHttp('name',term)

  }

  searchRegion( term:string ): Observable<Country[]> {

    return this.typeSearchCountriesHttp('region',term)

  }

  private typeSearchCountriesHttp(tipo: string, term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/${tipo}/${term}`;

    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error => of([])),
      //delay( 2000 ),
    );

  }
}

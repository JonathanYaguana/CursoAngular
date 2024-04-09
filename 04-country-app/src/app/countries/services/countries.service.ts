import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchByAlpaCode (cod: string): Observable<Country[]> {

    return this.typeSearch('alpha',cod);
  }

  searchCapital ( term:string ): Observable<Country[]> {

    return this.typeSearch('capital',term)

  }

  searchCountry( term:string ): Observable<Country[]> {

    return this.typeSearch('name',term)

  }

  searchRegion( term:string ): Observable<Country[]> {

    return this.typeSearch('region',term)

  }

  typeSearch(tipo: string, term: string): Observable<Country[]> {

    const url = `${this.apiUrl}/${tipo}/${term}`;

    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error => of([]))
    );

  }
}
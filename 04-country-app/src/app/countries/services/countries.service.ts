import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

  private apiUrl: string = 'https://restcountries.com/v3.1'


  constructor(private httpClient: HttpClient) { }

}

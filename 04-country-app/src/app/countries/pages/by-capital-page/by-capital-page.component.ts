import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: Boolean = false;
  public initialValue: string = '';

  constructor( private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term:string):void {

    this.isLoading = true;

    this.countriesService.searchCapital(term)
      .subscribe(
        countries => {
          this.countries = countries;
          this.isLoading = false;
        }
      );
  }
}

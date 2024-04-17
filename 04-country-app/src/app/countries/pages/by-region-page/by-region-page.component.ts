import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})

export class ByRegionPageComponent implements OnInit{

  public countries: Country [] = [];
  public regions: Region[] = ['America', 'Asia', 'Africa', 'Europe', 'Oceania'];
  public isLoading: Boolean = false;
  public initialValue: Region = '';

  public selectedRegion?: Region;

  constructor( private countriesService:CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(term:Region):void {

    this.selectedRegion = term;
    this.isLoading = true;

    this.countriesService.searchRegion(term)
      .subscribe(
        countries => {
          this.countries = countries;
          this.isLoading = false;
        }
      );
  }

}

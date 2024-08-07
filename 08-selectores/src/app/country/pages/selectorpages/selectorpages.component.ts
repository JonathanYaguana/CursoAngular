import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry, Country } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selectorpages',
  templateUrl: './selectorpages.component.html',
  styles: [
  ]
})
export class SelectorPagesComponent implements OnInit{

  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] =  [];

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
  ){}

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChange();
  }

  onRegionChange(): void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('country')!.setValue('') ),
      tap( () => this.borders = [] ),
      switchMap( region => this.countriesService.getCountriesByRegion(region) )
    )
    .subscribe( countries => {
      this.countriesByRegion = countries;
      //      console.log({ region })
    })
  }

  onCountryChange(): void {
     this.myForm.get('country')!.valueChanges
    .pipe(
      tap( () => this.myForm.get('border')!.setValue('') ),
      filter( (value : string) => value.length > 0  ),
      switchMap( (alphaCode) => this.countriesService.getCountryByAlphaCode(alphaCode) ),
      switchMap( (country) => this.countriesService.getCountryBordersByCodes( country.borders )
      )
    )
    .subscribe( country => {
      this.borders = country;
      //console.log({ borders: country.borders })
    });
  }

}

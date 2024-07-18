import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/country.interfaces';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-selectorpages',
  templateUrl: './selectorpages.component.html',
  styles: [
  ]
})
export class SelectorPagesComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    bordes: ['', Validators.required],
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
  }

  onRegionChange(): void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      switchMap( region => this.countriesService.getCountriesByRegion(region) )
    )
    .subscribe( region => {
      console.log({ region })
    })
  }

}

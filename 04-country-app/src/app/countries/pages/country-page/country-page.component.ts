import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {
   this.activateRoute.params
   .pipe(
      switchMap(({id}) => this.countriesService.searchByAlpaCode( id )),
   )
   .subscribe(country => {
      this.redireccionUrl(country);
    });
  }

  redireccionUrl( country:Country | null) {

    if(!country) return this.router.navigateByUrl('');

    return this.country = country;
  }
}

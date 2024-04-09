import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {
   this.activateRoute.params
   .subscribe(
      ({id}) => {

        this.countriesService.searchByAlpaCode(id)
          .subscribe(
            country =>{
              console.log({country})
            }
          )

      }
    );
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher, Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  //Formulario reactivo
  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }), //estrictamente es un string
    publisher: new FormControl<Publisher>( Publisher.DCComics ),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marver Comics', desc: 'Marver - Comics'},
  ]

  constructor ( private heroeServicve: HeroesService) {}

  get currentHero(): Hero {

    const hero = this.heroForm.value as Hero;

    return hero;
  }

  onSumit(): void {
    if ( this.heroForm.invalid) return;

    if ( this.currentHero.id ){

      this.heroeServicve.updateHero( this.currentHero )
        .subscribe( hero => {
          // TODO: mostrar snackbar
        });

        return;
    }

    this.heroeServicve.addHero( this.currentHero )
      .subscribe( hero => {
        //TODO: mostrar snackbar, y navegar a /heroes/edit/hero.id
      });

  };

}

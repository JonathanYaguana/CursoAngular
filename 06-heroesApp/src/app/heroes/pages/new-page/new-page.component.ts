import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { Publisher, Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { filter, switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirmDialog/confirmDialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit{

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

  constructor (
    private heroeServicve: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) {}

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

  onDeleteHero() {
    if ( !this.currentHero.id ) throw Error('Hero id is required');

    const dialogRef = this.dialog.open( ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap( () => this.heroeServicve.deleteHeroById( this.currentHero.id) ),
        filter( (wasDeleted: boolean) => wasDeleted)
      )
      .subscribe(result =>{
        this.router.navigate( ['/heroes'] );
      });

    // dialogRef.afterClosed().subscribe(result =>{
    //   if( !result ) result;

    //   this.heroeServicve.deleteHeroById( this.currentHero.id )
    //   .subscribe( wasDeleted => {
    //     if ( wasDeleted )
    //       this.router.navigate(['/heroes']);
    //   });

    // });
  }

  ngOnInit(): void {
    if( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroeServicve.getHeroById( id ) ),
    ).subscribe( hero => {

      if ( !hero) return this.router.navigateByUrl('/');

      this.heroForm.reset( hero );
      return;

    });
  }

}

import { Injectable } from '@angular/core';

import {  v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 10000
  },
  {
    id: uuid(),
    name: 'Brolly',
    power: 1000000
  }];

  addCharacter(character:Character):void {

    const newCharacter: Character = {id: uuid(), ...character};

    this.characters.push(character);

  }

  //onDeleteCharacter(Index:number){
  //  this.characters.splice(Index, 1);
  deleteCharacterById(id:string){
    this.characters = this.characters.filter( characters => characters.id != id);
  }

}

import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-components.html'
})

export class mainPageComponent {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 10000
  },
  {
    name: 'Brolly',
    power: 1000000
  }];
}

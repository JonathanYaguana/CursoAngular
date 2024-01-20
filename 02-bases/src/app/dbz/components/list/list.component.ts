import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']

})

export class ListComponent {

  @Input()
  public characterList: Character [] = [{
    name: 'Trunks',
    power: 9000
  }]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeletCharacter(id?:string):void{
    //Todo: Emitir el ID del personaje

    if (!id) return;

    this.onDeleteId.emit(id);
  }
}

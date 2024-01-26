import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.services';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar:</h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #tagText
  >
  `
})

export class SearchBoxComponent {

  @ViewChild('tagText')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor ( private gifsServise:GifsService){ }

  searchTag (){

    const newTag = this.tagInput.nativeElement.value;

    this.gifsServise.searchTag(newTag);
    console.log(newTag);

    this.tagInput.nativeElement.value = '';
  }
}

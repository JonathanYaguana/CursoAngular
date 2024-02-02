import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.services';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  constructor ( private gifsService: GifsService) { }

  get tags() {
    return this.gifsService.tagHistory;
  }

  newSearch(tag:string) {
    this.gifsService.searchTag(tag);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})

export class SearchBoxComponent implements OnInit{

  @Input()
  public placeholder: string ='';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  public debounce = new Subject<string>;

  ngOnInit(): void {

    this.debounce.pipe(
      debounceTime(300)
    )
    .subscribe(
      value => {
        this.onDebounce.emit(value);
      }
    );

  }

  emitValue(value:string):void {
    this.onValue.emit(value);
  }

  keyPress(searchTerm:string):void {
    this.debounce.next(searchTerm);
  }
}

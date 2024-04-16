import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})

export class SearchBoxComponent implements OnInit, OnDestroy{

  @Input()
  public placeholder: string ='';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  public debounce = new Subject<string>;
  public debouceSubscrition?: Subscription;

  ngOnInit(): void {

    this.debouceSubscrition = this.debounce.pipe(
      debounceTime(300)
    )
    .subscribe(
      value => {
        this.onDebounce.emit(value);
      }
    );

  }

  ngOnDestroy(): void {
    this.debouceSubscrition?.unsubscribe();
  }

  emitValue(value:string):void {
    this.onValue.emit(value);
  }

  keyPress(searchTerm:string):void {
    this.debounce.next(searchTerm);
  }
}

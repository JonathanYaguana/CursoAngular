import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './CounterPage.component.html' ,
  styleUrls: ['./counterPage.component.css'],
})
export class CounterPageComponent {

  public counter = signal(10);
  public squareCounter = computed( () => this.counter() * this.counter() );

  incrementBy( value: number) {
    this.counter.update( currrent => currrent + value );
  }

}

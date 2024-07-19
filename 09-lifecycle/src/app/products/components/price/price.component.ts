import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  ngOnInit(): void {
    console.log('Component HIJO - ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component HIJO - ngOnChanges')
    console.log({changes})

  }

  ngOnDestroy(): void {
    console.log('Component HIJO - ngOnDestroy')
  }

  @Input()
  public price: number = 0;
}

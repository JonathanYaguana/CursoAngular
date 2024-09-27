import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>
  private _calor: string = 'red';

  @Input()
  set color (value: string){
    this._calor = value;
    this.setStyle();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    console.log(el)
    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = 'hola mundo';
  }

  setStyle():void {
    if( !this.htmlElement ) return;

    this.htmlElement!.nativeElement.style.color = this._calor;
  }

}

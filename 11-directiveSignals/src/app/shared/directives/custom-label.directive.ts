import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>
  private _calor: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input()
  set color (value: string){
    this._calor = value;
    this.setStyle();
  }

  @Input()
  set errors ( values: ValidationErrors | null | undefined){
    this._errors = values;
    this.setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    //console.log(el)
    this.htmlElement = el;
  }

  setStyle():void {
    if( !this.htmlElement ) return;

    this.htmlElement!.nativeElement.style.color = this._calor;
  }

  setErrorMessage():void {
    if ( !this.htmlElement ) return;
    if ( !this._errors ) {
      this.htmlElement.nativeElement.innerText = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors)

    if ( errors.includes('required')){
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }

  }

}

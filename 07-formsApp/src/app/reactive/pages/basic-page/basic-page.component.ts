import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/service/validators.service';

const rtx5090 = {
  name: 'RTX 5090',
  price: 5000,
  inStorage: 6
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit{

  // public myForm: FormGroup = new FormGroup ({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   isStorage: new FormControl(0),
  // });

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService
   ){}

  ngOnInit(): void {
    //this.myForm.reset( rtx5090 );
  }

  isValidField( field: string ): boolean | null {
    return this.validatorService.isValidField( this.myForm, field );
  }

  onSave(): void{

    if( this.myForm.invalid ) {

      this.myForm.markAllAsTouched();

      return;

    }

    this.myForm.reset();

    console.log(this.myForm.value)
  }

  getFielError( field: string): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {

      switch( key ){
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracteres.`;
      }

    }

    return null;

  }

}

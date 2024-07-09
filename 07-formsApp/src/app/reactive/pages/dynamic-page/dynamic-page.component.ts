import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    favoriteGame: this.fb.array([
      ['WoW', Validators.required],
      ['LoL', Validators.required]
    ])
  })

  constructor ( private fb: FormBuilder) {}

  onSubmit(): void {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
}

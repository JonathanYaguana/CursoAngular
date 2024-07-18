import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selectorpages',
  templateUrl: './selectorpages.component.html',
  styles: [
  ]
})
export class SelectorPagesComponent {

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    bordes: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
  ){}
}

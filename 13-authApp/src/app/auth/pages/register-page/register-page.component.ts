import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({

  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.myForm.reset( this.usuario )
  }

  public myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required,  Validators.minLength(6) ] ],
    email: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', [ Validators.required, Validators.minLength(6)]],
    rol: [ 'User', Validators.required ],
  })

  public usuario = {
    rol: 'Admin',
  }

  onSave(){
    this.usuario = this.myForm.value
    console.log(this.myForm.value)

  }

}

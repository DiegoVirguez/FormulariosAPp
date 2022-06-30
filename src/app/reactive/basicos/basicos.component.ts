import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5),
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]  ],                //, validadores sincronos, validadores asincronos
    precio: [ , [Validators.required,Validators.min(0)] ],
    existencias: [ ,  [Validators.required,Validators.min(0)]],
  })

  constructor( private fb: FormBuilder) { }

  //inicializar valores en el formulario
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600,
      existencias: 10
    })
  }

  campoEsValido( campo: string){
    return this.miFormulario.controls[campo].errors  
    && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if( this.miFormulario.invalid ){
      this.miFormulario.markAllAsTouched(); // para que salten los mensajes al presionar el boton
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();              // devuelve a los valores por defecto el valid- pristine y el touched
  }

}

import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)]  ], 
    favoritos: this.fb.array( [
      ['Metal Gear', Validators.required],
      ['Deat Strainding', Validators.required]
    ], Validators.required),
  });

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder) { }

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

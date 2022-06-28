import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm; // ! confiar en mi 

  initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid &&  //?  si ya lo evaluo
      this.miFormulario?.controls['producto']?.touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.invalid &&  //?  si ya lo evaluo
      this.miFormulario?.controls['precio']?.touched;
  }
  

  guardar(){
    //console.log( this.miFormulario);
    console.log('Posteo correcto');

    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencias:0
    });
  }

}

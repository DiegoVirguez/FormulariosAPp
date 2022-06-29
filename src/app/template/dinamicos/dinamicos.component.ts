import { Component } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id:number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Diego',
    favoritos: [
      {id: 1, nombre: 'Metal Gear'},
      {id: 2, nombre: 'DeathStrainding'},
    ]
  }

  eliminar(index:number){
    this.persona.favoritos.splice(index,1);
  }

  guardar(){
    console.log('Formulario posteado');
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo = 'Nuevo componente interpolacion';
  usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
  };

  saludar() {
    return `¡Hola, ${this.usuario.nombre}! ` ;
  }
}

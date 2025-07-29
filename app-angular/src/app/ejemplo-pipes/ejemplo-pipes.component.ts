import { Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {
empleados  = [
  {nombre: 'Marcos Juarez', sueldo: 2500, fechaNacimiento: new Date('2001-01-01')},
  {nombre: 'Laura Mejía', sueldo: 5000, fechaNacimiento: new Date('1995-05-15')},
  {nombre: 'Gilberto Pérez', sueldo: 3000, fechaNacimiento: new Date('1990-10-20')}
  
];
}

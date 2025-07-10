import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-componente-for',
  imports: [],
  templateUrl: './componente-for.component.html',
  styleUrl: './componente-for.component.css'
})
export class ComponenteForComponent {
  titulo: string = 'Directiva @for en Angular';

  tareas: string[] = ['Aprender React','Aprender Angular', 'Desarrollar una app', 
    'Aprender TypeScript'];

  agregarTarea(nuevaTarea:string){ 
    if(nuevaTarea){this.tareas.push(nuevaTarea);}
  }
}

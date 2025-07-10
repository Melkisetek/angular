import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  imports: [],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})
export class AgregarTareaComponent {
  titulo: string = 'Local Reference';

  tarea: string = '';

  agregarTarea(nuevaTarea: string): void {
    this.tarea = nuevaTarea;
  }
}

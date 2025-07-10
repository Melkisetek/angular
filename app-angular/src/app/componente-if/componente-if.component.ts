import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  imports: [],
  templateUrl: './componente-if.component.html',
  styleUrl: './componente-if.component.css'
})
export class ComponenteIfComponent {
  title: string = "Directiva @if en Angular";

  isAutenticado: boolean = true;

  alternarAutenticacion():void {
    this.isAutenticado = !this.isAutenticado;
  }
}

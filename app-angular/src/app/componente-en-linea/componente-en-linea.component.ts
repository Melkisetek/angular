import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  imports: [],
  template: `
  <h1>{{tituloComponenteInline}}</h1>
    <p>
      componente-en-linea works!
    </p>
  `,
  styles: `
  p{
    color: blue;
    font-size: 20px;
  
  }
  `
})
export class ComponenteEnLineaComponent {
  tituloComponenteInline: string = 'Componente en Línea';
}

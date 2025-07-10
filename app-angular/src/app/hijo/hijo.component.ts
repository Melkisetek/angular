import { StringToken } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  private titulo:String = "Titulo componente hijo";

  // Geetter de typeScript
  get mostrarTitulo(): String {
    return this.titulo;
  }

  // Getter de JavaScript
  // Se puede usar en el HTML como {{getMostrarTitulo()}}
  // No se recomienda usarlo, ya que se ejecuta cada vez que Angular detecta
  // un cambio en el componente, lo que puede afectar al rendimiento.
  // Se recomienda usar el getter de TypeScript.
  // getMostrarTitulo() {
  //   return this.titulo;
  // }
}

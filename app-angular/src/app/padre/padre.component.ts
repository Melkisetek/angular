import { Component, ViewChild} from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})

export class PadreComponent {
  titulo: string = "Decorador @ViewChild";

  @ViewChild(HijoComponent) componenteHijo!: HijoComponent;

  cambiarMensajeHijo() {
    this.componenteHijo.cambiarMensaje('Nuevo mensaje desde el componente padre');
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteEnLineaComponent } from "./componente-en-linea/componente-en-linea.component";
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from "./hijo/hijo.component";
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from "./saludar/saludar.component";
import { ComponenteIfComponent } from "./componente-if/componente-if.component";
import { AgregarTareaComponent } from "./agregar-tarea/agregar-tarea.component";
import { ComponenteForComponent } from "./componente-for/componente-for.component";

@Component({
  selector: 'app-root',
  //se importarn los componentes que se van a usar en el template
  //en este caso, se importan los componentes que se van a usar en el template
  //y se declaran en el array de imports
  //esto es necesario para que Angular los reconozca y los pueda usar
  imports: [RouterOutlet, ComponenteEnLineaComponent, NuevoComponenteComponent, InterpolacionComponent, PadreComponent, HijoComponent, MostrarMensajeComponent, ReplicadorComponent, SaludarComponent, ComponenteIfComponent, AgregarTareaComponent, ComponenteForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola mundo desde Angular, 2025';
}

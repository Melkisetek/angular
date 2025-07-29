import { Component, LOCALE_ID } from '@angular/core';
import { MensajeService } from './mensaje.service';
import { EjemploPipesComponent } from "./ejemplo-pipes/ejemplo-pipes.component";
// Importing Spanish locale data for date formatting
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

// Registramos los datos de localización para español
registerLocaleData(localeEs, 'es')

@Component({
  selector: 'app-root',
  //se importarn los componentes que se van a usar en el template
  //en este caso, se importan los componentes que se van a usar en el template
  //y se declaran en el array de imports
  //esto es necesario para que Angular los reconozca y los pueda usar
  imports: [EjemploPipesComponent],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo Pipes en Angular, 2025';

  mensaje: string;
  constructor(mensajeServicio: MensajeService){
    this.mensaje = mensajeServicio.obtenerMensaje();
  }
}

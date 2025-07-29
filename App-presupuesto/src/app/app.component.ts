import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from "./cabecero/cabecero.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App-presupuesto';
}

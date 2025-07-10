import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  valorA: number = 0;
  valorB: number = 0;

  resultado: number = 0;

  sumar(): void {
    this.resultado = this.valorA + this.valorB; 
  }


}










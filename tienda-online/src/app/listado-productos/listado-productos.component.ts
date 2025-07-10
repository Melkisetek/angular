import { Component } from '@angular/core';
import { Producto } from './producto/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  productos: Producto[] = [
    new Producto('Pantalón', 100.0),
    new Producto('Camisa', 45.0),
    new Producto('Zapatos', 120.0),
  ];

  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto() {
    if (this.descripcionInput === '' || this.precioInput === null || this.precioInput <= 0) {
      alert('Por favor, ingrese una descripción y un precio válido.');
      return;
    }
    
    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(producto);
    // Limpiar los campos de entrada despues de agregar el producto
    this.descripcionInput = '';
    this.precioInput = 0;
  }
}

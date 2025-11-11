import { Carrito } from '../carritoCompras/carrito.js';
import { FormularioPago } from './formularPago.js';

const initi = () =>{
  Carrito.actualizarContador();
  const formulario = new FormularioPago();
  formulario.render();
}

initi();
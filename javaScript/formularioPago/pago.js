import { Carrito } from '../carritoCompras/carrito.js';
import { FormularioPago } from './formularPago.js';
import { loger } from "../login/loger.js";
const initi = () =>{
  Carrito.actualizarContador();
  const formulario = new FormularioPago();
  formulario.render();
}

initi();
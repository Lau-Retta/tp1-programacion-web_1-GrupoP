import { Carrito } from '../carritoCompras/carrito.js';
import { FormularioPago } from './formularPago.js';
import { loger } from "../login/loger.js";
import { getParamFromURL } from '../utils/utils.js';
import { getItemSesionStorage } from '../utils/localStorage.js';

const initi = () =>{
  Carrito.actualizarContador();
  const paramType = getParamFromURL("type");
  const datosInscripcion = getItemSesionStorage("formInscripcion");
  if(paramType && paramType === "inscripcion" && datosInscripcion){
    const titulo = document.querySelector(".titulo_pago");
    const span = document.createElement("span");
    span.textContent = `Total: ${datosInscripcion.cursoSelect.precio}`;
    titulo.appendChild(span);
  }
  const formulario = new FormularioPago();
  formulario.render();
}

initi();
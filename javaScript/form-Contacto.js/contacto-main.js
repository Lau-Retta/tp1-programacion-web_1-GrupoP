import { Carrito } from "../carritoCompras/carrito.js";
import { FormularioContacto } from "./formulario.js";
import { loger } from "../login/loger.js";
function main() {
  Carrito.actualizarContador();
  new FormularioContacto(".Form_contacto");
}
document.addEventListener("DOMContentLoaded", main);

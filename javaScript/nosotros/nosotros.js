import { Carrito } from "../carritoCompras/carrito.js";
import { loger } from "../login/loger.js";
function main() {
  Carrito.actualizarContador();
}

document.addEventListener("DOMContentLoaded", main);
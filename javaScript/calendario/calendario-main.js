import { Calendario } from './calendario.js';
import { Carrito } from "../carritoCompras/carrito.js";
const init = () => {
    Carrito.actualizarContador();
    const calendario = new Calendario();
    calendario.init();
}

init();
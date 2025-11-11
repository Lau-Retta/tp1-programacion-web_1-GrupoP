import { Calendario } from './calendario.js';
import { Carrito } from "../carritoCompras/carrito.js";
const init = () => {
    Carrito.actualizarContador();
    const btnConfirm = document.querySelector(".btn-confirm");
    const calendario = new Calendario();
    calendario.init();

    btnConfirm.addEventListener("click", () => {
        window.location.href = calendario.cursoSelected;
    });

}

init();
import { Carrito } from "./carrito.js";
import { loger } from "../login/loger.js";
const init = () => {
    const carrito = new Carrito();
    carrito.render();
}

init();
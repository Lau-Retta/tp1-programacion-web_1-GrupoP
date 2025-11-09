import { Carrito } from "./carrito.js";

const init = () => {
    //TODO seguir con la logica de validación de compra e implementar en las demas pantallas.
    //TODO Añadir lógica para manejar mas de un mismo curso.
    const carrito = new Carrito();
    carrito.render();
}

init();
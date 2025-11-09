import { User } from "./login/user.js";
import { Carrito } from "./carritoCompras/carrito.js";

const init = () => {
    User.initUsers();
    Carrito.actualizarContador();
    const btnIncriptionIA = document.querySelector(".cabecera__btn");
    btnIncriptionIA.addEventListener("click", () => {
        window.location.href = "./pages/inscripcionIndividual/inscripcionIndividual.html?curso=curso-ia"
    })
}

init();
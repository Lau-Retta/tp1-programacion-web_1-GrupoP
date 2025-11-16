import { giftCard } from "./giftCard.js";
import { Carrito } from "../carritoCompras/carrito.js";
import { Loger } from "../login/loger.js";

const btnRestablecer = document.querySelector('#restablecerGiftCard');
const giftCardPersonalizable = new giftCard();
giftCardPersonalizable.personalizar();
btnRestablecer.addEventListener('click', () => {
    giftCardPersonalizable.limpiarGiftCard();
}
);
Carrito.actualizarContador();

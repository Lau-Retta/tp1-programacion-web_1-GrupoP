import { giftCard } from "./giftCard.js";
import { Carrito } from "../carritoCompras/carrito.js";
import { Loger } from "../login/loger.js";
const giftCardPersonalizable = new giftCard();
giftCardPersonalizable.personalizar();
Carrito.actualizarContador();

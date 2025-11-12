import {getParamFromURL} from "../utils/utils.js"
import { giftCard } from "./giftCard.js";
import { Carrito } from "../carritoCompras/carrito.js";
import { Loger } from "../login/loger.js";
const renderFinal = new giftCard();

const destinatario = getParamFromURL('destinatario');
const color = getParamFromURL('color');
const fuente = getParamFromURL('fuente');
const monto = getParamFromURL('monto');
const ubicacion = getParamFromURL('ubicacion');
const fondo = getParamFromURL('fondo');


document.addEventListener('DOMContentLoaded', ()=>{
    Carrito.actualizarContador();
    renderFinal.renderizar(destinatario, color, fuente, monto, ubicacion, fondo);
});

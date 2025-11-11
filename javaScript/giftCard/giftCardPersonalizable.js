// // PERSONALIZAR UBICACIÓN
// const radiosUbicacion = document.querySelectorAll('input[name="ubicacion"]');
// const contenedoresParrafor = document.querySelectorAll('.vistaPrevia_texto');
// const contenedorTextos = document.querySelector('.contenedor_textos');
// const render = document.querySelector('.main__vistaPrevia_render');
// const sitioWeb = document.querySelector('#vistaPrevia_sitioWeb');

// radiosUbicacion.forEach(radio => {
//     radio.addEventListener('change', () => {
        
//         const valorRadio = radio.value;

//         switch(valorRadio){
//             case 'ubicacion_izqInf':
//                 render.style.flexDirection = "column";
//                 contenedorTextos.style.flexDirection = "row";
//                 contenedoresParrafor[0].style.flexDirection = "column";
//                 contenedoresParrafor[1].style.flexDirection = "column";
//                 sitioWeb.style.order = "4";
//                 break;

//             case 'ubicacion_derInf':
//                 render.style.flexDirection = "column";
//                 contenedorTextos.style.flexDirection = "row-reverse";
//                 contenedoresParrafor[0].style.flexDirection = "column";
//                 contenedoresParrafor[1].style.flexDirection = "column";
//                 sitioWeb.style.order = "4";
//                 break;

//             case 'ubicacion_centroSup':
//                 render.style.flexDirection = "column-reverse";
//                 contenedorTextos.style.flexDirection = "column";
//                 contenedoresParrafor[0].style.flexDirection = "row";
//                 contenedoresParrafor[1].style.flexDirection = "row";
//                 sitioWeb.style.order = "-1";
//                 break;

//             case 'ubicacion_centro':
//                 render.style.flexDirection = "column";
//                 contenedorTextos.style.flexDirection = "column";
//                 contenedoresParrafor[0].style.flexDirection = "row";
//                 contenedoresParrafor[1].style.flexDirection = "row";
//                 sitioWeb.style.order = "4";
//                 break;
//         }
//     })
// })

// // PERSONALIZAR NOMBRE

// const inputNombre = document.querySelector('.inputNombre');
// const textoNombre = document.querySelector('#textoNombre');

// inputNombre.addEventListener('input', (event) => {
//     textoNombre.textContent = inputNombre.value;
// })

// // PERSONALIZAR COLOR

// const textoTitulo = document.querySelector('#textoTitulo');
// const parrafos = document.querySelectorAll('.vistaPrevia_texto-parrafo');

// const radiosColor = document.querySelectorAll('input[name="color"]');

// radiosColor.forEach(radio => {
//     radio.addEventListener('change', () => {
//         const valorRadio = radio.value;
//         const elementosDOM = [textoTitulo, parrafos[0], parrafos[1], textoNombre, textoMonto];
//         limpiarClasesCSS(elementosDOM, valorRadio);
//         asignarClasesCSS(elementosDOM, valorRadio);
//         console.log(parrafos[0].classList)
//     })
// })



// // PERSONALIZAR TAMAÑO FUENTE
// const radiosFuente = document.querySelectorAll('input[name="fuente"]');
// radiosFuente.forEach(radio => {
//     radio.addEventListener('change', () => {
//         const valorRadio = radio.value;
//         const elementosDOM = [textoTitulo, parrafos[0], parrafos[1], textoNombre, textoMonto];
//         limpiarClasesCSS(elementosDOM, valorRadio);
//         asignarClasesCSS(elementosDOM, valorRadio);
//         console.log(parrafos[0].classList)
//     })
// })

// // PERSONALIZAR MONTO
// const inputMonto = document.querySelector('.inputMonto');
// const textoMonto = document.querySelector('#textoMonto');

// inputMonto.addEventListener('input', (event) => {
//     textoMonto.textContent = `$${inputMonto.value}`;
// })



// // PERSONALIZAR FONDO 

// const radiosFondo = document.querySelectorAll('input[name="fondo"]');
// radiosFondo.forEach(radio => {
//     radio.addEventListener('change', () => {
//         const valorRadio = radio.value;
//         limpiarClaseCSS(render, valorRadio);
//         asignarClaseCSS(render, valorRadio);
//         console.log(render.classList)
//     })
// })

// // RESET
// const btnReset = document.querySelector('.js-boton-reset');
// btnReset.addEventListener('click', ()=>{

// })

// //ENVÍO 
// const form = document.querySelector('#form_giftCard');
// form.addEventListener('submit', () =>{
//     const url = window.location.href;

// })




// // UTILIDADAES 
// function asignarClasesCSS(array, nombreClase){
//     array.forEach(elemento => {
//         elemento.classList.add(nombreClase);
//     })
// };

// function limpiarClasesCSS(array, nombreClase){
//     const fraccion = nombreClase.slice(0,-2)

//     array.forEach(elemento => {
//         elemento.classList.forEach(clase => {
//             if(clase.startsWith(fraccion)){
//                 elemento.classList.remove(clase);
//             }
//         });
//     })
// };

// function asignarClaseCSS(elemento, nombreClase){
//     elemento.classList.add(nombreClase);
// };

// function limpiarClaseCSS(elemento, nombreClase){
//     const fraccion = nombreClase.slice(0,-2)

//     elemento.classList.forEach(clase => {
//         if(clase.startsWith(fraccion)){
//             elemento.classList.remove(clase);
//         }
//         });
// };

import { giftCard } from "./giftCard.js";

const giftCardPersonalizable = new giftCard();
giftCardPersonalizable.personalizar();


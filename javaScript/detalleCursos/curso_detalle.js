import { cursos } from "../../data/cursos.js";
import { getItemSesionStorage, setItemSesionStorage } from "../utils/localStorage.js";
import { Carrito } from "../carritoCompras/carrito.js";
import { DetalleCurso } from "./detalle-curso.js";

const detalleCurso = new DetalleCurso();
detalleCurso.render();

// --- CONTADOR Y SESIÓN ---
let contador = sessionStorage.getItem("contadorCursos") 
  ? parseInt(sessionStorage.getItem("contadorCursos")) 
  : 0;

Carrito.actualizarContador();

//const contadorElemento = document.getElementById("cursos_en_carrito");
//if (contadorElemento) contadorElemento.textContent = contador;

// array de cursos ya inscriptos o comprados
let cursosInscriptos = getItemSesionStorage("currentUser").carrito
  ?? [];

// --- EVENTOS ---
document.querySelectorAll(".btn-inscribirse, .btn-comprar").forEach(boton => {
  boton.addEventListener("click", e => {
    e.preventDefault();

    const curso = boton.closest(".container-curso, .card");
    const titulo = curso.querySelector("#titulo, .card-title")?.textContent?.trim() || "Curso sin nombre";
    const precio = curso.querySelector(".curso-precio, .card-price")?.textContent?.trim() || "—";
    const idCurso = cursos.find(c => c.nombreCurso === titulo.slice(9))?.id || null;

    // si ya esta inscripto mostrar modal
    if (cursosInscriptos.includes(idCurso)) {
      mostrarModal(titulo, precio, true);
      return;
    }

const usuarioLogeado = getItemSesionStorage("currentUser");

console.log(usuarioLogeado);

usuarioLogeado.carrito.push(idCurso);
setItemSesionStorage("currentUser", usuarioLogeado);
cursosInscriptos.push(idCurso);

// agregar curso
    //cursosInscriptos.push(titulo);
    //sessionStorage.setItem("cursosInscriptos", JSON.stringify(cursosInscriptos));

// actualizar contador
    // contador++;
    Carrito.actualizarContador();
    //if (contadorElemento) contadorElemento.textContent = contador;

    mostrarModal(titulo, precio, false);
  });
});

// --- MODAL ---
const modal = document.getElementById("modal");
const mensajeModal = document.getElementById("mensajeModal");
const cerrarModal = document.getElementById("cerrarModal");

function mostrarModal(titulo, precio, yaInscripto) {
  if (yaInscripto) {
    mensajeModal.innerHTML = `Ya te habías anotado en <strong>${titulo}</strong>.`;
  } else {
    mensajeModal.innerHTML = `Te inscribiste correctamente al curso <strong>${titulo}</strong> por ${precio}.`;
  }
  modal.style.display = "flex";
}

cerrarModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});





// --- ACORDEON CONTENIDO CLASES ---










// --- CARRUSEL DE OTROS CURSOS ---

(function() {
  const flechaIzq = document.getElementById('flechita-izq-cursos');
  const flechaDer = document.getElementById('flechita-der-cursos');
  const contenedor = document.querySelector('.otros-cursos-cards');

  if (!contenedor || !flechaIzq || !flechaDer) return;

  // obtenemos sólo los elementos .card (ignoramos las flechas)
  function getCards() {
    return Array.from(contenedor.children).filter(el => el.classList && el.classList.contains('card'));
  }

  // animación de desplazamiento: mueve visualmente las cartas hacia la izquierda (next)
  async function animarYRotarNext() {
    const cards = getCards();
    if (cards.length === 0) return;

    const first = cards[0];

    // animar todas las cards moviéndose a la izquierda del ancho de la primera
    const ancho = first.getBoundingClientRect().width + parseFloat(getComputedStyle(first).marginRight || 0);

    // animación para cada tarjeta (mover a la izquierda)
    const anims = cards.map(el => el.animate(
      [{ transform: 'translateX(0px)' }, { transform: `translateX(-${ancho}px)` }],
      { duration: 300, easing: 'ease' }
    ));

    // esperamos a que termine la animación
    await Promise.all(anims.map(a => a.finished.catch(() => {})));

    // rotamos en el DOM: movemos el primer elemento al final
    contenedor.appendChild(first);
    // quitar transforms (la animación ya terminó y el DOM cambió)
    cards.forEach(el => el.style.transform = '');
  }

  // animación para prev: mover la última al frente con efecto entrante
  async function animarYRotarPrev() {
    const cards = getCards();
    if (cards.length === 0) return;

    const last = cards[cards.length - 1];
    const first = cards[0];
    const ancho = first.getBoundingClientRect().width + parseFloat(getComputedStyle(first).marginRight || 0);

    // Antes de animar, movemos la última al inicio pero la colocamos visualmente fuera a la izquierda
    contenedor.insertBefore(last, first);

    // forzamos reflow para que el navegador reconozca la nueva posición
    last.getBoundingClientRect();

    // aplicamos animación de entrada: de -ancho a 0
    const cardsNow = getCards(); // ahora la lista incluye la que acabamos de mover
    const anims = cardsNow.map(el => {
      if (el === last) {
        // entrada desde la izquierda
        return el.animate(
          [{ transform: `translateX(-${ancho}px)` }, { transform: 'translateX(0px)' }],
          { duration: 300, easing: 'ease' }
        );
      } else {
        // las demás se desplazan a la derecha para dejar espacio (suavemente)
        return el.animate(
          [{ transform: 'translateX(0px)' }, { transform: `translateX(${ancho}px)` }, { transform: 'translateX(0px)' }],
          { duration: 300, easing: 'ease' }
        );
      }
    });

    await Promise.all(anims.map(a => a.finished.catch(() => {})));
    // limpieza por si quedó transform inline
    getCards().forEach(el => el.style.transform = '');
  }

  flechaDer.addEventListener('click', (e) => {
    e.preventDefault();
    // prevenir múltiples clicks rápidos que desordenen la animación
    if (flechaDer.dataset.busy === '1') return;
    flechaDer.dataset.busy = '1';
    animarYRotarNext().finally(() => { delete flechaDer.dataset.busy; });
  });

  flechaIzq.addEventListener('click', (e) => {
    e.preventDefault();
    if (flechaIzq.dataset.busy === '1') return;
    flechaIzq.dataset.busy = '1';
    animarYRotarPrev().finally(() => { delete flechaIzq.dataset.busy; });
  });

})();



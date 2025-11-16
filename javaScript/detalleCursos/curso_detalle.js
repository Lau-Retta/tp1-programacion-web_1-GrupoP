import { cursos } from "../../data/cursos.js";
import { loger } from "../login/loger.js";
import { getItemSesionStorage, setItemSesionStorage } from "../utils/localStorage.js";
import { Carrito } from "../carritoCompras/carrito.js";
import { DetalleCurso } from "./detalle-curso.js";
import { saveDataUserInStorage, getDataOfCurrentUser } from "../login/user.js";

const detalleCurso = new DetalleCurso();
detalleCurso.render();

// --- CONTADOR Y SESIÓN ---
let contador = sessionStorage.getItem("contadorCursos")
  ? parseInt(sessionStorage.getItem("contadorCursos"))
  : 0;

Carrito.actualizarContador();

let cursosInscriptos = [];
const usuarioLogeado = getItemSesionStorage("currentUser");
function cargarCursosInscriptos() {
  if (getDataOfCurrentUser() && Object.keys(usuarioLogeado).length > 0) {
    cursosInscriptos = cursosInscriptos.concat(getDataOfCurrentUser().cursos);
    cursosInscriptos = cursosInscriptos.concat(getDataOfCurrentUser().carrito.length > 0 ? getDataOfCurrentUser().carrito : getItemSesionStorage("currentUser").carrito);
  } else {
    cursosInscriptos = [];
  }
}

// --- EVENTOS ---
document.querySelectorAll(".btn-inscribirse, .btn-comprar").forEach(boton => {
  boton.addEventListener("click", e => {
    e.preventDefault();
    cargarCursosInscriptos();
    const curso = boton.closest(".container-curso, .card");
    const titulo = curso.querySelector("#titulo, .card-title")?.textContent?.trim() || "Curso sin nombre";
    const precio = curso.querySelector(".curso-precio, .card-price")?.textContent?.trim() || "—";
    const idCurso = cursos.find(c => c.nombreCurso === titulo.slice(9))?.id || null;

    if (cursosInscriptos.includes(idCurso)) {
      mostrarModal(titulo, precio, true);
      return;
    }

    const usuarioLogeado = getItemSesionStorage("currentUser");

    if (Object.keys(usuarioLogeado).length > 0) {
      usuarioLogeado.carrito.push(idCurso);
      setItemSesionStorage("currentUser", usuarioLogeado);
      cursosInscriptos.push(idCurso);
      const dataUser = getDataOfCurrentUser();
      dataUser.carrito.push(idCurso);
      saveDataUserInStorage(dataUser);
      Carrito.actualizarContador();
      mostrarModal(titulo, precio, false);
    } else {
      const modalContentH2 = document.querySelector(".modal-content-detalleCurso h2");
      modalContentH2.style = "display: none;"
      mensajeModal.innerHTML = `Debes <a  href="../../pages/login.html">iniciar sesión</a> o <a href="../../pages/registro.html">registrarte</a> para comprar o inscribirte en este curso.`;
      modal.style.display = "flex";
    }

  });
});

document.querySelector(".btn-inscribirse-incluye").addEventListener("click", () => {
  const usuarioLogeado = getItemSesionStorage("currentUser");
  const titulo = document.querySelector("#titulo, .card-title")?.textContent?.trim() || null;
  const idCurso = cursos.find(c => c.nombreCurso === titulo.slice(9))?.id || null;
  if (Object.keys(usuarioLogeado).length > 0) {
    window.location.href = `pages/inscripcionIndividual/inscripcionIndividual.html?curso=${idCurso}`;
  } else {
    const modalContentH2 = document.querySelector(".modal-content-detalleCurso h2");
    modalContentH2.style = "display: none;"
    mensajeModal.innerHTML = `Debes <a href="../../pages/login.html">iniciar sesión</a> o <a href="../../pages/registro.html">registrarte</a> para comprar o inscribirte en este curso.`;
    modal.style.display = "flex";
  }
});

// --- MODAL ---
const modal = document.getElementById("modal");
const mensajeModal = document.getElementById("mensajeModal");

const cerrarModal = document.getElementById("cerrarModal");

function mostrarModal(titulo, precio, yaInscripto) {
  if (yaInscripto) {
    mensajeModal.innerHTML = `Ya te habías anotado en <strong>${titulo}</strong>.`;
  } else {
    mensajeModal.innerHTML = `Te añadio correctamente el curso <strong>${titulo}</strong> por ${precio} a tu carrito de compras.`;
  }
  modal.style.display = "flex";
}

cerrarModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// --- CARRUSEL DE OTROS CURSOS ---

(function () {
  const flechaIzq = document.getElementById('flechita-izq-cursos');
  const flechaDer = document.getElementById('flechita-der-cursos');
  const contenedor = document.querySelector('.otros-cursos-cards');

  if (!contenedor || !flechaIzq || !flechaDer) return;

  function getCards() {
    return Array.from(contenedor.children).filter(el => el.classList && el.classList.contains('card'));
  }

  async function animarYRotarNext() {
    const cards = getCards();
    if (cards.length === 0) return;

    const first = cards[0];

    const ancho = first.getBoundingClientRect().width + parseFloat(getComputedStyle(first).marginRight || 0);

    const anims = cards.map(el => el.animate(
      [{ transform: 'translateX(0px)' }, { transform: `translateX(-${ancho}px)` }],
      { duration: 300, easing: 'ease' }
    ));

    await Promise.all(anims.map(a => a.finished.catch(() => { })));

    contenedor.appendChild(first);
    cards.forEach(el => el.style.transform = '');
  }

  async function animarYRotarPrev() {
    const cards = getCards();
    if (cards.length === 0) return;

    const last = cards[cards.length - 1];
    const first = cards[0];
    const ancho = first.getBoundingClientRect().width + parseFloat(getComputedStyle(first).marginRight || 0);

    contenedor.insertBefore(last, first);

    last.getBoundingClientRect();

    const cardsNow = getCards();
    const anims = cardsNow.map(el => {
      if (el === last) {
        return el.animate(
          [{ transform: `translateX(-${ancho}px)` }, { transform: 'translateX(0px)' }],
          { duration: 0, easing: 'ease' }
        );
      }
    });

    await Promise.all(anims.map(a => a.finished.catch(() => { })));
    getCards().forEach(el => el.style.transform = '');
  }

  flechaDer.addEventListener('click', (e) => {
    e.preventDefault();
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



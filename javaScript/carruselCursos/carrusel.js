import { cursos } from "../../data/cursos.js";
import { calcularDuracionTotal } from "../utils/calcularDuracionTotal.js";

const carrusel = document.querySelector(".carrusel");
const btnPrev = document.querySelector("#flechita-izq-cursos");
const btnNext = document.querySelector("#flechita-der-cursos");

console.log("Carrusel cargado");

function renderCursos() {
  cursos.forEach((curso) => {
    const duracionTotal = calcularDuracionTotal(curso.clases);

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <img src="${curso.imagen}" alt="${curso.nombreCurso}" class="card-img">
            <div class="card-content">
            <div class="card-top">
            <h3 class="card-title">${curso.nombreCurso}</h3>
            <span class="card-duration">${duracionTotal}</span>
            </div>
            <a class="card-description" href="./pages/cursos/detalle_curso.html?name=${curso.id}">Ver detalles</a>
            <div class="card-top">
            <p class="card-price">${curso.precio}</p>
            <button class="btn-comprar" data-id="${curso.id}">Comprar</button>
            </div>
            </div>`;

    const btnComprar = card.querySelector(".btn-comprar");

    btnComprar.addEventListener("click", () => {
      window.location.href = `./pages/inscripcionIndividual/inscripcionIndividual.html?curso=${curso.id}`;
    });
    carrusel.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCursos();

  let scrollPosition = 0;

  const card = carrusel.querySelector(".card");
  const gap = 16;
  const cardWidth = card
    ? Math.round(card.getBoundingClientRect().width + gap)
    : 320;
  const cardsVisibles = 3;

  btnNext.addEventListener("click", () => {
    scrollPosition += cardWidth * cardsVisibles;
    const maxScroll = carrusel.scrollWidth - carrusel.clientWidth;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;
    carrusel.scrollTo({ left: scrollPosition, behavior: "smooth" });
  });

  btnPrev.addEventListener("click", () => {
    scrollPosition -= cardWidth * cardsVisibles;
    if (scrollPosition < 0) scrollPosition = 0;
    carrusel.scrollTo({ left: scrollPosition, behavior: "smooth" });
  });
});

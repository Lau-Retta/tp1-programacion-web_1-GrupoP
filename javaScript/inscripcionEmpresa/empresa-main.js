import { cursos } from "../../data/cursos.js";
import { FormularioEmpresa } from "./formulario-empresa.js";
import { Carrito } from "../carritoCompras/carrito.js";
import { loger } from "../login/loger.js";
// Mostrar info del curso (si existe)
const cursoParam = new URLSearchParams(window.location.search);
const idCurso = cursoParam.get("curso");
const cursoSeleccionado = cursos.find((curso) => curso.id === idCurso) || {};

const tituloCurso = document.querySelector(".titulo");
if (tituloCurso) {
  tituloCurso.innerHTML = `<h2>Curso de ${cursoSeleccionado.nombreCurso}</h2>`;
}
const imagenCurso = document.querySelector(".js-imagenCurso");
if (imagenCurso && cursoSeleccionado.imagen) {
  imagenCurso.src = `../../../${cursoSeleccionado.imagen}`;
}

document.addEventListener("DOMContentLoaded", () => {
  Carrito.actualizarContador();
  const formulario = new FormularioEmpresa(".form__inscripcion", cursoSeleccionado.precio);
});
import { FormularioInscripcion } from "./formularioIncripcion.js";
import { cursos } from '../../data/cursos.js';
import { getParamFromURL }from '../utils/utils.js';
import {Carrito} from '../carritoCompras/carrito.js'
import { loger } from "../login/loger.js";
const loadCursos = (idCurso) => {
    return cursos.map(curso => {
        return `<option class="opcion-cursos" ${curso.id === idCurso ? "selected" : ""} value="${curso.id}">${curso.nombreCurso}</option>`
    }).join("");
}

 const getCursoFromURL = () =>{
    const param = getParamFromURL("curso");
    return param ? cursos.find(curso => curso.id === param) : cursos[0];
 }

const init = () => {
    Carrito.actualizarContador();
    const cursoPreselect = getCursoFromURL();
    const formulario = new FormularioInscripcion(cursoPreselect);
    formulario.render();

    const select = document.getElementById("select-curso");
    const btnConfirm = document.querySelector(".btn-inscribirme");

    select.innerHTML = loadCursos(cursoPreselect.id);
    btnConfirm.disabled = true;
    btnConfirm.classList.add('btn-disabled');

    select.addEventListener("change", (event) => {
        const cursoSelected = event.target.value;
        formulario.cursoSelect = cursos.find(curso => curso.id === cursoSelected);
        formulario.enableBtn();
    });

    btnConfirm.addEventListener("click", () => {
        formulario.saveDatos(formulario);
        window.location.href = "../../pages/inscripcionIndividual/pago.html?type=inscripcion"
    });
}

init();
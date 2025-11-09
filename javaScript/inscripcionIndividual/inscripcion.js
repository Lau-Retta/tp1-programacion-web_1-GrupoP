import { FormularioInscripcion } from "./formularioIncripcion.js";
import { cursos } from '../../data/cursos.js';
import {  }from '../utils/utils.js';

const loadCursos = () => {
    return cursos.map(curso => {
        return `<option class="opcion-cursos" value="${curso.id}">${curso.nombreCurso}</option>`
    }).join("");
}

 const getCursoFromURL = () =>{
    const param = getParamFromURL("curso");
    return param ? cursos.find(curso => curso.id === param) : cursos[0];
 }

const init = () => {
    
    const formulario = new FormularioInscripcion(getCursoFromURL());
    formulario.render();

    const select = document.getElementById("select-curso");
    const btnConfirm = document.querySelector(".btn-inscribirme");

    select.innerHTML = loadCursos();
    btnConfirm.disabled = true;
    btnConfirm.classList.add('btn-disabled');

    select.addEventListener("change", (event) => {
        const cursoSelected = event.target.value;
        formulario.cursoSelect = cursos.find(curso => curso.id === cursoSelected);
        formulario.enableBtn();
    });

    btnConfirm.addEventListener("click", () => {
        formulario.saveDatos(formulario);
        //./pago.html
    });
}

init();
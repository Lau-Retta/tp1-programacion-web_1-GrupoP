import { getParamFromURL } from '../utils/utils.js';
import { cursos } from '../../data/cursos.js';

export class DetalleCurso {

    constructor() {
        this.idCurso = getParamFromURL("name");
        this.cursoData = cursos.find(curso => curso.id === this.idCurso) || cursos[0];
        this.listaCarrusel = cursos.filter(curso => curso.id !== this.idCurso);
    }

    renderHeaderDetalleCurso() {
        const titulo = document.getElementById("titulo");
        const imagen = document.querySelector(".curso-foto");
        const subtitulo = document.querySelector(".subtitulo");
        const precio = document.querySelector(".curso-precio");
        titulo.textContent += this.cursoData.nombreCurso;
        imagen.src = `../../${this.cursoData.imagen}`;
        subtitulo.textContent += this.cursoData.descripcion;
        precio.textContent = this.cursoData.precio;
        this.loadDetalle();
    }

    loadDetalle() {
        const detalleCurso = document.querySelector(".detalle");
        detalleCurso.innerHTML = `
        <ul>
            <liid="js-login"><i class="fa-regular fa-clock"></i> Tiempo de dedicación: ${this.cursoData.totalHoras}hs</li>
            <li><i class="fa-solid fa-check"></i> Requisitos: Secundario completo</li>
        </ul>`
    }

    renderDataProfesor() {
        const detalleProfesor = document.querySelector(".docente-centrado");
        detalleProfesor.innerHTML = `
                <img src="../../${this.cursoData.profesor.imagen}" alt="Foto del Docente" class="docente-foto">
                <div class="docente-info">
                <div class="docente-nombre">Docente: ${this.cursoData.profesor.nombreCompleto}</div>
                <div class="docente-valoracion">${this.cursoData.profesor.valoracion}</div>
                </div>
        `
        const detalleInfoProfesor = document.querySelector(".docente-info");
        this.cursoData.profesor.extractos.forEach(extracto => {
            const extractoDiv = document.createElement("div");
            extractoDiv.classList.add("docente-extracto");
            extractoDiv.textContent = extracto;
            detalleInfoProfesor.appendChild(extractoDiv);
        });

    }

    renderClases() {
        const contenido = document.querySelector(".contenido-section");
        const clases = this.cursoData.clases;
        clases.forEach(clase => {
            contenido.innerHTML += `<div class="contenido-campo">
                        <details class="contenido-details">
                            <summary class="contenido-tipo">Clase ${clases.indexOf(clase) + 1}: ${clase.titulo}</summary>
                            <ul class="contenido-lista">
                            </ul>
                        </details>
                    </div>`;
            const lista = document.querySelectorAll(".contenido-lista")[clases.indexOf(clase)];
            clase.contenido.forEach(contenido => {
                lista.innerHTML +=
                    `<li class="contenido-item-lista">${contenido.titulo}<span
                                        class="contenido-duracion">Duración: ${contenido.duracion}</span></li>
                              `;
            });

        });
    }

    renderCarrusel() {
        const carrusel = document.querySelector(".otros-cursos-cards");
        this.listaCarrusel.forEach(curso => {
            const indice = this.listaCarrusel.indexOf(curso) + 1;
            carrusel.innerHTML += `
             <div class="card" id="card${indice}">
                        <img src="../../${curso.imagen}" alt="Curso ${indice}" class="card-img">
                        <div class="card-content">
                            <div class="card-top">
                                <h3 class="card-title">Curso de ${curso.nombreCurso}</h3>
                                <span class="card-duration">${curso.totalHoras}hs</span>
                            </div>
                            <a class="card-description" href="detalle_curso.html?name=${curso.id}">Ver detalles</a>
                            <div class="card-top">
                                <p class="card-price">${curso.precio}</p>
                                <button type="submit" form="form" class="btn-comprar">Comprar</button>
                            </div>
                        </div>
                    </div>
        `;
        });
       

    }

    render() {
        this.renderHeaderDetalleCurso()
        this.renderDataProfesor();
        this.renderClases();
        this.renderCarrusel();
    }
}
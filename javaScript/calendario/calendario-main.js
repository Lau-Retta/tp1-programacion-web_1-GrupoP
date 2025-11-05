import { Calendario } from './calendario.js';
import { dias } from '../utils/meses.js';
import abrirModal from './modal.js';


export const renderCalendario = (listaDias) => {
    const calendario = document.querySelector(".calendario");

    calendario.innerHTML = "";

    dias.forEach((dia) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const abbr = document.createElement("abbr");
        abbr.textContent = dia.abrr;
        span.textContent = dia.nombre;
        span.appendChild(abbr);
        li.appendChild(span);
        if (dia.nombre === 'Domingo') li.id = 'domingo';
        if (dia.nombre === 'Lunes') li.id = 'lunes';
        li.classList.add("calendario__nombre_dia");
        calendario.appendChild(li);
    });

    listaDias.forEach((dia, i) => {
        const li = document.createElement("li");
        li.classList.add("calendario__dia");

        if (dia.clases) li.classList.add(dia.clases);
        const spanNumberDay = document.createElement("span");
        spanNumberDay.textContent = dia.numeroDia;
        if (dia.diaActual) spanNumberDay.id = "current_day";
        li.appendChild(spanNumberDay);

        if (dia.curso?.link) {
            const a = document.createElement("a");
            a.classList.add("day__fecha-curso");
            a.innerHTML += `<span>${dia.curso.nombreCurso}</span>
          <abbr title="${dia.curso.nombreCurso}">${dia.curso.abbr}</abbr>`
          a.addEventListener("click", () => abrirModal(dia.curso));
            li.appendChild(a);
        }
        // si querés mantener lo de las esquinas
        if (i === 28) li.id = "calendario__esquina--inferioro-izq";
        if (i === 34) li.id = "calendario__esquina--inferioro-der";

        calendario.appendChild(li);
    });
}

const calendario = new Calendario();
calendario.init();
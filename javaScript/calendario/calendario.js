import { meses } from '../utils/meses.js';
import { dias } from '../utils/meses.js';
import { Modal } from '../utils/modal.js';
import { DiaCalendario } from './dia-calendario.js';
import { cursosDelCalendario } from '../../data/cursos-calendario.js';

const CANTIDAD_DIAS_DEL_CALENDARIO = 35;

export class Calendario {

    constructor(fecha = new Date()) {
        this.hoy = fecha;
        this.listaDias = [];
        this.cursoSelected = {};
    }


    setTitulo() {
        const mes = this.hoy.getMonth();
        const subtitle = document.querySelector(".h3__titulo");
        const nombreMes = meses.find(m => m.num === mes + 1)?.nomber ?? '';
        subtitle.textContent = `${nombreMes} ${this.hoy.getFullYear()}`;
    }

    obtenerUltimoDiaDelMes(año, mes) {
        return new Date(año, mes + 1, 0).getDate();
    }

    generarDias() {
        const año = this.hoy.getFullYear();
        const mes = this.hoy.getMonth();
        const primerDia = new Date(año, mes, 1);
        const ultimoDia = this.obtenerUltimoDiaDelMes(año, mes);
        const diferenciaDias = CANTIDAD_DIAS_DEL_CALENDARIO - ultimoDia;

        const diasAnteriores = Math.abs(primerDia.getDay() - 1);
        const diasPosteriores = diferenciaDias - diasAnteriores;

        this.agregarDias(mes - 1, diasAnteriores, "calendario__dia-out");
        this.agregarDias(mes, ultimoDia, "", true);
        this.agregarDias(mes + 1, diasPosteriores, "calendario__dia-out");
    }

    agregarDias(mes, cantidad, clase, esMesActual = false) {
        const año = this.hoy.getFullYear();
        const ultimoDiaMes = this.obtenerUltimoDiaDelMes(año, mes);

        for (let i = 1; i <= cantidad; i++) {
            const diaNumero = esMesActual ? i : ultimoDiaMes - cantidad + i;
            const diaActual = esMesActual && i === this.hoy.getDate();

            const dia = new DiaCalendario(diaNumero, diaActual, clase);
            if (esMesActual) {
                const curso = cursosDelCalendario.find(c => c.diaDeCursada === i);
                if (curso) dia.curso = curso;
            }
            this.listaDias.push(dia);
        }
    }

    async buildModal(curso) {
        const data = { 
            titulo: ` Inscribete a ${curso.nombreCurso}`, 
            descripcion: curso.descripcion, 
            btnTitle:"Ver más!" 
        };
        const modal = new Modal("modal",data);
        const fueConfirmado = await modal.openModal();

        if (fueConfirmado) {
            window.location.href = this.cursoSelected;
        }
    }

    renderCalendario(listaDias) {
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
                a.addEventListener("click", (event) => {
                    event.preventDefault();
                    this.cursoSelected = dia.curso.link;
                    this.buildModal(dia.curso);
                }
                );
                li.appendChild(a);
            }
            if (i === 28) li.id = "calendario__esquina--inferioro-izq";
            if (i === 34) li.id = "calendario__esquina--inferioro-der";
            calendario.appendChild(li);
        });
    }

    init() {
        this.setTitulo();
        this.generarDias();
        this.renderCalendario(this.listaDias);
    }

}

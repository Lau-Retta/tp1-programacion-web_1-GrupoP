import { meses } from '../utils/meses.js';
import { DiaCalendario } from './dia-calendario.js';
import { cursosDelCalendario } from '../utils/cursos-calendario.js';
import { renderCalendario } from './calendario-main.js';

const CANTIDAD_DIAS_DEL_CALENDARIO = 35;

export class Calendario {

    constructor(fecha = new Date()) {
        this.hoy = fecha;
        this.listaDias = [];
    }


    init() {
        this.setTitulo();
        this.generarDias();
        renderCalendario(this.listaDias);
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
}



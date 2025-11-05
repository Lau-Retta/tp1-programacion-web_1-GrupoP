export class DiaCalendario {
    #numeroDia = 0;
    #diaActual = false;
    #clases = "";
    #curso = {
        diaDeCursada: 0,
        nombreCurso: "",
        descripcion: "",
        abbr: "",
        link: ""
    };

    constructor(numeroDia, diaActual, clases) {
        this.#numeroDia = numeroDia;
        this.#diaActual = diaActual;
        this.#clases = clases;
    }

    get clases() {
        return this.#clases;
    }

    set agregarClases(clases) {
        this.#clases += clases;
    }


    get numeroDia() {
        return this.#numeroDia;
    }

    get diaActual() {
        return this.#diaActual;
    }

    get curso() {
        return this.#curso;
    }

    set curso(curso) {
        this.#curso = curso;
    }
}


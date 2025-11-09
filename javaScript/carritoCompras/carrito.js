import { cursos } from "../../data/cursos.js";
import { getItemOfStorage, setItemInStorage } from "../utils/localStorage.js";

export class Carrito {

    constructor() {
        this.currentUser = getItemOfStorage("currentUser");
        this.cursosDelUsuario = this.currentUser.carrito ?? [];
        this.totalPrecio = 0;

        this.itemCarritoVacio = document.querySelector(".js-item-curso-vacio");
        this.listaDeCursos = document.querySelector(".section__cursos");
        this.totalPrecioEl = document.querySelector(".pago__precio");
        
    }

    getCursosUsuario() {
        return this.cursosDelUsuario.map(id => cursos.find(c => c.id === id));
    }

    guardarDatosInUsuarioActual() {
        setItemInStorage("currentUser", this.currentUser);
    }

    removerCurso(idCurso) {
        this.currentUser.carrito = this.currentUser.carrito.filter(id => id !== idCurso);
        this.guardarDatosInUsuarioActual();
        this.cursosDelUsuario = this.currentUser.carrito;
        this.toggleCarritoVacio();
    }

    convertirPrecio(curso) {
        return parseInt(curso.precio.replace("$", "").replace(".", ""));
    }


    static actualizarContador() {
        const contadorCarrito = document.getElementById("cursos_en_carrito");
        const currentUser = getItemOfStorage("currentUser");
        const cursosDelUsuario = currentUser.carrito ?? [];
        const total = cursosDelUsuario.length;
        contadorCarrito.textContent = total;
    }

    actualizarPrecioTotal() {
        this.totalPrecioEl.textContent = `$${this.totalPrecio.toLocaleString("es-ES")}`;
    }

    toggleCarritoVacio() {
        this.itemCarritoVacio.style.display = this.cursosDelUsuario.length > 0 ? "none" : "grid";
    }

    quitarCurso(curso, div) {
        this.listaDeCursos.removeChild(div);
        this.removerCurso(curso.id);
        this.totalPrecio -= this.convertirPrecio(curso);
        this.actualizarPrecioTotal();
        Carrito.actualizarContador();
        this.toggleCarritoVacio();
    }


    renderContenedorCarrito(curso) {
        const div = document.createElement("div");
        div.classList.add("cursos__contenedor");
        div.innerHTML = `<img src="../../${curso.imagen}" alt="${curso.nombreCurso}" class="curso__img">`;
        return div
    }

    renderInfoCurso(curso) {
        const infoCurso = document.createElement("div");
        infoCurso.classList.add("curso__info");
        infoCurso.innerHTML =
            `
            <div class="curso__titular">
                    <p class="curso__nombre">${curso.nombreCurso}</p>
                    <p class="curso__profesor">Profesor:${curso.profesor.nombreCompleto}</p>
                </div>
                <p class="curso__precio">${curso.precio}</p>
                <div class="curso__info--detalle">
                    <p class="curso__duracion">${curso.totalHoras}hs</p>
                    <p class="curso__clases">${curso.clases.length} clases</p>
                    <p class="curso__nivel">Nivel ${curso.nivel}</p>
                </div>
            `
        return infoCurso;
    }

    renderBtnQuitar(curso, div) {
        const btnQuitarCurso = document.createElement("a");
        btnQuitarCurso.classList.add("carrito__boton", "carrito__boton--secundario");
        btnQuitarCurso.innerHTML = "Quitar";
        btnQuitarCurso.setAttribute("href", "#");
        btnQuitarCurso.addEventListener("click", () => {
            this.quitarCurso(curso, div);

        });
        return btnQuitarCurso;
    }

    crearItemCurso(curso) {
        const div = this.renderContenedorCarrito(curso);
        const infoCurso = this.renderInfoCurso(curso);
        const btnQuitarCurso = this.renderBtnQuitar(curso, div);
        infoCurso.appendChild(btnQuitarCurso);
        div.appendChild(infoCurso);
        return div;
    }

    render() {
        this.toggleCarritoVacio();
        Carrito.actualizarContador();

        const cursosData = this.getCursosUsuario();
        cursosData.forEach(curso => {
            this.totalPrecio += this.convertirPrecio(curso);
            this.listaDeCursos.appendChild(this.crearItemCurso(curso));
        });

        this.actualizarPrecioTotal();
    }

}

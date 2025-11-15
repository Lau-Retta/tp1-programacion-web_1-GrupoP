import { getItemSesionStorage, setItemSesionStorage, getItemOfStorage } from "../utils/localStorage.js";
import { Carrito } from "../carritoCompras/carrito.js";
import { Modal } from "../utils/modal.js";
export class Loger {

    constructor() {
        this.userLoged = getItemSesionStorage("currentUser") || {};
        this.btnLog = document.getElementById("js-login");
        this.isLoged = Object.keys(this.userLoged).length > 0;
        this.modalLogout = null;
    }

    async createModal() {
        const data = {
            titulo: "Cerrar sesión",
            descripcion: "¿Desea cerrar sesión?",
            btnTitle: "Cerrar sesión"
        }
        this.modalLogout = new Modal("modal-logout", data);
        const fueConfirmado = await this.modalLogout.openModal();
        if (fueConfirmado) {
            this.logout();
        }
    }

    toogleStateIconUser() {
        const iconoCarrito = document.getElementById("js-carrito");
        let bntContent = "";
        if (this.getIsLoged()) {
            bntContent = `<i class="fa-solid fa-right-from-bracket"></i>`;
            this.btnLog.classList.remove("login");
            iconoCarrito.style.display = "inline-block";
        } else {
            bntContent = 'iniciar sesión';
            this.btnLog.classList.add("login");
            iconoCarrito.style.display = "none";
        }
        this.btnLog.innerHTML = bntContent;
        Carrito.actualizarContador();
    }

    logout() {
        this.userLoged = {};
        this.isLoged = false;
        setItemSesionStorage("currentUser", this.userLoged);
        this.toogleStateIconUser();
        Carrito.actualizarContador();
    }

    onClickLog() {
        if (this.isLoged) {
            this.createModal();
        } else {
            window.location.href = '/pages/login.html';
        }
    }

    getIsLoged() {
        return this.isLoged = Object.keys(this.userLoged).length > 0;
    }

    init() {
        this.toogleStateIconUser();
        this.btnLog.addEventListener("click", (event) => {
            event.preventDefault();
            this.onClickLog();
        });
    }
}

export const loger = new Loger();
loger.init(); 

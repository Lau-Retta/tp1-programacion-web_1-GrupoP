import { getItemSesionStorage, setItemSesionStorage } from "../utils/localStorage.js";
import { Carrito } from "../carritoCompras/carrito.js";
import { Modal } from "../utils/modal.js";
export class Loger {

    constructor() {
        this.userLoged = getItemSesionStorage("currentUser") || {};
        this.iconUser = document.querySelector(".fa-user");
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
        this.iconUser.classList.remove('fa-regular');
        this.iconUser.classList.remove('fa-solid');

        const state = this.isLoged ? 'fa-solid' : 'fa-regular';
        this.iconUser.classList.add(state);
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
        return this.isLoged;
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
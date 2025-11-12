export class Modal {

    constructor(id, data) {
        this.data = data;
        this.id = id;
        this.modal = null;
        this.resolvePromise = null; // Para guardar la función de resolución de la promesa
        this.#creatModal();
        this.#render();
    }


    #creatModal() { // Correctamente declarado como privado
        if (!this.data) return;
        const modal = document.createElement("dialog");
        modal.id = this.id;
        modal.classList.add("modal");
        modal.innerHTML = `
        <div class="modal-header">
                    <span ></span>
                </div>
                <div class="modal-body">
                    <div class="modal-content">
                    </div>
                    <div class="modal-footer">
                        <button class="button btn-danger js-modal-close">Cerrar</button>
                        <button class="button js-modal-confirm">${this.data.btnTitle}</button>
                    </div>
                </div>
        `;
        document.body.appendChild(modal);
        this.modal = document.getElementById(this.id);
        this.#loadContentModal();
    }

    #loadContentModal() {
        const { titulo, descripcion } = this.data;
        const modalContenido = document.querySelector(".modal-content");
        modalContenido.innerHTML = `<h2 class="modal-titulo">${titulo}</h2><hr><p class="modal-descripcion">${descripcion}</p>`
    }

    #render() {
        const btnClose = document.querySelector(".js-modal-close");
        const btnConfirm = document.querySelector(".js-modal-confirm");

        btnConfirm?.addEventListener('click', () => {
            this.closeModal();
            if (this.resolvePromise) this.resolvePromise(true);
        });

        btnClose?.addEventListener('click', () => {
            this.closeModal();
            if (this.resolvePromise) this.resolvePromise(false); 
        });
    }


    closeModal() {
        this.modal.classList.remove("modal--flex");
        this.modal.close();
    }

    openModal() {
        return new Promise(resolve => {
            this.resolvePromise = resolve;
            this.#loadContentModal();
            this.modal.classList.add("modal--flex");
            this.modal.showModal();
        });
    }

}
export class Modal {

    constructor(id) {

        this.id = id;
        this.modalContenido = document.querySelector(".modal-content");
        this.modal = document.getElementById(this.id);
    }

    loadContentModal(data) {
        const { titulo, descripcion } = data;
        this.modalContenido.innerHTML += `<h2 class="modal-titulo">${titulo}</h2><hr><p class="modal-descripcion">${descripcion}</p>`
    }

    closeModal() {
        this.modal.classList.remove("modal--flex");
        this.modalContenido.innerHTML = '';
        this.modal.close();
    }

    openModal() {
        this.modal.classList.add("modal--flex");
        this.modal.showModal();
    }

    render(data) {

        const btnClose = document.querySelector(".js-modal-close");
        const btnOpen = document.getElementById("js-modal-open");
        if (data) this.loadContentModal(data);

        if (btnOpen) {
            btnOpen.addEventListener('click', () => {
                this.openModal();
            });
        }

        btnClose.addEventListener('click', () => {
            this.closeModal();
        });
    }


}
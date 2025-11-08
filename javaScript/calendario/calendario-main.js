import { Calendario } from './calendario.js';

const init = () => {
    const btnConfirm = document.querySelector(".btn-confirm");
    const calendario = new Calendario();
    calendario.init();

    btnConfirm.addEventListener("click", () => {
        window.location.href = calendario.cursoSelected;
    });

}

init();

const modal = document.getElementById("miModal");
const modalContenido = document.querySelector(".modal-contenido");
const btnCerrar = document.querySelector(".cerrar");

export default function abrirModal(datosCurso) {
    if (datosCurso.nombreCurso) {
        modal.style.display = "flex";
        modalContenido.innerHTML += `<h2 class="modal-titulo">${datosCurso.nombreCurso}</h2><hr><p class="modal-descripcion">${datosCurso.descripcion}</p>`
        const btn = document.createElement('button');
        btn.textContent = '¡Inscribirse!';
        btn.classList.add('button');
        btn.addEventListener('click', () => {
            window.location.href = datosCurso.link;
        });
        modalContenido.appendChild(btn);
    }
}


btnCerrar.onclick = function () {
    modal.style.display = "none";
    modalContenido.innerHTML = '<span class="cerrar">&times;</span>';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalContenido.innerHTML = '<span class="cerrar">&times;</span>';
    }
}


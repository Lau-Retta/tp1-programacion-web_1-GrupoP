import { User } from "./login/user.js";

const init = () => {
    User.initUsers();
    const btnIncriptionIA = document.querySelector(".cabecera__btn");
    btnIncriptionIA.addEventListener("click", () => {
        window.location.href = "./pages/inscripcionIndividual/inscripcionIndividual.html?curso=curso-ia"
    })
}

init();
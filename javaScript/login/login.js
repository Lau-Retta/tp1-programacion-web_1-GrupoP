import { Carrito } from "../carritoCompras/carrito.js";
import { setItemSesionStorage } from "../utils/localStorage.js";
import { ValidacionLogin } from "../utils/validacionLogin.js";
import { loger } from "./loger.js";

const formLogin = document.querySelector('.form-login');
const inputUser = document.querySelector('#user');
const inputPassword = document.querySelector('#contraseña');
const msjLogin = document.querySelector('.msj-login');
const btnLogin = document.querySelector('.btn-login');

Carrito.actualizarContador();

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = inputUser.value.trim();
    const password = inputPassword.value.trim();

    if(!user || !password){
        mostrarMensaje('Por favor, complete todos los campos', 'error');
        return;
    }

    const validacionLogin = new ValidacionLogin(user, password);

    const userExist = validacionLogin.validateUser();

    if(!!userExist){
        setItemSesionStorage('currentUser', userExist);
        window.location.href = "../../index.html";
    }else{
        mostrarMensaje('Usuario o contraseña incorrectos', 'error');
    }
});

function mostrarMensaje(mensaje, tipo){
    msjLogin.textContent = mensaje;
    msjLogin.className = `msj-login ${tipo}`
}

import { setItemInStorage, getItemOfStorage, getItemSesionStorage, setItemSesionStorage } from '../utils/localStorage.js';
import {users} from '../../data/users.js'
export class User {
    constructor(email, password, name, lastName, userName) {
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.curos = [];
        this.carrito = [];
    }

    get addCuros() {
        return this.curos;
    }

    set addCuros(value) {
        this.curos.push(value);
    }

    set removeCursos(value) {
        const cursosFiltrados = this.curos.filter(curso => curso !== value);
        this.curos(cursosFiltrados);
    }

    static initUsers() {
        if(!getItemOfStorage("users")){
             setItemInStorage("users", users);
        }
        if (!getItemSesionStorage("currentUser")) {
            setItemSesionStorage("currentUser", {});
        } 
    }

}
import { getItemOfStorage, getItemSesionStorage, setItemSesionStorage } from '../utils/localStorage.js';
export class User {
    constructor(email, password, name, lastName, userName) {
        this.id = this.#generateId();
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.cursos = [];
        this.carrito = [];
    }

    get addCuros() {
        return this.curos;
    }

    set addCuros(value) {
        this.cursos.push(value);
    }

    set removeCursos(value) {
        const cursosFiltrados = this.curos.filter(curso => curso !== value);
        this.cursos(cursosFiltrados);
    }

    static initUsers() {
        if (!getItemSesionStorage("currentUser")) {
            setItemSesionStorage("currentUser", {});
        } 
    }

    #generateId(){
        const totalUsers = getItemOfStorage("users");
        return totalUsers? totalUsers.length + 1 : 1;
    }

}
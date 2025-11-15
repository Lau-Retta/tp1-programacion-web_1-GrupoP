import { getItemOfStorage, getItemSesionStorage, setItemSesionStorage, setItemInStorage } from '../utils/localStorage.js';
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

    static initUsers() {
        if (!getItemSesionStorage("currentUser")) {
            setItemSesionStorage("currentUser", {});
        }
    }

    #generateId() {
        const totalUsers = getItemOfStorage("users");
        return totalUsers ? totalUsers.length + 1 : 1;
    }

}

export function getDataOfCurrentUser() {
    const currentUser = getItemSesionStorage("currentUser");
    if (!currentUser) {
        return null;
    }
    const dataUser = getItemOfStorage("users").find(user => user.id === currentUser.id);
    return dataUser;

}

export function saveDataUserInStorage(data) {
    const currentUser = getItemSesionStorage("currentUser");
    let users = getItemOfStorage('users')
    users = users.map(user => user.id === currentUser.id ? data : user);
    setItemInStorage('users', users);
}
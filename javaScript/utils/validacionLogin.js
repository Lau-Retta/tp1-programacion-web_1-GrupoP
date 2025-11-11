import { getItemOfStorage } from "./localStorage.js";

export class ValidacionLogin{
    #user;
    #password;

    constructor(user, password){
        this.#user = user;
        this.#password = password
    }

    validateUser(){
        const users = getItemOfStorage('users') || [];
        const userFound = users.find((u) => u.userName === this.#user && u.password === this.#password);
        return userFound;
    }
}
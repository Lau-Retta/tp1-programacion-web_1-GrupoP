import { validateEmail, validateString, PasswordValidator } from "../utils/validator.js";
import { getItemOfStorage, setItemInStorage } from "../utils/localStorage.js";
import { User } from './user.js'
import { loger } from "../javaScript/login/loger.js";
export class Registro {
    #password

    constructor() {
        this.email = "";
        this.name = "";
        this.lastName = "";
        this.username = "";
        this.#password = "";
        this.btnRegistrar = null;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        this.#password = value;
    }


    getElementName(name) {
        return document.getElementsByName(`${name}`)[0]
    }

    loadData(element, property, value) {
        element.classList.contains('error_value') ? element.classList.remove('error_value') : '';
        this[property] = value;
        this.enableBtn();
    }

    enableBtn() {
        const allValid = this.email && this.name && this.lastName && this.username && this.password;
        this.btnRegistrar.disabled = !allValid;
        this.btnRegistrar.classList.toggle('btn-disabled', !allValid);
    }

    blockBntByError(element) {
        element.classList.add('error_value');
        this.btnRegistrar.disabled = true;
        this.btnRegistrar.classList.add('btn-disabled');
    }


    validateData(element, property, validator) {
        let value;
        element.addEventListener("keyup", (event) => {
            value = event.target.value;
            if (validator) {
                if (property === "password") {
                    if (value && !validator.validatePassword(value)) {
                        this.blockBntByError(element, value);
                        return;

                    }
                    this.loadData(element, property, value);
                } else if (value && !validator(value)) {
                    this.blockBntByError(element, value);
                    return;
                }
                this.loadData(element, property, value);

            }
        });
    }

    validateUserExist() {
        const usersLocalStorage = getItemOfStorage("users") || [];
        const userExists = usersLocalStorage.some(
            user => user.email === this.email || user.username === this.username
        );
        return userExists;
    }


    saveUser() {
        const user = new User(this.email, this.password, this.name, this.lastName, this.username);
        const usersLocaStorage = getItemOfStorage("users") || [];
        usersLocaStorage.push(user);
        setItemInStorage("users", usersLocaStorage);
    }


    render() {
        const nameInput = this.getElementName("nombre");
        const lastNameInput = this.getElementName("apellido");
        const emailInput = this.getElementName("email");
        const username = this.getElementName("usuario");
        const passwordInput = this.getElementName("contraseña");
        const passwordValidator = new PasswordValidator(null, 8, 1, null, 1, 1);

        this.btnRegistrar = document.querySelector(".btn-registro");
        this.btnRegistrar.disabled = true;
        this.btnRegistrar.classList.add('btn-disabled');
        this.validateData(emailInput, "email", validateEmail);
        this.validateData(nameInput, "name", validateString);
        this.validateData(lastNameInput, "lastName", validateString);
        this.validateData(username, "username", validateString);
        this.validateData(passwordInput, "password", passwordValidator);


        this.btnRegistrar.addEventListener("click", (event) => {
            event.preventDefault();
            if (this.validateUserExist()) {
                alert("Ya existe un usuario con los datos ingresados.");
                return;
            }
            this.saveUser()
            window.location.href = "./login.html";
        })
    }
}

const registro = new Registro();
registro.render();
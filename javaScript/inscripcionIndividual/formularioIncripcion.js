
import { setItemSesionStorage } from '../utils/localStorage.js';
import { validateString,validatePhone,validateDNI } from '../utils/validator.js';

export class FormularioInscripcion {

    constructor(cursoSelect) {
        this.nombre = ''
        this.apellido = ''
        this.dni = '';
        this.telefono = '';
        this.cursoSelect = cursoSelect;
        this.btnConfirm = document.querySelector(".btn-inscribirme");
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
        const allValid = this.nombre && this.apellido && this.dni && this.telefono && this.cursoSelect;
        this.btnConfirm.disabled = !allValid;
        this.btnConfirm.classList.toggle('btn-disabled', !allValid);
    }

    blockBntByError(element) {
        element.classList.add('error_value');
        this.btnConfirm.disabled = true;
        this.btnConfirm.classList.add('btn-disabled');
    }


    validateData(element, property, validator) {
        let value;
        element.addEventListener("keyup", (event) => {
            value = event.target.value;
            if (validator) {
               if (value && !validator(value)) {
                    this.blockBntByError(element, value);
                    return;
                }
                this.loadData(element, property, value);
            }
        });
    }


    saveDatos(data){
       setItemSesionStorage("formInscripcion",data);
    }


    render() {
        const nameInput = this.getElementName("nombre");
        const lastNameInput = this.getElementName("apellido");
        const documentInput = this.getElementName("dni");
        const phoneInput = this.getElementName("telefono");

        this.validateData(nameInput, "nombre", validateString);
        this.validateData(lastNameInput, "apellido", validateString);
        this.validateData(documentInput, "dni", validateDNI);
        this.validateData(phoneInput, "telefono", validatePhone);
           
    }
}
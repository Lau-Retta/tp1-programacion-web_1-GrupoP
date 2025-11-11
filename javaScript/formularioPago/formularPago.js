import { getItemSesionStorage, removeItemSesionStorage, setItemSesionStorage } from '../utils/localStorage.js';
import { getFirstElementName } from '../utils/utils.js';
import { validateEmail, validateString, validateNumber, validateNotNullOrUndifined } from '../utils/validator.js';
import { Popup } from '../utils/popup.js';

export class FormularioPago {

    constructor() {
        this.emailDestinatario = getFirstElementName("mail_destinatario");
        this.medioPagoTarjeta = document.getElementById("tarjeta");
        this.medioPagoQR = document.getElementById("mp");
        this.numeroTarjeta = getFirstElementName("numeracion_tarjeta");
        this.codigoSeguridadTarjeta = getFirstElementName("codigo_tarjeta");
        this.vtoTarjeta = getFirstElementName("vto_tarjeta");
        this.nombreTitularTarjeta = getFirstElementName("nombre_titular_tarjeta");
        this.apellidoTitularTarjeta = getFirstElementName("apellido_titular_tarjeta");
        this.btnConfirm = document.getElementById("js-btn_confirmar_pago");
    }

    blockBntByError(element) {
        element.classList.add('error_value');
        this.btnConfirm.disabled = true;
        this.btnConfirm.classList.add('btn-disabled');
    }

    loadData(element, property, value) {
        element.classList.contains('error_value') ? element.classList.remove('error_value') : '';
        this[property] = value;
        this.onChangeOptionMedioPago();
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

    enableBtn() {
        const ALL_PROPERTIES = ['emailDestinatario', 'nombreTitularTarjeta', 'apellidoTitularTarjeta', 'numeroTarjeta', 'vtoTarjeta', 'codigoSeguridadTarjeta'];
        let allValid = null;

        ALL_PROPERTIES.forEach((property) => {
            if (!validateNotNullOrUndifined(allValid)) {
                allValid = !!this[property].value;
            } else {
                allValid = allValid && !!this[property].value;
            }
        });

        this.btnConfirm.disabled = !allValid;
        this.btnConfirm.classList.toggle('btn-disabled', !allValid);
    }

    validatorNumeroTarjeta(value) {
        const MAX_LENGTH = 16;
        const valueToValidate = value.replace(/\s/g, '');
        this.numeroTarjeta.value = this.#formatearTelefono(value);
        return validateNumber(valueToValidate) && valueToValidate.length === MAX_LENGTH;
    }

    #formatearTelefono(value) {

        if (value.length == 4) {
            value = value.slice(0, 4) + " " + value.slice(4);
        } else if (value.length == 9) {
            value = value.slice(0, 9) + " " + value.slice(9);
        } else if (value.length == 14) {
            value = value.slice(0, 14) + " " + value.slice(14);
        } else if (value.length == 19) {
            value = value.slice(0, 19);
        }

        return value;
    }

    validateCodSeguridad(value) {
        const MAX_LENGTH = 3;
        return validateNumber(value) && value.length === MAX_LENGTH;
    }

    validatorFechaVencimiento(value) {
        const CURRENT_YEAR = new Date().getFullYear().toString().slice(2);
        const CURRENT_MONTH = new Date().getMonth() + 1;
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        let isValidYear = false;
        let isValidMonth = false;
        if(value.length === 5){
            const [month, year] = value.split('/');
            isValidMonth = month >= CURRENT_MONTH;
            isValidYear = year >= CURRENT_YEAR;
        }
        return regex.test(value) && isValidMonth && isValidYear;
    }

    getEmailByCurrentUser() {
        const emailUser = getItemSesionStorage('currentUser').email;
        if (emailUser) this.emailDestinatario.value = emailUser;
    }

    onChangeOptionMedioPago() {
        if (this.medioPagoQR.checked) {
            this.btnConfirm.disabled = false;
            this.btnConfirm.classList.remove('btn-disabled');
        } else if (this.medioPagoTarjeta.checked)
            this.enableBtn();
        else {
            this.btnConfirm.disabled = true;
            this.btnConfirm.classList.add('btn-disabled');
        }
    }

    confirmarPago() {
        if (!this.btnConfirm.disabled) {
            const popup = new Popup("Procesando pago... <br>", "", true);
            popup.mostrar();

            setTimeout(() => {
                popup.remove();
                const currentUser = getItemSesionStorage('currentUser');
                currentUser.carrito = [];
                removeItemSesionStorage('formInscripcion');
                setItemSesionStorage('currentUser', currentUser);
                window.location.href = '../../pages/inscripcionIndividual/confirmacion_pago.html'
            }, 2000)
        }
    }

    render() {
        this.getEmailByCurrentUser();
        this.validateData(this.emailDestinatario, "mail_destinatario", validateEmail);
        this.validateData(this.nombreTitularTarjeta, "nombre_titular_tarjeta", validateString);
        this.validateData(this.apellidoTitularTarjeta, "apellido_titular_tarjeta", validateString);
        this.validateData(this.numeroTarjeta, "numero_tarjeta", this.validatorNumeroTarjeta.bind(this));
        this.validateData(this.vtoTarjeta, "vto_tarjeta", this.validatorFechaVencimiento.bind(this));
        this.validateData(this.codigoSeguridadTarjeta, "codigo_tarjeta", this.validateCodSeguridad.bind(this));
        this.enableBtn();

        this.medioPagoQR.addEventListener("change", this.onChangeOptionMedioPago.bind(this));

        this.medioPagoTarjeta.addEventListener("change", this.onChangeOptionMedioPago.bind(this));

        this.btnConfirm.addEventListener("click", this.confirmarPago.bind(this));

    }

}
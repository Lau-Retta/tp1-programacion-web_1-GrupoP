import { getItemOfStorage, getItemSesionStorage, removeItemSesionStorage, setItemInStorage, setItemSesionStorage } from '../utils/localStorage.js';
import { getFirstElementName } from '../utils/utils.js';
import { validateEmail, validateString, validateNumber, validateNotNullOrUndifined } from '../utils/validator.js';
import { Popup } from '../utils/popup.js';
import { getParamFromURL } from '../utils/utils.js';
 
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
        this.typePago = getParamFromURL("type");
        this.AllDataInput =  [{prop:'emailDestinatario' , valid: false}, {prop:'nombreTitularTarjeta',valid:false}, {prop:'apellidoTitularTarjeta',valid:false},{prop:'numeroTarjeta',valid:false}, {prop:'vtoTarjeta',valid:false}, {prop:'codigoSeguridadTarjeta',valid:false}];
    }
 
    blockBntByError(element) {
        element.classList.add('error_value');
        this.btnConfirm.disabled = true;
        this.btnConfirm.classList.add('btn-disabled');
    }
 
    loadData(element, property, value) {
        element.classList.contains('error_value') ? element.classList.remove('error_value') : '';
        this.updateStateValid(property, value!=='');
        this.onChangeOptionMedioPago();
    }
 
    validateData(element, property, validator) {
        let value;
        element.addEventListener("keyup", (event) => {
            value = event.target.value;
            if (validator) {
                if (value && !validator(value)) {
                    this.blockBntByError(element, value);
                    this.updateStateValid(property , false);
                    return;
                }
                this.loadData(element, property, value);
            }
        });
    }
 
    updateStateValid(element, state){
        this.AllDataInput = this.AllDataInput.map((p)=>{
            if(p.prop === element){
                p.valid = state;
            }
            return p;
        });
    }
 
    enableBtn() {
        let allValid = null;
       
        this.AllDataInput.forEach((property) => {
            if (!validateNotNullOrUndifined(allValid)) {
                allValid = !!this[property.prop].value && property.valid;
            } else {
                allValid = allValid && !!this[property.prop].value && property.valid;
            }
        });
 
        this.btnConfirm.disabled = !allValid;
        this.btnConfirm.classList.toggle('btn-disabled', !allValid);
    }
 
    enableBtnForQR() {
        const emailValue = this.emailDestinatario.value;
        if (validateNotNullOrUndifined(emailValue) && this.medioPagoQR.checked) {
            this.btnConfirm.disabled = !validateEmail(emailValue);
            this.btnConfirm.classList.toggle('btn-disabled', !validateEmail(emailValue));
        }
    }
 
    validatorNumeroTarjeta(value) {
        const MAX_LENGTH = 16;
        const valueToValidate = value.replace(/\s/g, '');
        this.numeroTarjeta.value = this.#formatearNumeroDeTarjeta(value);
        return validateNumber(valueToValidate) && valueToValidate.length === MAX_LENGTH;
    }
 
    #formatearNumeroDeTarjeta(value) {
 
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
 
        if (value.length === 2) {
            value = value.slice(0, 2) + "/" + value.slice(2)
        }
        this.vtoTarjeta.value = value;
        if (value.length === 5) {
            const [month, year] = value.split('/');
            if (parseInt(year) == parseInt(CURRENT_YEAR)) {
                isValidMonth = parseInt(month) >= CURRENT_MONTH;
            } else {
                isValidMonth = true;
            }
            isValidYear = parseInt(year) >= parseInt(CURRENT_YEAR);
        }
        return regex.test(value) && isValidMonth && isValidYear;
    }
 
    getEmailByCurrentUser() {
        const emailUser = getItemSesionStorage('currentUser').email;
        if (emailUser) this.emailDestinatario.value = emailUser;
    }
 
    onChangeOptionMedioPago() {
        if (this.medioPagoQR.checked) {
            this.enableBtnForQR();
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
                this.#actualizarCursosComprado();
            }, 2000)
        }
    }
 
    #actualizarCursosComprado() {
        const currentUser = getItemSesionStorage('currentUser');
        let users = getItemOfStorage('users')
        const dataUserToUpdate = users.find(user => user.email === currentUser.email && user.id === currentUser.id);
 
       try{
         if (validateNotNullOrUndifined(this.typePago)) {
            const cursoAdquirido = getItemSesionStorage('formInscripcion').cursoSelect?.id;
            dataUserToUpdate.cursos.push(cursoAdquirido);
            removeItemSesionStorage('formInscripcion');
        } else {
            currentUser.carrito.forEach(curso => {
                dataUserToUpdate.cursos.push(curso);
            })
            dataUserToUpdate.carrito = [];
            currentUser.carrito = [];
            setItemSesionStorage('currentUser', currentUser);
        }
 
        users = users.map(user => user.id === currentUser.id ? dataUserToUpdate : user);
 
        setItemInStorage('users', users);
 
        window.location.href = '../../pages/inscripcionIndividual/confirmacion_pago.html'
       }catch(error){
            console.lerror(error);
            const popup = new Popup("Error al realizar el pago de tu compra. Por favor intenta nuevamente.<br>", "");
            popup.mostrar();
       }
    }
 
    render() {
        this.getEmailByCurrentUser();
        this.validateData(this.emailDestinatario, "emailDestinatario", validateEmail);
        this.validateData(this.nombreTitularTarjeta, "nombreTitularTarjeta", validateString);
        this.validateData(this.apellidoTitularTarjeta, "apellidoTitularTarjeta", validateString);
        this.validateData(this.numeroTarjeta, "numeroTarjeta", this.validatorNumeroTarjeta.bind(this));
        this.validateData(this.vtoTarjeta, "vtoTarjeta", this.validatorFechaVencimiento.bind(this));
        this.validateData(this.codigoSeguridadTarjeta, "codigoSeguridadTarjeta", this.validateCodSeguridad.bind(this));
        this.enableBtn();
 
        this.medioPagoQR.addEventListener("change", this.onChangeOptionMedioPago.bind(this));
 
        this.medioPagoTarjeta.addEventListener("change", this.onChangeOptionMedioPago.bind(this));
 
        this.btnConfirm.addEventListener("click", this.confirmarPago.bind(this));
 
    }
 
}
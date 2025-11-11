import { getItemOfStorage, setItemInStorage } from '../utils/localStorage.js';
import { getFirstElementName } from '../utils/utils.js';
import { validateEmail, validateString,validateNumber,validateNotNullOrUndifined } from '../utils/validator.js';


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
        
        ALL_PROPERTIES.forEach( (property)=> { 
            if(!validateNotNullOrUndifined(allValid)){
                allValid = !!this[property].value;
            }else{
                allValid = allValid && !!this[property].value;
            }
        });
     
        this.btnConfirm.disabled = !allValid;
        this.btnConfirm.classList.toggle('btn-disabled', !allValid);
    }

    validatorNumeroTarjeta(value){
        const MAX_LENGTH = 16;
        return validateNumber(value) && value.length === MAX_LENGTH;
    }

    validateCodSeguridad(value){
        const MAX_LENGTH = 3;
        return validateNumber(value) && value.length === MAX_LENGTH;
    }

    validatorFechaVencimiento(value){
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        return regex.test(value);
    }

    getEmailByCurrentUser(){
        const emailUser = getItemOfStorage('currentUser').email;
        if(emailUser)this.emailDestinatario.value = emailUser;
    }

    onChangeOptionMedioPago(){
        if(this.medioPagoQR.checked){
            this.btnConfirm.disabled = false;
            this.btnConfirm.classList.remove('btn-disabled');
        }else if(this.medioPagoTarjeta.checked)
            this.enableBtn();
        else{
            this.btnConfirm.disabled = true;
            this.btnConfirm.classList.add('btn-disabled');
        }
    }

    confirmarPago(){
        if(!this.btnConfirm.disabled){
           //TODO: Implementar popUp
           const MENSAJE = "Procesando pago..."
           console.log(MENSAJE);
            
           setTimeout(() => {
            //TODO: cerrar el modal y reireccionar
            const currentUser = getItemOfStorage('currentUser');
            currentUser.carrito = [];
            setItemInStorage('currentUser', currentUser);
            window.location.href = '../../pages/inscripcionIndividual/confirmacion_pago.html'
             
        },2000)
        }
    }

    render() {
        this.getEmailByCurrentUser();
        this.validateData(this.emailDestinatario, "mail_destinatario", validateEmail);
        this.validateData(this.nombreTitularTarjeta, "nombre_titular_tarjeta", validateString);
        this.validateData(this.apellidoTitularTarjeta, "apellido_titular_tarjeta", validateString);
        this.validateData(this.numeroTarjeta, "numero_tarjeta", this.validatorNumeroTarjeta.bind(this));
        this.validateData(this.vtoTarjeta, "vto_tarjeta", this.validatorFechaVencimiento.bind(this));
        this.validateData(this.codigoSeguridadTarjeta,"codigo_tarjeta",this.validateCodSeguridad.bind(this));
        this.enableBtn();

        this.medioPagoQR.addEventListener("change", this.onChangeOptionMedioPago.bind(this));
        
        this.medioPagoTarjeta.addEventListener("change", this.onChangeOptionMedioPago.bind(this));
        
        this.btnConfirm.addEventListener("click", this.confirmarPago.bind(this));
    
    }

}
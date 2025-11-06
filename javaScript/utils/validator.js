export const validateEmail = (email) => {
    const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validateString(email) && patternEmail.test(email);
}

export const validateString = (value) => {
    return value !== '' || validateNotNullOrUndifined(value);
}

export const validateNotNullOrUndifined = (value) => {
    return value !== null && value !== undefined;
}

export const validateArray = (value) => {
    return validateNotNullOrUndifined(value) && value.length > 0;
}


export class PasswordValidator {

    constructor(max, min, cantNumeros, cantCaracteresEspeciales, cantMayus, cantMinus) {
        this.max = max;
        this.min = min;
        this.cantNumeros = cantNumeros;
        this.cantCaracteresEspeciales = cantCaracteresEspeciales;
        this.cantMayus = cantMayus;
        this.cantMinus = cantMinus;
    }


    validatePropertie(password,property,pattern){
        if (validateNotNullOrUndifined(this[property])) {
            let count = 0;
            const caracteres = Array.from(password);
            caracteres.forEach(carater => {
                if (pattern.test(carater)) count++;
            });
            return (count >= this[property]);
        }
        return true;
    }

    validarMaximoCaracteres(password) {
        return validateNotNullOrUndifined(this.max) ? password.length <= this.max : true;
    }

    validarMinimoCaracteres(password) {
        return validateNotNullOrUndifined(this.min) ? password.length >= this.min : true;
    }


    validatePassword(password) {
        return this.validarMaximoCaracteres(password) && 
        this.validarMinimoCaracteres(password) && 
        this.validatePropertie(password,"cantCaracteresEspeciales",/^[^a-zA-Z0-9]+$/) && 
        this.validatePropertie(password,"cantMinus",/^[a-z]+$/) && 
        this.validatePropertie(password,"cantMayus",/^[A-Z]+$/) && 
        this.validatePropertie(password,"cantNumeros",/^[0-9]+$/);
    }

}
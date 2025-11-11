function obtenerParametros() {
    const urlActual = window.location.href;
    const objetoUrl = new URL(urlActual);

    const destinatario = objetoUrl.searchParams.get('destinatario');
    const color = objetoUrl.searchParams.get('color');
    const fuente = objetoUrl.searchParams.get('fuente');
    const monto = objetoUrl.searchParams.get('monto');
    const ubicacion = objetoUrl.searchParams.get('ubicacion');
    const fondo = objetoUrl.searchParams.get('fondo');
}



export class giftCard{
    constructor(destinatario, color, fuente, monto, ubicacion, fondo){
        this.destinatario = destinatario; 
        this.color = color; 
        this.fuente = fuente; 
        this.monto = monto; 
        this.ubicacion = ubicacion; 
        this.fondo = fondo;

        this.renderActual = document.querySelector('.main__vistaPrevia_render');
        this.parrafos = document.querySelectorAll('.vistaPrevia_texto-parrafo');
        this.renderFinal = document.querySelector('.main__vistaPrevia');
    };


    definirNombre(){
        const inputNombre = document.querySelector('.inputNombre');
        const textoNombre = document.querySelector('#textoNombre');

        inputNombre.addEventListener('input', () => {
            textoNombre.textContent = inputNombre.value;
        })
    };

    elegirColor(){
        const textoTitulo = document.querySelector('#textoTitulo');
        const radiosColor = document.querySelectorAll('input[name="color"]');

        radiosColor.forEach(radio => {
            radio.addEventListener('change', () => {
                const valorRadio = radio.value;
                const elementosDOM = [textoTitulo, this.parrafos[0], this.parrafos[1], textoNombre, textoMonto];
                this.limpiarClasesCSS(elementosDOM, valorRadio);
                this.asignarClasesCSS(elementosDOM, valorRadio);
            })
        })
    }
    elegirTamañoFuente(){
        const radiosFuente = document.querySelectorAll('input[name="fuente"]');
        radiosFuente.forEach(radio => {
            radio.addEventListener('change', () => {
                const valorRadio = radio.value;
                const elementosDOM = [this.parrafos[0], this.parrafos[1], textoNombre, textoMonto];
                this.limpiarClasesCSS(elementosDOM, valorRadio);
                this.asignarClasesCSS(elementosDOM, valorRadio);
            })
        })

    }
    definirMonto(){
        const inputMonto = document.querySelector('.inputMonto');
        const textoMonto = document.querySelector('#textoMonto');

        inputMonto.addEventListener('input', () => {
            textoMonto.textContent = `$${inputMonto.value}`;
        })

    }
    elegirUbicacion(){
        const radiosUbicacion = document.querySelectorAll('input[name="ubicacion"]');
        const contenedoresParrafor = document.querySelectorAll('.vistaPrevia_texto');
        const contenedorTextos = document.querySelector('.contenedor_textos');
        const render = document.querySelector('.main__vistaPrevia_render');
        const sitioWeb = document.querySelector('#vistaPrevia_sitioWeb');

        radiosUbicacion.forEach(radio => {
            radio.addEventListener('change', () => {

                const valorRadio = radio.value;

                switch (valorRadio) {
                    case 'ubicacion_izqInf':
                        render.style.flexDirection = "column";
                        contenedorTextos.style.flexDirection = "row";
                        contenedoresParrafor[0].style.flexDirection = "column";
                        contenedoresParrafor[1].style.flexDirection = "column";
                        sitioWeb.style.order = "4";
                        break;

                    case 'ubicacion_derInf':
                        render.style.flexDirection = "column";
                        contenedorTextos.style.flexDirection = "row-reverse";
                        contenedoresParrafor[0].style.flexDirection = "column";
                        contenedoresParrafor[1].style.flexDirection = "column";
                        sitioWeb.style.order = "4";
                        break;

                    case 'ubicacion_centroSup':
                        render.style.flexDirection = "column-reverse";
                        contenedorTextos.style.flexDirection = "column";
                        contenedoresParrafor[0].style.flexDirection = "row";
                        contenedoresParrafor[1].style.flexDirection = "row";
                        sitioWeb.style.order = "-1";
                        break;

                    case 'ubicacion_centro':
                        render.style.flexDirection = "column";
                        contenedorTextos.style.flexDirection = "column";
                        contenedoresParrafor[0].style.flexDirection = "row";
                        contenedoresParrafor[1].style.flexDirection = "row";
                        sitioWeb.style.order = "4";
                        break;
                }
            })
        })
    }
    elegirBorde(){
        const radiosFondo = document.querySelectorAll('input[name="fondo"]');
        radiosFondo.forEach(radio => {
            radio.addEventListener('change', () => {
                const valorRadio = radio.value;
                this.limpiarClaseCSS(this.renderActual, valorRadio);
                this.asignarClaseCSS(this.renderActual, valorRadio);
                console.log(this.renderActual.classList)
            })
        })
    }
    personalizar(){
        this.definirNombre();
        this.elegirColor();
        this.elegirTamañoFuente();
        this.definirMonto();
        this.elegirUbicacion();
        this.elegirBorde();
    }

    renderizar(destinatario, color, fuente, monto, ubicacion, fondo){
        document.addEventListener('DOMContentLoaded', () => {
            this.renderFinal.innerHTML = `
            <div class="main__vistaPrevia_render ${ubicacion} ${fondo}">
                <h2 id="textoTitulo" class="${color}"> Gift Card </h2>
                <div class="contenedor_textos">
                    <div class="vistaPrevia_texto ${fuente} ${color}">
                        <p class="vistaPrevia_texto-parrafo">Para: ${destinatario} </p>
                        <p id="textoNombre"></p>
                    </div>
                    <div class="vistaPrevia_texto ${fuente} ${color}">
                        <p class="vistaPrevia_texto-parrafo">Vale por: ${monto}</p>
                        <p id="textoMonto"></p>
                    </div>
                </div>
                <p id="vistaPrevia_sitioWeb">WWW.EDUMATANZA.COM</p>
            </div>
            `
        })
    }

    asignarClasesCSS(array, nombreClase) {
        array.forEach(elemento => {
            elemento.classList.add(nombreClase);
        })
    };

    limpiarClasesCSS(array, nombreClase) {
        const fraccion = nombreClase.slice(0, -2)

        array.forEach(elemento => {
            elemento.classList.forEach(clase => {
                if (clase.startsWith(fraccion)) {
                    elemento.classList.remove(clase);
                }
            });
        })
    };

    asignarClaseCSS(elemento, nombreClase) {
        elemento.classList.add(nombreClase);
    };

    limpiarClaseCSS(elemento, nombreClase) {
        const fraccion = nombreClase.slice(0, -2)

        elemento.classList.forEach(clase => {
            if (clase.startsWith(fraccion)) {
                elemento.classList.remove(clase);
            }
        });
    };
};
export class giftCard{
    constructor(){
        this.renderActual = document.querySelector('.main__vistaPrevia_render');
        this.renderFinal = document.querySelector('.main__vistaPrevia');
        this.parrafos = document.querySelectorAll('.vistaPrevia_texto-parrafo');
        this.textoTitulo = document.querySelector('#textoTitulo');
        this.textoNombre = document.querySelector('#textoNombre');
        this.textoMonto = document.querySelector('#textoMonto');
        
        //Elementos usados para -ubicación-
        this.contenedorTextos = document.querySelector('.contenedor_textos');
        this.contenedoresParrafos = document.querySelectorAll('.vistaPrevia_texto');
        this.sitioWeb = document.querySelector('#vistaPrevia_sitioWeb');
    };


    definirNombre(){
        const inputNombre = document.querySelector('.inputNombre');
        inputNombre.addEventListener('input', () => {
            this.textoNombre.textContent = inputNombre.value;
        })
    };

    elegirColor(){
        const radiosColor = document.querySelectorAll('input[name="color"]');
        radiosColor.forEach(radio => {
            radio.addEventListener('change', () => {
                const valorRadio = radio.value;
                const elementosDOM = [this.textoTitulo, this.parrafos[0], this.parrafos[1], this.textoNombre, this.textoMonto];
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
                const elementosDOM = [this.parrafos[0], this.parrafos[1], this.textoNombre, this.textoMonto];
                this.limpiarClasesCSS(elementosDOM, valorRadio);
                this.asignarClasesCSS(elementosDOM, valorRadio);
            })
        })

    }
    definirMonto(){
        const inputMonto = document.querySelector('.inputMonto');
        inputMonto.addEventListener('input', () => {
            textoMonto.textContent = `$${inputMonto.value}`;
        })

    }
    elegirUbicacion(){
        const radiosUbicacion = document.querySelectorAll('input[name="ubicacion"]');

        radiosUbicacion.forEach(radio => {
            radio.addEventListener('change', () => {
                const valorRadio = radio.value;
                switch (valorRadio) {
                    case 'ubicacion_izqInf':
                        this.renderActual.style.flexDirection = "column";
                        this.contenedorTextos.style.flexDirection = "row";
                        this.contenedoresParrafos[0].style.flexDirection = "column";
                        this.contenedoresParrafos[1].style.flexDirection = "column";
                        this.sitioWeb.style.order = "4";
                        break;

                    case 'ubicacion_derInf':
                        this.renderActual.style.flexDirection = "column";
                        this.contenedorTextos.style.flexDirection = "row-reverse";
                        this.contenedoresParrafos[0].style.flexDirection = "column";
                        this.contenedoresParrafos[1].style.flexDirection = "column";
                        this.sitioWeb.style.order = "4";
                        break;

                    case 'ubicacion_centroSup':
                        this.renderActual.style.flexDirection = "column-reverse";
                        this.contenedorTextos.style.flexDirection = "column";
                        this.contenedoresParrafos[0].style.flexDirection = "row";
                        this.contenedoresParrafos[1].style.flexDirection = "row";
                        this.sitioWeb.style.order = "-1";
                        break;

                    case 'ubicacion_centro':
                        this.renderActual.style.flexDirection = "column";
                        this.contenedorTextos.style.flexDirection = "column";
                        this.contenedoresParrafos[0].style.flexDirection = "row";
                        this.contenedoresParrafos[1].style.flexDirection = "row";
                        this.sitioWeb.style.order = "4";
                        break;
                }
            })
        })
    }

    definirUbicacion(ubicacionElegida) {
        switch (ubicacionElegida) {
            case 'ubicacion_izqInf':
                this.renderActual.style.flexDirection = "column";
                this.contenedorTextos.style.flexDirection = "row";
                this.contenedoresParrafos[0].style.flexDirection = "column";
                this.contenedoresParrafos[1].style.flexDirection = "column";
                this.sitioWeb.style.order = "4";
                break;

            case 'ubicacion_derInf':
                this.renderActual.style.flexDirection = "column";
                this.contenedorTextos.style.flexDirection = "row-reverse";
                this.contenedoresParrafos[0].style.flexDirection = "column";
                this.contenedoresParrafos[1].style.flexDirection = "column";
                this.sitioWeb.style.order = "4";
                break;

            case 'ubicacion_centroSup':
                this.renderActual.style.flexDirection = "column-reverse";
                this.contenedorTextos.style.flexDirection = "column";
                this.contenedoresParrafos[0].style.flexDirection = "row";
                this.contenedoresParrafos[1].style.flexDirection = "row";
                this.sitioWeb.style.order = "-1";
                break;

            case 'ubicacion_centro':
                this.renderActual.style.flexDirection = "column";
                this.contenedorTextos.style.flexDirection = "column";
                this.contenedoresParrafos[0].style.flexDirection = "row";
                this.contenedoresParrafos[1].style.flexDirection = "row";
                this.sitioWeb.style.order = "4";
                break;
        }
    }
    elegirBorde(){
        const radiosFondo = document.querySelectorAll('input[name="fondo"]');
        radiosFondo.forEach(radio => {
            radio.addEventListener('change', () => {
                const valorRadio = radio.value;
                this.limpiarClaseCSS(this.renderActual, valorRadio);
                this.asignarClaseCSS(this.renderActual, valorRadio);
                
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

    renderizar(destinatario, color, fuente, monto, ubicacion, fondo) {
        this.renderFinal.innerHTML = `
            <div class="main__vistaPrevia_render ${fondo}">
                <h2 id="textoTitulo" class="${color}"> Gift Card </h2>
                <div class="contenedor_textos">
                    <div class="vistaPrevia_texto ${color} ${fuente}">
                        <p class="vistaPrevia_texto-parrafo">Para: </p>
                        <p id="textoNombre">${destinatario}</p>
                    </div>
                    <div class="vistaPrevia_texto ${color} ${fuente}">
                        <p class="vistaPrevia_texto-parrafo">Vale por: </p>
                        <p id="textoMonto">${monto}</p>
                    </div>
                </div>
                <p id="vistaPrevia_sitioWeb">WWW.EDUMATANZA.COM</p>
            </div>
            `
            this.renderActual = document.querySelector('.main__vistaPrevia_render');
            this.contenedorTextos = document.querySelector('.contenedor_textos');
            this.contenedoresParrafos = document.querySelectorAll('.vistaPrevia_texto');
            this.sitioWeb = document.querySelector('#vistaPrevia_sitioWeb');
            this.definirUbicacion(ubicacion);
    }

    limpiarGiftCard(){
        this.textoNombre.textContent = '';
        this.textoMonto.textContent = '';
        
        const elementosDOM = [this.textoTitulo, this.parrafos[0], this.parrafos[1], this.textoNombre, this.textoMonto];
        this.limpiarClasesCSS(elementosDOM, 'color_');
        this.limpiarClasesCSS(elementosDOM, 'fuente_');
        this.limpiarClaseCSS(this.renderActual, 'fondo_');

        //ubicacion
        this.renderActual.style.flexDirection = "column";
        this.contenedorTextos.style.flexDirection = "column";
        this.contenedoresParrafos[0].style.flexDirection = "row";
        this.contenedoresParrafos[1].style.flexDirection = "row";
        this.sitioWeb.style.order = "4";
    }

    // Conjunto de elementos
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
    
    // Único elementos
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
import { User } from "./login/user.js";
import { Carrito } from "./carritoCompras/carrito.js";
import { loger } from "../javaScript/login/loger.js";
 
const init = () => {
    User.initUsers();
    Carrito.actualizarContador();
    const heroSection = document.querySelector(".section__cebecera");
    if (heroSection) {
        const banner = heroSection.querySelector(".img__hero");
        const btnInscripcion = heroSection.querySelector(".cabecera__btn");
        const formInscripcion = heroSection.querySelector("#form");
        let hoverBanner = false;
        const slides = [
            { id: 'curso-ia', img: 'Introducción_IA_image_hero.jpg' },
            { id: 'curso-bbdd', img: 'Introducción_BB_DD_hero.jpg' }, 
            { id: 'curso-ingles', img: 'Introducción_ingles_hero.jpg' }  
        ];
 
        let indiceActual = 0;
 
        const cambiarSlide = () => {
            indiceActual = (indiceActual + 1) % slides.length;
            const slideActual = slides[indiceActual];
            banner.src = `./assets/img/${slideActual.img}`;
            banner.alt = `Imagen curso ${slideActual.id}`; // Mejora la accesibilidad
            formInscripcion.action = `./pages/inscripcionIndividual/inscripcionIndividual.html?name=${slideActual.id}`;
        };
 

        if (slides.length > 0) {
            formInscripcion.action = `./pages/inscripcionIndividual/inscripcionIndividual.html?name=${slides[0].id}`;
            banner.src = `./assets/img/${slides[0].img}`;
        }

        btnInscripcion.addEventListener("click", () => {
                    window.location.href = `./pages/inscripcionIndividual/inscripcionIndividual.html?curso=${slides[indiceActual].id}`
        });

        btnInscripcion.addEventListener("mouseover", () => { 
            hoverBanner = true;
        });
 
        btnInscripcion.addEventListener("mouseout", () => {
            hoverBanner = false;
        });
        
        setInterval(()=>{
            if(!hoverBanner){
                cambiarSlide();
            }
        }, 2000);
       
    }
}
 
init();
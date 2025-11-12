import { Popup } from "../utils/popup.js";

export class FormularioContacto {
  constructor(seleccionDelForm) {
    this.form = document.querySelector(seleccionDelForm);
    this.nombre = this.form.querySelector(".nombre");
    this.apellido = this.form.querySelector(".apellido");
    this.email = this.form.querySelector(".email");
    this.telefono = this.form.querySelector(".telefono");
    this.mensaje = this.form.querySelector(".mensaje");

    this.crearContador();
    this.formatearTelefono();
    this.agregarEventos();
  }

  crearContador() {
    this.contador = document.createElement("p");
    this.contador.textContent = "0 / 1000";
    this.contador.style.textAlign = "right";
    this.contador.style.fontSize = "0.9em";
    this.contador.style.color = "#555";
    this.mensaje.insertAdjacentElement("afterend", this.contador);

    this.mensaje.addEventListener("input", () => {
      const len = this.mensaje.value.length;
      this.contador.textContent = `${len} / 1000`;
      if (len > 1000) {
        this.mensaje.value = this.mensaje.value.slice(0, 1000);
      }
    });
  }

  formatearTelefono() {
    this.telefono.addEventListener("input", () => {
      // Elimina cualquier carácter que no sea número
      let valor = this.telefono.value.replace(/\D/g, "");
      if (valor.length > 2) {
        valor = valor.slice(0, 2) + "-" + valor.slice(2);
      }
      if (valor.length > 7) {
        valor = valor.slice(0, 7) + "-" + valor.slice(7);
      }
      this.telefono.value = valor.slice(0, 13);
    });
  }
  mostrarPopup() {
    const popup = new Popup(
      "Gracias!. <br> Su mensaje ha sido enviado",
      "../index.html"
    );
    popup.mostrar();
  }

  agregarEventos() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.validarFormulario()) {
        this.mostrarPopup();
      }
    });
  }

  validarFormulario() {
    if (!this.nombre.value.trim() || !this.apellido.value.trim()) {
      alert("El nombre y apellido no pueden estar vacíos.");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.email.value)) {
      alert("Ingrese un correo electrónico válido.");
      return false;
    }

    const telRegex = /^(\d{2}-\d{4}-\d{4})$/;
    if (this.telefono.value && !telRegex.test(this.telefono.value)) {
      alert("El teléfono debe tener 10 dígitos en formato 11-1234-5678.");
      return false;
    }

    if (this.mensaje.value.trim().length === 0) {
      alert("El mensaje no puede estar vacío.");
      return false;
    }

    return true;
  }
}

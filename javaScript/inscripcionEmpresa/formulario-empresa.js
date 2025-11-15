import {setItemSesionStorage} from "../utils/localStorage.js"

export class FormularioEmpresa {
  constructor(selectorForm, idCurso,precioCurso = 0) {
    this.idCurso = idCurso;
    this.form = document.querySelector(selectorForm);
    this.precioCurso = parseFloat(String(precioCurso).replace(/[^\d-]/g, ""));
    this.contenedorCampos = document.querySelector(".campos");
    this.btnAgregar = document.querySelector(".fa-circle-plus");
    this.totalTexto = document.querySelector(".inscripcion p");
    this.btnInscribirse = document.querySelector("#Inscribirse");
    this.formInscrpcion = {personas: [], cursoSelect: {precio: ""}};


    const iconoPlus = this.form.querySelector(".fa-circle-plus");
    iconoPlus.addEventListener("click", (e) => this.agregarPersona(e));
    this.contenedorCampos.addEventListener("click", (e) => this.eliminarPersona(e));
    this.form.addEventListener("submit", (e) => this.enviarFormulario(e));
    this.actualizarTotal();
  }


  agregarPersona(e) {
    e.preventDefault();
    const personas = this.contenedorCampos.querySelectorAll(".datos__persona");
    const personaBase = personas[personas.length - 1] || personas[0];
    const nuevaPersona = personaBase.cloneNode(true);
    nuevaPersona.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });

    nuevaPersona.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));

    this.contenedorCampos.appendChild(nuevaPersona);

    const primerInput = nuevaPersona.querySelector("input");
    if (primerInput) primerInput.focus();

    this.actualizarTotal();
  }

  eliminarPersona(e) {
    const target = e.target;
    // soporte si hacen click en el <i> o en el enlace que lo contiene
    if (!target.classList || (!target.classList.contains("fa-circle-minus") && !target.closest(".fa-circle-minus"))) {
      return;
    }
    e.preventDefault();
    const persona = target.closest(".datos__persona");


    const personas = this.contenedorCampos.querySelectorAll(".datos__persona");
    if (personas.length === 1) {
      // Si solo queda uno, limpiamos sus inputs
      persona.querySelectorAll("input").forEach((i) => (i.value = ""));
    } else {
      persona.remove();
    }
    this.actualizarTotal();
  }

  actualizarTotal() {
     if (!this.totalTexto) {
    console.warn("No se encontró el elemento del total en el DOM");
    return;
  }
    const cantidad = this.contenedorCampos.querySelectorAll(".datos__persona").length;
    const total = this.precioCurso * cantidad;
    this.formInscrpcion.cursoSelect.id = this.idCurso;
    this.formInscrpcion.cursoSelect.precio = `$${total.toLocaleString("es-AR")}`;
    // Mostrar con formato simple (sin conversión de moneda real)
    this.totalTexto.textContent = `$${total.toLocaleString("es-AR")}`;
  }

  enviarFormulario(e) {
    e.preventDefault();

    const personas = Array.from(this.contenedorCampos.querySelectorAll(".datos__persona")).map((p) => ({
      nombre: p.querySelector(".nombre").value.trim(),
      apellido: p.querySelector(".apellido").value.trim(),
      dni: p.querySelector(".dni").value.trim(),
    }));

   this.formInscrpcion.personas = [...personas];

    const hayIncompleto = personas.some((p) => !p.nombre || !p.apellido || !p.dni);
    if (hayIncompleto) {
      alert("Completá todos los campos (nombre, apellido, dni) antes de inscribirte");
      return;
    }

    this.mostrarResumen(personas);
  }

  mostrarResumen(personas) {
    const resumenHTML = `
      <div class="modal-overlay">
        <div class="modal-empresa">
          <h3>Resumen de inscripción</h3>
          <ul>
            ${personas
        .map((p, i) => `<li>${i + 1}. ${p.nombre} ${p.apellido} - DNI: ${p.dni}</li>`)
        .join("")}
          </ul>
          <p><strong>Total:</strong> ${this.totalTexto.textContent}</p>
          <div class = "Botones-Modal">
          <button id="aceptarInscripcion">Aceptar</button>
          <button id="cerrarModal">Cerrar</button>
          </div>    
        </div>
      </div>
        
    `;
    document.body.insertAdjacentHTML("beforeend", resumenHTML);
    document.getElementById("aceptarInscripcion").addEventListener("click", () => {
      const overlay = document.querySelector(".modal-overlay");
      overlay.remove();
      setItemSesionStorage("formInscripcion", this.formInscrpcion)
      window.location.href = "../../inscripcionIndividual/pago.html?type=inscripcion";
    });
    document.getElementById("cerrarModal").addEventListener("click", () => {
      const overlay = document.querySelector(".modal-overlay");
      if (overlay) overlay.remove();
    });
  }
}

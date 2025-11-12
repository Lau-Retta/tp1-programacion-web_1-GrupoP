import { cursos } from "../../data/cursos.js";

const buscadorInput = document.querySelector("#buscador-input");
const resultados = document.querySelector(".resultados-busqueda");

document.addEventListener("DOMContentLoaded", () => {
  if (!buscadorInput || !resultados) return;

  buscadorInput.addEventListener("input", () => {
    const query = buscadorInput.value.toLowerCase();
    resultados.innerHTML = "";

    if (query === "") {
      resultados.style.display = "none";
      return;
    }

    const resultadosFiltrados = cursos.filter((curso) => {
      return curso.nombreCurso.toLowerCase().includes(query);
    });

    if (resultadosFiltrados.length === 0) {
      resultados.innerHTML = "<li>Sin resultados</li>";
      resultados.style.display = "block";

      return;
    }

    resultadosFiltrados.forEach((curso) => {
      const li = document.createElement("li");
      li.textContent = curso.nombreCurso;

      li.addEventListener("click", () => {
        // Ruta absoluta: siempre apunta al mismo archivo desde cualquier página

        window.location.href = `/pages/cursos/detalle_curso.html?name=${curso.id}`;
      });

      resultados.appendChild(li);
    });

    resultados.style.display = "block";
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".buscador")) {
      resultados.style.display = "none";
    }
  });
});

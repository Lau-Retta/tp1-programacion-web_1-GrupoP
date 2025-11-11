export class Popup {
  constructor(mensaje, redireccion = null, isJustView = false) {
    this.mensaje = mensaje;
    this.redireccion = redireccion;
    this.isJustView = isJustView;
    this.popup = null;
  }
  remove() {
    this.popup.remove();
  }
  mostrar() {
    this.popup = document.createElement("div");
    this.popup.innerHTML = `
      <div style="
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex; justify-content: center; align-items: center;
        z-index: 9999;
      ">
        <div style="
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        ">
        <h2 style= "color: black;">${this.mensaje}</h2>
        
       ${this.isJustView ? '' : `
         <button id="aceptarBtn" style="
            margin-top: 20px;
            padding: 8px 16px;
            border: none;
            background-color: #33a65b;
            color: black;
            border-radius: 6px;
            cursor: pointer;
          ">Aceptar</button>`}
        </div>
      </div>
    `;
    document.body.appendChild(this.popup);

    if (this.isJustView) {
      return;
    }

    document.getElementById("aceptarBtn").addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#2e8b57";
      e.target.style.color = "white";
    });
    document.getElementById("aceptarBtn").addEventListener("mouseout", (e) => {
      e.target.style.backgroundColor = "#33a65b";
      e.target.style.color = "black";
    });

    document.getElementById("aceptarBtn").addEventListener("click", () => {
      popup.remove();
      if (this.redireccion) window.location.href = this.redireccion;
    });

  }
}

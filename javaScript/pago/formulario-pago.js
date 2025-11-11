export class FormularioPago {
  constructor() {
    this.form = document.querySelector(".section__form_pago")
    this.numero = document.getElementById("numeracion_tarjeta");
    this.vencimiento = document.getElementById("vto_tarjeta");
    this.codigoDeSeguridad = document.getElementById("codigo_tarjeta");
    this.nombre = document.getElementById("nombre_titular_tarjeta");
    this.apellido = document.getElementById("apellido_titular_tarjeta");
    this.email = document.getElementById("mail_destinatario");
    this.btnConfrimar = document.querySelector(".giftCard__boton")

    this.validarFormulario();
  }

validarFormulario() {
  const input = this.numero;

  input.addEventListener("input", () => {
  let valor = this.numero.value.replace(/\D/g, "");
      if (valor.length > 4) {
        valor = valor.slice(0, 4) + "-" + valor.slice(4);
      }
      if (valor.length > 9) {
        valor = valor.slice(0, 9) + "-" + valor.slice(9);
      }
      if(valor.length > 14){
    valor = valor.slice(0, 14) + "-" + valor.slice(14);
      }
      this.numero.value = valor.slice(0, 19);
      valor.replace(/(\d{4})(?=\d)/g, "$1 "); // separa cada 4
  });

const venc = this.vencimiento;
venc.addEventListener("input", () =>{
let fecha = this.vencimiento.value.replace(/\D/g, "");
if(fecha.length > 2){
  fecha = fecha.slice(0, 2) + "/" + fecha.slice(2);
}
venc.value = fecha.slice(0, 5);
});

const seguridad = this.codigoDeSeguridad;
seguridad.addEventListener("input", () =>{
  
  let codigo = this.codigoDeSeguridad.value.replace(/\D/g, "");

  seguridad.value = codigo.slice(0, 3)
})

this.form.addEventListener("submit", (e) => {
  e.preventDefault(); // Siempre lo bloqueamos primero
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(seguridad.value.trim() === "" || this.codigoDeSeguridad.value.trim().length < 3){
    alert("Ingrese el codigo de Seguridad");
    return false;
  }

  if(input.value.trim() === "" || this.numero.value.trim().length < 19){
    alert("Ingrese el numero de la tarjeta");
    return false;
  }
  if(!this.nombre.value.trim() || !this.apellido.value.trim()){
    alert("Ingrese su nombre y su apellido");
    return false;
  }
  if (!emailRegex.test(this.email.value)) {
    alert("Ingrese un correo electrónico válido.");
    return false;
  }

  if (venc.value.trim() === "" || this.vencimiento.value.trim().length < 4) {
    alert("Completa la fecha de vencimiento");
    return false;
  }

  // Si todo está bien, recién enviamos:
  window.location.href = "./confirmacion_pago.html";
});

}
}





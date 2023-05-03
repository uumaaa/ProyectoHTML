var fechaActual = new Date(); // fecha y hora actual
var fechaFinal = new Date(
  fechaActual.getFullYear(),
  fechaActual.getMonth(),
  fechaActual.getDate() + 2,
  fechaActual.getHours(),
  fechaActual.getMinutes() - 37,
  fechaActual.getSeconds()
);

function actualizarContador() {
  //Se calcula la fecha actual usando el constructor de Date

  fechaNueva = new Date();

  // fecha y hora final (2 días después de la fecha actual)

  var tiempoRestante = fechaFinal.getTime() - fechaNueva.getTime(); // tiempo restante en milisegundos
  var dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  var horas = Math.floor(
    (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  let contador = document.getElementById("contador");

  contador.style.display = "";
  document.getElementById("contador").innerText =
    "Obtén 35% de desc. y prepárate para el éxito con POLITIPS!\nTermina en: " +
    dias +
    "d : " +
    horas +
    "h : " +
    minutos +
    "m : " +
    segundos +
    "s";
}
setInterval(actualizarContador, 1000);

actualizarContador();

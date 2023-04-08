document.getElementById("BotonRegistro").style.color = "#676969";
document.getElementById("BotonInicio").style.color = "black";
var formularioInicio = document.getElementById("login");
var formularioRegistro = document.getElementById("register");
var botonMovil = document.getElementById("btn");
function register() {
  formularioInicio.style.left = "-1000px";
  formularioRegistro.style.left = "10vw";
  botonMovil.style.left = "50%";
  setTimeout(() => {
    document.getElementById("BotonInicio").style.color = "#676969";
    document.getElementById("BotonRegistro").style.color = "black";
  }, 100);
}
function login() {
  formularioInicio.style.left = "10vw";
  formularioRegistro.style.left = "1000px";
  botonMovil.style.left = "0";
  setTimeout(() => {
    document.getElementById("BotonRegistro").style.color = "#676969";
    document.getElementById("BotonInicio").style.color = "black";
  }, 100);
}
function validacionRegistro() {
  var Matricula = document.getElementById("Matricula");
  var Correo = document.getElementById("CorreoElec");
  var Usuario = document.getElementById("Usuario");
  var Contrasena = document.getElementById("Contrasena");
  var Contrasena2 = document.getElementById("SegundaContra");

  if (Matricula.value == "") Matricula.style.borderColor = "#80004a";
  else Matricula.style.borderColor = "#d8cdc6";
  if (Correo.value == "") Correo.style.borderColor = "#80004a";
  else Correo.style.borderColor = "#d8cdc6";
  if (Usuario.value == "") Usuario.style.borderColor = "#80004a";
  else Usuario.style.borderColor = "#d8cdc6";
  if (Contrasena.value == "") Contrasena.style.borderColor = "#80004a";
  else Contrasena.style.borderColor = "#d8cdc6";
  if (Contrasena2.value == "") Contrasena2.style.borderColor = "#80004a";
  else Contrasena2.style.borderColor = "#d8cdc6";
  if (Contrasena.value != Contrasena2.value) {
    alert("Las contraseñas no son iguales, inténtalo de nuevo");
    Contrasena2.style.borderColor = "#80004a";
    Contrasena.style.borderColor = "#80004a";
  } else {
    if (Contrasena.value == "" && Contrasena2.value == "") {
      Contrasena2.style.borderColor = "#80004a";
      Contrasena.style.borderColor = "#80004a";
    } else {
      Contrasena2.style.borderColor = "#d8cdc6";
      Contrasena.style.borderColor = "#d8cdc6";
    }
  }
}
function validacionInicio() {
  var Matricula = document.getElementById("MatriculaI");
  var Contrasena = document.getElementById("ContrasenaI");
  if (Contrasena.value == "") Contrasena.style.borderColor = "#80004a";
  else Contrasena.style.borderColor = "#d8cdc6";
  if (Matricula.value == "") Matricula.style.borderColor = "#80004a";
  else Matricula.style.borderColor = "#d8cdc6";
}

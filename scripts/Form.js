document.getElementById("BotonRegistro").style.color = "#80004a";
document.getElementById("BotonInicio").style.color = "white";
var formularioInicio = document.getElementById("login");
var formularioRegistro = document.getElementById("register");
var botonMovil = document.getElementById("btn");
function register() {
    formularioInicio.style.left = "-600px";
    formularioRegistro.style.left = "46px";
    botonMovil.style.left = "50%";
    document.getElementById("CajaFormulario").style.height = "520px";
    setTimeout(() => {
        document.getElementById("BotonInicio").style.color = "#80004a";
        document.getElementById("BotonRegistro").style.color = "#F9EAE1";
    }, 100);
}
function login() {
    formularioInicio.style.left = "46px";
    formularioRegistro.style.left = "600px";
    botonMovil.style.left = "0";
    document.getElementById("CajaFormulario").style.height = "200px";
    setTimeout(() => {
        document.getElementById("BotonRegistro").style.color = "#80004a";
        document.getElementById("BotonInicio").style.color = "#F9EAE1";
    }, 100);
}
function validacionRegistro() {
    var Matricula = document.getElementById("Matricula");
    var Correo = document.getElementById("CorreoElec");
    var Usuario = document.getElementById("Usuario");
    var Contrasena = document.getElementById("Contrasena");
    var Contrasena2 = document.getElementById("SegundaContra");

    if (Matricula.value == "")
        Matricula.style.borderColor = "#80004a";
    else
        Matricula.style.borderColor = "#F9EAE1";
    if (Correo.value == "")
        Correo.style.borderColor = "#80004a";
    else
        Correo.style.borderColor = "#F9EAE1";
    if (Usuario.value == "")
        Usuario.style.borderColor = "#80004a";
    else
        Usuario.style.borderColor = "#F9EAE1";
        if (Contrasena.value == "")
        Contrasena.style.borderColor = "#80004a";
    else
        Contrasena.style.borderColor = "#F9EAE1";
    if (Contrasena2.value == "")
        Contrasena2.style.borderColor = "#80004a";
    else
        Contrasena2.style.borderColor = "#F9EAE1";
    if(Contrasena.value != Contrasena2.value){
        alert("Las contraseñas no son iguales, inténtalo de nuevo");
        Contrasena2.style.borderColor = "#80004a";
        Contrasena.style.borderColor = "#80004a";
    }
    else{
        Contrasena2.style.borderColor = "#F9EAE1";
        Contrasena.style.borderColor = "#F9EAE1";
    }
}
function validacionInicio(){
    var Matricula = document.getElementById("MatriculaI");
    var Contrasena = document.getElementById("ContrasenaI");
    if (Contrasena.value == "")
    Contrasena.style.borderColor = "#80004a";
else
    Contrasena.style.borderColor = "#F9EAE1";
    if (Matricula.value == "")
    Matricula.style.borderColor = "#80004a";
else
    Matricula.style.borderColor = "#F9EAE1";
}
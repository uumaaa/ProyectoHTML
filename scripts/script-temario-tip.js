var ContenidoTemario = document.getElementById("Temario");
var ContenidoMejora = document.getElementById("Mejorar");
var BloqueMostrarMejora = document.getElementById("BloqueMostrarMejora");
var BotonFalsoTemario = document.getElementById("BotonFalsoTemario");
var BotonFalsoMejora = document.getElementById("BotonFalsoMejora");
function MostrarMejora(){
    ContenidoMejora.style.display="block";
    BotonFalsoMejora.style.left="40px";
}
function OcultarMejora(){
    ContenidoMejora.style.display="none";
    BotonFalsoMejora.style.left="7px";
}
function MostrarTemario(){
    ContenidoTemario.style.display="block";
    BloqueMostrarMejora.style.top="51.5%";
    ContenidoMejora.style.top="58%";
    BotonFalsoTemario.style.left="40px";
}
function OcultarTemario(){
    ContenidoTemario.style.display="none";
    BloqueMostrarMejora.style.top="16%";
    ContenidoMejora.style.top="22%";
    BotonFalsoTemario.style.left="7px";
}
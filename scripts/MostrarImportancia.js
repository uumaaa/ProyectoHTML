var paginaImportancia = document.getElementById("ComoAyudar");
var BotonImportancia = document.getElementById("BotonAyuda");
BotonImportancia.onclick = function(){
  paginaImportancia.style.display = "block";
}
var CerrarPagina = document.getElementsByClassName("Cerrar")[0];
CerrarPagina.onclick = function() { 
  paginaImportancia.style.display = "none";
}
var paginaImportancia = document.getElementById("Importancia");
var BotonImportancia = document.getElementById("BotonImportancia");
BotonImportancia.onclick = function(){
  paginaImportancia.style.display = "block";
}
var CerrarPagina = document.getElementsByClassName("Cerrar")[0];
CerrarPagina.onclick = function() { 
  paginaImportancia.style.display = "none";
}
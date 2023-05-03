//Función que crea mediante JS el popup
function crearPopup() {
  var popup = document.createElement("div");
  popup.style.background = "#000";
  popup.classList.add("hidden");
  popup.setAttribute("id", "myPopup");

  var texto = document.createElement("div");
  texto.innerHTML =
    "¡Aprovecha la oferta!<br>35% de descuento en todos los productos solo por tiempo limitado";
  texto.classList.add("popup-text");
  //Se le agregan los estilos para que este en centro de la pantalla
  texto.style.position = "absolute";
  texto.style.top = "50%";
  texto.style.left = "50%";
  texto.style.transform = "translate(-50%, -50%)";
  texto.style.color = "white";
  texto.style.fontSize = "50px";
  texto.style.fontFamily = "Arial";
  texto.style.fontWeight = "bold";
  texto.style.textAlign = "center";
  texto.style.backgroundColor = "black";
  texto.style.display = "block";

  var boton = document.createElement("button");
  boton.innerHTML = "X";
  boton.classList.add("popup-button");
  //Se le agregan los estilos para que este en la esquina superior derecha
  boton.style.position = "absolute";

  boton.style.color = "white";
  boton.style.fontSize = "50px";
  boton.style.fontFamily = "Arial";
  boton.style.fontWeight = "bold";
  boton.style.textAlign = "center";
  boton.style.backgroundColor = "black";
  boton.style.display = "block";
  boton.style.border = "none";
  boton.style.outline = "none";
  boton.style.cursor = "pointer";
  boton.style.padding = "0";
  boton.style.width = "50px";
  boton.style.height = "50px";
  boton.style.borderRadius = "50%";
  boton.style.boxShadow = "0 0 0 2px black";

  boton.style.top = "50%";
  boton.style.left = "50%";
  boton.style.transform = "translate(-50%, -50%)";

  //Se le agrega el evento al boton para que al hacer click se oculte el popup
  boton.addEventListener("click", ocultarPopup);

  popup.appendChild(boton);
  popup.appendChild(texto);
  document.body.appendChild(popup);
}

//Función que muestra el popup
function mostrarPopup() {
  console.log("Mostrando popup");
  var myPopup = document.getElementById("myPopup");
  myPopup.classList.remove("hidden");
}

//Función que oculta el popup
function ocultarPopup() {
  console.log("Ocultando popup");
  var myPopup = document.getElementById("myPopup");
  myPopup.classList.add("hidden");
}

//Función que crea el popup y lo muestra por 10 segundos cada 30 segundos
function popup() {
  crearPopup();
  mostrarPopup();
  setTimeout(ocultarPopup, 2000);
  setTimeout(popup, 100000);
}

popup();

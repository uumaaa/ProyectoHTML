var mql = window.matchMedia("(max-width: 750px)");
//Función que crea mediante JS el popup
function crearPopup() {
  var popup = document.createElement("div");
  popup.style.background = "#000";
  popup.classList.add("hidden");
  //popup.hidden.style.backgroundColor("red");

  popup.setAttribute("id", "myPopup");

  var texto = document.createElement("div");

  texto.innerHTML =
    "¡Aprovecha la oferta!<br>35% de descuento en todos los productos solo por tiempo limitado";
  texto.classList.add("popup-text");
  //Se le agregan los estilos para que este en centro de la pantalla
  texto.style.position = "absolute";
  texto.style.top = "35vh";
  texto.style.left = "50vw";
  texto.style.transform = "translate(-50%, -50%)";
  texto.style.color = "#E6E6FA";
  texto.style.fontSize = "25px";
  texto.style.width = "50vw";
  texto.style.height = "50vh";
  texto.style.padding = "10%";
  texto.style.fontWeight = "bold";
  texto.style.display = "flex";
  texto.style.textAlign = "center";
  texto.style.background =
    "linear-gradient(60deg, rgba(107, 94, 12, 0.666) 0%,rgba(228, 90, 35, 0.9) 100%)";
  texto.style.display = "block";
  texto.style.borderRadius = "10px";

  var boton = document.createElement("button");
  boton.innerHTML = "X";
  boton.classList.add("popup-button");
  //Se le agregan los estilos para que este en la esquina superior derecha
  boton.style.position = "absolute";

  boton.style.color = "white";
  boton.style.fontSize = "25px";
  boton.style.fontWeight = "bold";
  boton.style.color = "red";
  boton.style.textAlign = "center";
  boton.style.background =
    "linear-gradient(60deg, rgba(107, 94, 12, 0.666) 0%,rgba(228, 90, 35, 0.9) 100%)";
  boton.style.display = "block";
  boton.style.border = "none";
  boton.style.outline = "none";
  boton.style.cursor = "pointer";
  boton.style.padding = "0";
  boton.style.width = "50px";
  boton.style.height = "50px";
  boton.style.borderRadius = "50%";
  boton.style.boxShadow = "0 0 0 2px red";
  boton.style.top = "10vh";
  boton.style.left = "80vw";
  boton.style.transform = "translate(-50%, -50%)";
  if (mql.matches) {
    boton.style.width = "30px";
    boton.style.height = "30px";
    boton.style.top = "22vh";
    boton.style.fontSize = "12px";
    boton.style.left = "90vw";
    texto.style.top = "50vh";
    texto.style.left = "50vw";
    texto.style.width = "80vw";
  }
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
  setTimeout(popup, 10000);
}

popup();

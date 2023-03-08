function elegirArchivoAleatorio() {
  let archivos = ["preguntas1.txt", "preguntas2.txt"];

  return archivos[Math.floor(Math.random() * archivos.length)];
}

let eleccion = elegirArchivoAleatorio();	// Selecciona un archivo aleatorio
// Leer el archivo de preguntas
fetch('../documents/' + eleccion)
  .then((response) => response.text())
  .then((data) => {
    // Separar las preguntas por línea
    let preguntas = data.split("\n");
    let formulario = document.getElementById("formulario");
    let preguntasRandom = shuffle(preguntas); // Mezcla las preguntas aleatoriamente
    formulario.appendChild(document.createElement("br"));
    // Agregar cada pregunta al formulario
    preguntasRandom.forEach((pregunta) => {
      // Separar el ID de la pregunta y la pregunta misma
      let preguntaData = pregunta.split(":");
      let preguntaId = preguntaData[0].trim();
      let preguntaTexto = preguntaData[1].trim();

      // Crear los elementos de la pregunta
      let label = document.createElement("label");
      label.for = preguntaId;
      label.className = "Pregunta"
      label.textContent = preguntaTexto;
      formulario.appendChild(label);
      formulario.appendChild(document.createElement("br"));
      let input = document.createElement("input");
      input.type = "text";
      input.required = true;
      input.className = "EntradaPregunta"
      input.id = preguntaId;
      input.name = preguntaId;
      formulario.appendChild(input);
      formulario.appendChild(document.createElement("br"));
    });
    formulario.appendChild(document.createElement("br"));
  });

// Función para mezclar aleatoriamente un array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Función para enviar las respuestas
function enviarRespuestas() {
  // Obtener los valores de las respuestas
  let respuestas = {};
  let inputs = document.getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    respuestas[inputs[i].id] = inputs[i].value;
  }

  // Leer el archivo de respuestas
  fetch('../documents/' + eleccion)
    .then((response) => response.text())
    .then((data) => {
      // Separar las respuestas por línea
      let respuestasCorrectas = data.split("\n");
      let respuestasCorrectasMap = {};

      // Crear un mapa con las respuestas correctas
      respuestasCorrectas.forEach((respuesta) => {
        let respuestaData = respuesta.split(":");
        let preguntaId = respuestaData[0].trim();
        let respuestaTexto = respuestaData[2].trim();
        respuestasCorrectasMap[preguntaId] = respuestaTexto;
      });

      // Verificar las respuestas
      let resultado = {};
      for (let preguntaId in respuestas) {
        if (respuestas.hasOwnProperty(preguntaId) && preguntaId != "") {
          let respuesta = respuestas[preguntaId];
          if (respuesta === respuestasCorrectasMap[preguntaId]) {
            resultado[preguntaId] = "Correcto";
            document.getElementById(preguntaId).style.borderColor = "darkgreen";
          } else {
            document.getElementById(preguntaId).style.borderColor = "#80004a";
            resultado[preguntaId] = "Incorrecto";
          }
        }
      } // Mostrar el resultado
      let resultadoTexto = "";
      for (let preguntaId in resultado) {
        if (resultado.hasOwnProperty(preguntaId)) {
          resultadoTexto += preguntaId + ": " + resultado[preguntaId] + "\n";
        }
      }
    });
}

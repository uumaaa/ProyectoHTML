// Leer el archivo de preguntas
fetch("preguntas.txt")
  .then((response) => response.text())
  .then((data) => {
    // Separar las preguntas por línea
    let preguntas = data.split("\n");
    let formulario = document.getElementById("formulario");

    // Agregar cada pregunta al formulario
    preguntas.forEach((pregunta) => {
      // Separar el ID de la pregunta y la pregunta misma
      let preguntaData = pregunta.split(":");
      let preguntaId = preguntaData[0].trim();
      let preguntaTexto = preguntaData[1].trim();

      // Crear los elementos de la pregunta
      let label = document.createElement("label");
      label.for = preguntaId;
      label.textContent = preguntaTexto;
      formulario.appendChild(label);

      let input = document.createElement("input");
      input.type = "text";
      input.id = preguntaId;
      input.name = preguntaId;
      formulario.appendChild(input);

      formulario.appendChild(document.createElement("br"));
      formulario.appendChild(document.createElement("br"));
    });
  });

// Función para enviar las respuestas
function enviarRespuestas() {
  // Obtener los valores de las respuestas
  let respuestas = {};
  let inputs = document.getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    respuestas[inputs[i].id] = inputs[i].value;
  }

  // Aquí puedes agregar el código para enviar las respuestas a un servidor o procesarlas de alguna forma
  console.log(respuestas);
}

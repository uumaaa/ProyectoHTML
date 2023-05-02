var materiaMD = document.querySelector(".MateriaMD");
var materiaA = document.querySelector(".MateriaA");
var materiaCI = document.querySelector(".MateriaCI");
var materiaCD = document.querySelector(".MateriaCD");
var materiaPE = document.querySelector(".MateriaPE");
materiaMD.addEventListener("mouseover", cambiarColorTexto);
materiaA.addEventListener("mouseover", cambiarColorTexto);
materiaCI.addEventListener("mouseover", cambiarColorTexto);
materiaCD.addEventListener("mouseover", cambiarColorTexto);
materiaPE.addEventListener("mouseover", cambiarColorTexto);
function cambiarColorTexto(e) {
  let currentElement = e.currentTarget;
  if (currentElement.className == "MateriaMD") {
    currentElement.childNodes[1].childNodes[3].style.backgroundColor =
      "darkgreen";
  }
  if (currentElement.className == "MateriaA") {
    currentElement.childNodes[1].childNodes[3].style.backgroundColor =
      "darkviolet";
  }
  if (currentElement.className == "MateriaCI") {
    currentElement.childNodes[1].childNodes[3].style.backgroundColor = "orange";
  }
  if (currentElement.className == "MateriaCD") {
    currentElement.childNodes[1].childNodes[3].style.backgroundColor =
      "darkred";
  }
  if (currentElement.className == "MateriaPE") {
    currentElement.childNodes[1].childNodes[3].style.backgroundColor =
      "darkblue";
  }
}

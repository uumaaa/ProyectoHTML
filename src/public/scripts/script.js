
function formatAsignatura(asignatura) {
    var palabras = asignatura.split('_');
    var formateado = palabras.map(function (palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return formateado.join(' ');
}

window.onload = function () {
    var asignaturaElement = document.querySelector('.asig');
    asignaturaElement.textContent = formatAsignatura(asignaturaElement.textContent);
};

var productos = document.querySelector(".Productos");
fetch("../documents/productos.json")
  .then((response) => response.text())
  .then((data) => {
    let productosLeidos = JSON.parse(data);
    let cantidadProductos = productosLeidos.length;
    let cantidadFilas = Math.ceil(cantidadProductos / 3);
    productos.style.gridTemplateRows = "repeat(" + cantidadFilas + ",1fr)";
    productos.style.height = "" + cantidadFilas * 45.5 + "vh";
    productosLeidos.forEach((producto) => {
      let contenedor = document.createElement("section");
      contenedor.classList.add("Producto");
      let nombreProducto = producto.nombreproducto;
      let precioProducto = producto.precio;
      let calificacionProducto = producto.rating;
      let urlProducto = producto.imagen;
      let imagenOutput = document.createElement("img");
      let nombreOutput = document.createElement("p");
      let precioOutput = document.createElement("p");
      let calificacionOutput = document.createElement("p");
      let botonComprar = document.createElement("button");
      imagenOutput.src = urlProducto;
      botonComprar.addEventListener("click", comprarProducto);
      botonComprar.classList.add("botonComprar");
      botonComprar.textContent = "Comprar";
      nombreOutput.textContent = nombreProducto;
      precioOutput.textContent = "$" + precioProducto;
      calificacionOutput.textContent = calificacionProducto;
      contenedor.appendChild(imagenOutput);
      contenedor.appendChild(nombreOutput);
      contenedor.appendChild(precioOutput);
      contenedor.appendChild(calificacionOutput);
      contenedor.appendChild(botonComprar);
      productos.appendChild(contenedor);
    });
  });

function comprarProducto(event) {
  let botonPresionado = event.currentTarget;
  let padre = botonPresionado.parentNode;
  let datos = padre.childNodes;
  let imagenProducto = datos[0].cloneNode(true);
  let nombreProducto = datos[1].cloneNode(true);
  let precioProducto = datos[2].cloneNode(true);
  let calificacionProducto = datos[3].cloneNode(true);
  let productoMaximizado = document.createElement("article");
  let cerrar = document.createElement("p");
  cerrar.textContent = "X";
  cerrar.classList.add("Cerrar");
  cerrar.addEventListener("click", borrarProducto);
  productoMaximizado.classList.add("productoMaximizado");
  let datosMaximizados = document.createElement("div");
  datosMaximizados.classList.add("Datos");
  datosMaximizados.appendChild(nombreProducto);
  datosMaximizados.appendChild(precioProducto);
  datosMaximizados.append(calificacionProducto);
  productoMaximizado.appendChild(datosMaximizados);
  productoMaximizado.appendChild(imagenProducto);
  document.body.appendChild(productoMaximizado);
  document.body.appendChild(cerrar);
}

function borrarProducto() {
  let botonCerrar = document.querySelector(".Cerrar");
  let productoMaximizado = document.querySelector(".productoMaximizado");
  botonCerrar.remove();
  productoMaximizado.remove();
}

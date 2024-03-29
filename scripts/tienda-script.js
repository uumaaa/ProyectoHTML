var productos = document.querySelector(".Productos");

function cargarProductos(a) {
  productos.innerHTML = "";
  if (a === 0) {
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
          let nombreOutput = document.createElement("h3");
          let precioOutput = document.createElement("p");
          let calificacionOutput = document.createElement("p");
          let botonComprar = document.createElement("button");
          imagenOutput.src = urlProducto;
          botonComprar.addEventListener("click", comprarProducto);
          botonComprar.classList.add("botonComprar");
          botonComprar.textContent = "Comprar";
          nombreOutput.textContent = nombreProducto;
          precioOutput.textContent = "Precio:  $" + precioProducto;
          calificacionOutput.textContent =
            "Calificacion: " + calificacionProducto;
          contenedor.appendChild(imagenOutput);
          contenedor.appendChild(nombreOutput);
          contenedor.appendChild(precioOutput);
          contenedor.appendChild(calificacionOutput);
          contenedor.appendChild(botonComprar);
          productos.appendChild(contenedor);
        });
      });
  } else {
    let productosLeidos = a;
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
      let nombreOutput = document.createElement("h3");
      let precioOutput = document.createElement("p");
      let calificacionOutput = document.createElement("p");
      let botonComprar = document.createElement("button");
      imagenOutput.src = urlProducto;
      botonComprar.addEventListener("click", comprarProducto);
      botonComprar.classList.add("botonComprar");
      botonComprar.textContent = "Comprar";
      nombreOutput.textContent = nombreProducto;
      precioOutput.textContent = "Precio:  $" + precioProducto;
      calificacionOutput.textContent = "Calificacion: " + calificacionProducto;
      contenedor.appendChild(imagenOutput);
      contenedor.appendChild(nombreOutput);
      contenedor.appendChild(precioOutput);
      contenedor.appendChild(calificacionOutput);
      contenedor.appendChild(botonComprar);
      productos.appendChild(contenedor);
    });
  }
}

function comprarProducto(event) {
  let botonPresionado = event.currentTarget;
  let padre = botonPresionado.parentNode;
  let datos = padre.childNodes;
  let imagenProducto = datos[0].cloneNode(true);
  let nombreProducto = datos[1].cloneNode(true);
  let precioProducto = datos[2].cloneNode(true);
  let calificacionProducto = datos[3].cloneNode(true);
  let productoMaximizado = document.createElement("article");
  let botonesDiv = document.createElement("div");
  let botonCerrar = document.createElement("button");
  let botonAgregar = document.createElement("button");
  let blurEffect = document.createElement("section");
  blurEffect.style.width = "100vw";
  blurEffect.style.height = "100vh";
  blurEffect.style.position = "absolute";
  blurEffect.style.top = "0";
  blurEffect.style.zIndex = "5";
  blurEffect.id = "blurEffect";
  blurEffect.style.backdropFilter = "blur(5px)";
  botonesDiv.classList.add("Botones");
  botonCerrar.textContent = "Cancelar";
  botonAgregar.textContent = "Agregar al carrito";
  botonCerrar.addEventListener("click", borrarProducto);
  botonAgregar.addEventListener("click", agregarCarrito);
  botonesDiv.appendChild(botonAgregar);
  botonesDiv.appendChild(botonCerrar);
  productoMaximizado.classList.add("productoMaximizado");
  let datosMaximizados = document.createElement("div");
  datosMaximizados.classList.add("Datos");
  datosMaximizados.appendChild(nombreProducto);
  datosMaximizados.appendChild(precioProducto);
  datosMaximizados.appendChild(calificacionProducto);
  datosMaximizados.appendChild(botonesDiv);
  productoMaximizado.appendChild(datosMaximizados);
  productoMaximizado.appendChild(imagenProducto);
  document.body.appendChild(productoMaximizado);
  document.body.appendChild(blurEffect);
}

const form = document.getElementById("Filtros");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const categoriasSeleccionadas = [];

  const checkboxCategorias = form.querySelectorAll('input[type="checkbox"]');
  checkboxCategorias.forEach(function (checkbox) {
    if (checkbox.checked) {
      categoriasSeleccionadas.push(checkbox.parentNode.textContent.trim());
    }
  });
  fetch("../documents/productos.json")
    .then((response) => response.json())
    .then((productos) => {
      const productosFiltrados = productos.filter((producto) =>
        producto.categorias.some((categoria) =>
          categoriasSeleccionadas.includes(categoria)
        )
      );
      console.log("hl");
      cargarProductos(productosFiltrados);
    })
    .catch(function (error) {
      console.error(error);
    });
});

function borrarProducto(event) {
  let botonCerrar = event.currentTarget;
  let productoMaximizado = document.querySelectorAll(".productoMaximizado");
  botonCerrar.remove();
  for (let pM of productoMaximizado) {
    pM.remove();
  }
  blurEffect.style.backdropFilter = "blur(0)";
  blurEffect.remove();
}
var carritoDeCompra = document.querySelector(".ProductosSeleccionados");
var conteoProductos = 0;
function agregarCarrito(event) {
  let botonAgregar = event.currentTarget;
  let productoMaximizado = document.querySelector(".productoMaximizado");
  let hijosProducto = productoMaximizado.childNodes;
  let productoCarrito = document.createElement("section");
  productoCarrito.classList.add("productoCarrito");
  let datosProducto = document.createElement("div");
  datosProducto.classList.add("DatosChicos");
  let nombreProducto = document.createElement("p");
  let precioProducto = document.createElement("p");
  let imagenProducto = hijosProducto[1].cloneNode();
  if (conteoProductos == 0) {
    carritoDeCompra.innerHTML = "";
  }
  conteoProductos++;
  nombreProducto.textContent = hijosProducto[0].childNodes[0].textContent;
  precioProducto.textContent = hijosProducto[0].childNodes[1].textContent;
  datosProducto.appendChild(nombreProducto);
  datosProducto.appendChild(precioProducto);
  productoCarrito.appendChild(datosProducto);
  productoCarrito.appendChild(imagenProducto);
  carritoDeCompra.appendChild(productoCarrito);
  botonAgregar.remove();
  blurEffect.style.backdropFilter = "blur (0)";
  blurEffect.remove();
  productoMaximizado.remove();
}

cargarProductos(0);

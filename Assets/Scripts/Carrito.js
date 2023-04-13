/** Para recuperar la lista de productos del carrito desde el localStorage: */

const productosCarritoArrayStr = localStorage.getItem("productosCarritoArray");
const parsedproductosCarritoArray = JSON.parse(productosCarritoArrayStr);

/** Para crear la tabla de productos en el carrito: */
const createCarrito = () => {
  const carrito = document.getElementById("table-body");
  let carritoHTML = "";
  for (const id in parsedproductosCarritoArray) {
    const element = parsedproductosCarritoArray[id];
    carritoHTML =
      carritoHTML +
      `<tr id="${element.id}_carritoLista">` +
      '<td>' +
      `<img class="cart-img" src="${element.imagen_Src}" alt="">` +
      '</td>' +
      '<td>' +
      `${element.nombre_Producto}` +
      '</td>' +
      '<td>' +
      `$${element.precio}` +
      '</td>' +
      '<td>' +
      `<input class="cart-quantity" type="number" id="${element.id}_cantidad" min="1" max="${element.existencias}" value="${element.cantidad || 1}" onchange="actualizarCarrito(this)">` +
      '</td>' +
      '<td>' +
      `<a id="${element.id}_carritoEliminar" onclick="eliminarDelCarrito(this)" href="#" class="btn"><img class="remove-button" src="../Assets/images/Icons/icons8-eliminar-30.png" alt="boton-eliminar"></a>` +
      '</td>' +
      '</tr>';
  }
  carrito.innerHTML = carritoHTML;
};

createCarrito();

// Actualizar Totales
const actualizarTotales = () => {
  let subtotal = 0;
  let impuesto = 0;
  let envio = 120;
  let total = 0;

  const impuestoPorcentaje = 0.16;

  // Iteramos por todos los productos en el carrito y sumamos sus precios
  parsedproductosCarritoArray.forEach((producto) => {
    // Verificamos que la cantidad sea un número
    const cantidad = isNaN(parseInt(producto.cantidad)) ? 1 : parseInt(producto.cantidad);
    subtotal += producto.precio * cantidad;
  });

  // Calculamos el impuesto y el total
  impuesto = subtotal * impuestoPorcentaje;
  total = subtotal + envio;

  // Actualizamos los elementos HTML con los nuevos valores
  document.getElementById("subtotal").innerHTML = `$${subtotal.toFixed(2)}`;
  document.getElementById("iva").innerHTML = `$${impuesto.toFixed(2)}`;
  document.getElementById("envio").innerHTML = `$${envio.toFixed(2)}`;
  document.getElementById("total").innerHTML = `$${total.toFixed(2)}`; // Agregar esta línea
};

// Llamamos a la función para actualizar los totales
actualizarTotales();

/** Para guardar los cambios realizados en el carrito en el localStorage: */
const guardarCarritoEnLocalStorage = (productos) => {
  const productosCarritoArrayJson = JSON.stringify(productos);
  localStorage.setItem("productosCarritoArray", productosCarritoArrayJson);
};


/** Para agregar un producto al carrito desde la lista de deseos: */
const agregarDelDeseadoAlCarrito = (objetoHTML) => {
  const id = objetoHTML.id.substring(0, objetoHTML.id.indexOf("_"));
  parsedproductosDeseadosArray.forEach(element => {
    if (element.id == parseInt(id)) {
      element.cantidad = 1; // Inicializar cantidad a 1
      parsedproductosCarritoArray.push(element);
      guardarCarritoEnLocalStorage(parsedproductosCarritoArray);
      createCarrito();
      actualizarTotales();
    }
  });
};

/** Para actualizar la cantidad de un producto en el carrito: */
const actualizarCarrito = (objetoHTML) => {
  const id = objetoHTML.id.substring(0, objetoHTML.id.indexOf("_"));
  const cantidad = parseInt(document.getElementById(`${id}_cantidad`).value);
  parsedproductosCarritoArray.forEach(element => {
    if (element.id == parseInt(id)) {
      element.cantidad = cantidad;
      guardarCarritoEnLocalStorage(parsedproductosCarritoArray);
      createCarrito();
      actualizarTotales();
    }
  });
};

/** Para eliminar un producto del carrito: */
const eliminarDelCarrito = (objetoHTML) => {
  const id = objetoHTML.id.substring(0, objetoHTML.id.indexOf("_"));
  parsedproductosCarritoArray.forEach((element, index) => {
    if (element.id == parseInt(id)) {
      parsedproductosCarritoArray.splice(index, 1);
      guardarCarritoEnLocalStorage(parsedproductosCarritoArray);
      createCarrito();
      actualizarTotales();
    }
  });
};

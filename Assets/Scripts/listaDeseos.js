// Obtiene el cuerpo de la lista de deseos con el id tbody
// console.log(tablaBody);

// Función para agregar un producto a la lista de deseos
function agregarProducto(producto) {
  const tablaBody = document.getElementById("table-body");
  // Crea una nueva fila para la tabla
  const fila = document.createElement('tr');

  // Agrega la imagen 'X' para implementar posteriormente la eliminacion de un item en la tabla.
  const celdaEliminar = document.createElement('td');
  const imagenEliminar = document.createElement('img');
  imagenEliminar.src = '../Assets/images/Icons/icons8-eliminar-30.png';
  imagenEliminar.alt = 'boton-eliminar';
  imagenEliminar.classList.add('remove-button');
  celdaEliminar.appendChild(imagenEliminar);
  fila.appendChild(celdaEliminar);

  // Agrega la imagen del producto.
  const celdaImagen = document.createElement('td');
  const imagenProducto = document.createElement('img');
  imagenProducto.src = '/Assets/images/Productos/gomitas.jpg';
  imagenProducto.alt = '';
  imagenProducto.srcset = '';
  imagenProducto.classList.add('wishlist-img');
  celdaImagen.appendChild(imagenProducto);
  fila.appendChild(celdaImagen);

  // Agrega el nombre del producto a la fila
  const celdaTitulo = document.createElement('td');
  celdaTitulo.textContent = producto.title;
  fila.appendChild(celdaTitulo);

  // Agrega el precio del producto a la fila
  const celdaPrecio = document.createElement('td');
  celdaPrecio.textContent = producto.price;
  fila.appendChild(celdaPrecio);

  // Agrega el estatus de 0 a la celda estatus
  const celdaStatus = document.createElement('td');
  celdaStatus.textContent = 0;
  fila.appendChild(celdaStatus);

  // Agrega el botón "Añadir al carrito" a la fila
  const celdaBoton = document.createElement('td');
  const boton = document.createElement('a');
  boton.href = '#';
  boton.textContent = 'Añadir al carrito';
  boton.classList.add('btn');
  celdaBoton.appendChild(boton);
  fila.appendChild(celdaBoton);

  // Agregar la fila creada previamente a la tabla de la lista de deseos
  console.log(fila);
  console.log(tablaBody);
  tablaBody.appendChild(fila);
}

// Obtener el botón con la clase "btn-fav"
const btnFav = document.querySelector('.btn-fav');

// Al hacer clic en el boton de favoritos se dispara la funcion.
btnFav.addEventListener('click', (event) => {
  // Previene que el enlace predeterminado se abra
  event.preventDefault();

  // Obtenemos el título y el precio del producto desde la card en productos.html
  const title = document.querySelector('.card-title1').textContent;
  const price = document.querySelector('.card-text1').textContent;

  // Creacion de un objeto con el título y el precio para pasarlo a la funcion agregarProducto.
  const product = {
    title,
    price
  };

  // Para efectos de debbuging
  console.log(product);

  // Agregar el producto a la lista de deseos
  agregarProducto(product);
});

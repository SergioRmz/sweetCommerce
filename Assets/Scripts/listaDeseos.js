// Función para agregar un producto a la lista de deseos
function agregarProducto(producto) {
  // Crea una nueva fila para la tabla
  const fila = document.createElement('tr');

  // Se agregan elementos a la fila.

  // Agrega la imagen 'x'
  const celdaEliminar = document.createElement('td');
  const imagenEliminar = document.createElement('img');
  imagenEliminar.src = '../Assets/images/Icons/icons8-eliminar-30.png';
  imagenEliminar.alt = 'boton-eliminar';
  imagenEliminar.classList.add('remove-button');
  celdaEliminar.appendChild(imagenEliminar);
  // fila.appendChild(celdaEliminar);
  

  // Imagen del producto
  const celdaImagen = document.createElement('td');
  const imagenProducto = document.createElement('img');
  imagenProducto.src = '/Assets/images/Productos/gomitas.jpg';
  imagenProducto.alt = '';
  imagenProducto.srcset = '';
  imagenProducto.classList.add('wishlist-img');
  celdaImagen.appendChild(imagenProducto);
  // fila.appendChild(celdaImagen);

  // Nombre del producto
  const celdaTitulo = document.createElement('td');
  celdaTitulo.textContent = producto.title;
  // fila.appendChild(celdaTitulo);

  // Precio del producto
  const celdaPrecio = document.createElement('td');
  celdaPrecio.textContent = producto.price;
  // fila.appendChild(celdaPrecio);

  // Estatus en almacen
  const celdaStatus = document.createElement('td');
  celdaStatus.textContent = 0;
  // fila.appendChild(celdaStatus);

  // Boton añadir carrito
  const celdaBoton = document.createElement('td');
  const boton = document.createElement('a');
  boton.href = '#';
  boton.textContent = 'Añadir al carrito';
  boton.classList.add('btn');
  celdaBoton.appendChild(boton);

  // fila.appendChild(celdaBoton);

  // Agregar la fila creada previamente a la tabla de la lista de deseos

  // tablaBody.appendChild(fila);

  const filaCompleta = {
    "celdaEliminar": celdaEliminar,
    "celdaImagen" : celdaImagen,
    "celdaTitulo" : celdaTitulo,
    "celdaPrecio": celdaPrecio,
    "celdaBoton": celdaBoton
  };


  // localStorage.setItem("elemento2", JSON.stringify(filaCompleta));

};

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
  // console.log(product);

  // Agregar el producto a la lista de deseos
  agregarProducto(product);

});








/*//table-body

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
        "celdaImagen": celdaImagen,
        "celdaTitulo": celdaTitulo,
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

});*/




/**Para recuperarlo: obtien json del local estorage utilizando el identificador que se le dio */
const productosDeseadosArrayStr = localStorage.getItem("productosDeseadosArray");

/**Para convertir el json en el objeto original */
let parsedproductosDeseadosArray = JSON.parse(productosDeseadosArrayStr);



//console.log(parsedproductosArray);

const createListaDeseados = () => {
    const listaDeseados = document.getElementById("table-body");

    let listaDeseadosHTML = "";
    for (const id in parsedproductosDeseadosArray) {
        const element = parsedproductosDeseadosArray[id];

        listaDeseadosHTML =
            listaDeseadosHTML +
            `<tr id="${element.id}_deseadoLista">` +
            '<td>' +
            `<a id="${element.id}_deseadoEliminar" onclick="eliminarDeseado(this)"  href="#" class="btn"><img class="remove-button" src="../Assets/images/Icons/icons8-eliminar-30.png" alt="boton-eliminar"></a>` +
            '</td>' +
            '<td>' +
            `<img class="wishlist-img" src="${element.imagenSrc}" alt="">` +
            '</td>' +
            '<td>' +
            `${element.nombreProducto}` +
            '</td>' +
            '<td>' +
            `$${element.precio}` +
            '</td>' +
            '<td>' +
            `${element.existencias}` +
            '</td>' +
            '<td>' +
            `<a id="${element.id}_deseado" class="btn"  onclick="guardarCarrito(this)" href="#">Añadir al carrito</a>` +
            '</td>' +
            '</tr>';
    }

    listaDeseados.innerHTML =
        listaDeseadosHTML;

    console.log(listaDeseados);
};

createListaDeseados();



const guardarCarrito = (objetoHTML) => {

    console.log(objetoHTML.id.substring(0, objetoHTML.id.indexOf("_")));

    const id = objetoHTML.id.substring(0, objetoHTML.id.indexOf("_"));
    /**Se obtiete el arrglo del carrito en localstorage  */
    const productosCarritoArrayStr = localStorage.getItem("productosCarritoArray");
    const parsedproductosCarritoArray = JSON.parse(productosCarritoArrayStr);
    /*Recorrede el arrglo del productos que se recupero del localstorage  */
    parsedproductosDeseadosArray.forEach(element => {
        /*se comparan los ids de los productos del arrglo con el id que se obtuvodel elemento html que recibio el evento,
         el cual se obtiene al utilizar la funcion substring del indice 0 del string del id del elemento hasta el indice 
         en el que se encuentra un guion bajo
         */
        if (element.id == parseInt(id)) {
            /**Una vez encontrado el producto con el ID correspondiente se agrega al arreglo del carrito */
            parsedproductosCarritoArray.push(element);
            console.log("El elegido carrito", element);
        }
    });
    /**Se toma el arreglo creado con el producto que se acaba de ingresar y se vuelve a guardar en el localStorage */
    const productosCarritoArrayJson = JSON.stringify(parsedproductosCarritoArray);
    localStorage.setItem("productosCarritoArray", productosCarritoArrayJson);

    const productosCarritoArrayStr2 = localStorage.getItem("productosCarritoArray");
    const parsedproductosCarritoArray2 = JSON.parse(productosCarritoArrayStr2);
    console.log("LocalStorage Carrito", parsedproductosCarritoArray2);
}


const eliminarDeseado = (objetoHTML) => {
    console.log(objetoHTML.id.substring(0, objetoHTML.id.indexOf("_")));
    const id = objetoHTML.id.substring(0, objetoHTML.id.indexOf("_"));

    parsedproductosDeseadosArray.forEach(element => {
        if (element.id == parseInt(id)) {
            const index = parsedproductosDeseadosArray.indexOf(element);parsedproductosDeseadosArray = parsedproductosDeseadosArray.filter(e => parsedproductosDeseadosArray.indexOf(e) != index);
            document.getElementById(`${id}_deseadoLista`).remove();
        }
    });

    const productosDeseadosArrayJson = JSON.stringify(parsedproductosDeseadosArray);
    localStorage.setItem("productosDeseadosArray", productosDeseadosArrayJson);

    console.log(JSON.parse(localStorage.getItem("productosDeseadosArray")));
}
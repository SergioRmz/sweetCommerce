let parsedproductosArray;
let productosDeseadosArray;
let productosCarritoArray;
//////////////////////////////////////////////////////////////////////////
//FETCH PARA METODO GET

let productos = [];
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN ='https://sweetcommerceback-production.up.railway.app/sweetCommerce/productos/'; //URL a donde se hace la petición
const getData =  () => {
  //div_Productos es el div donde se va a agregar los productos
  fetch(URL_MAIN, {
    method: 'get' //tipo de método
})
.then((response) => response.json()
.then((json) =>{ 
setData(json)}));
}


const setData =(dataFromDB) =>{ 
    if (localStorage.getItem("productosArray") == null) {
    const productosArrayJson = JSON.stringify(dataFromDB);
    localStorage.setItem("productosArray", productosArrayJson);
  } else {
    const productosArrayStr = localStorage.getItem("productosArray");
    parsedproductosArray = JSON.parse(productosArrayStr);
  }
  console.log("dataFromDB", dataFromDB);
  productos = dataFromDB;
  console.log("productos", productos);
  seleccionProductos(productos);
  return productos;  
}





// function addItems(div_Productos) { //div_Productos es el div donde se va a agregar los productos
   
//     fetch(URL_MAIN, {
//         method: 'get' //tipo de método
//     }).then(function(response) {//response es la respuesta del servidor
//         response.json().then(function (json) { //json es el objeto que se obtiene del servicio
//             console.log("ELJSON",json); //imprime el json
//             console.log(json.length); //imprime el tamaño del json
//             productos=json; //se guarda el json en la variable productos
//             Array.from(json).forEach((p, index) => { //Toma el JSON, si es un arreglo haces el forEach. Si no lo es, mandas el error.
//               console.log("Imprimir P", p);  
//               div_Productos.innerHTML  
//             }); // foreach para agregar los productos al div del HTML
//         });//then
//     }).catch(function(err) { //si hay un error
//         console.log(err); //imprime el error
//     });
//     console.log(document.getElementById("div_Productos")); //imprime el div donde se va a agregar los productos
//     console.log("Hola");
   
// }// addItems

// window.addEventListener("load", function (){ //cuando se cargue la página
//     let div = document.getElementById("div_Productos"); //div donde se va a agregar los productos
//     addItems(div); //se llama a la función addItems
   
// });
// addItems();



// FETCH PARA HACER EL METODO POST

// Este es nuestro cuerpo del POST


/*
const data =     
    {nombre: "Sopa Maruchan de Res",
    descripcion: "Sopa Maruchan sabor Res de 150 grs",
    precio: 17.0,
    url_Imagen: "sopaMaruchanRes.jpg"
};

*/
// fetch(URL_MAIN, { //URL del servicio a donde se hara el POST
//   method: 'POST', // or 'PUT' 
//   headers: { // se agrega el header
//     'Content-Type': 'application/json', //tipo de contenido
//   },
//   body: JSON.stringify(data), //se agrega el cuerpo del POST
// })
// .then(response => response.json()) //se obtiene la respuesta del servidor
// .then(data => { //se obtiene el json
//   console.log('Success:', data); //se imprime el json
// })
// .catch((error) => { //si hay un error
//   console.error('Error:', error); //se imprime el error
// });


//MetodoGET
//MetodoPOST
//MetodoPUT
//MetodoDELETE

///////////////////////////////////////////////////////////////////////////////////////

// const obtenerListaProductos = () => {
//   if (localStorage.getItem("productosArray") == null) {
//     const productosArrayJson = JSON.stringify(productosArray);
//     localStorage.setItem("productosArray", productosArrayJson);
//   } else {
//     const productosArrayStr = localStorage.getItem("productosArray");
//     parsedproductosArray = JSON.parse(productosArrayStr);
//   }
// }


const obtenerListaCarrito = () => {
  if (localStorage.getItem("productosCarritoArray") == null) {
    productosCarritoArray = [];
    const productosCarritoArrayJson = JSON.stringify(productosCarritoArray);
    localStorage.setItem("productosCarritoArray", productosCarritoArrayJson);
  } else {
    const productosCarritoArrayStr = localStorage.getItem("productosCarritoArray");
    productosCarritoArray = JSON.parse(productosCarritoArrayStr);
  }

  console.log("productosCarritoArray", productosCarritoArray);
}

const obtenerListaDeseado = () => {
  if (localStorage.getItem("productosDeseadosArray") == null) {
    productosDeseadosArray = [];
    const productosDeseadosArrayJson = JSON.stringify(productosDeseadosArray);
    localStorage.setItem("productosDeseadosArray", productosDeseadosArrayJson);
  } else {
    const productosDeseadosArrayStr = localStorage.getItem("productosDeseadosArray");
    productosDeseadosArray = JSON.parse(productosDeseadosArrayStr);
  }

  console.log("productosDeseadosArray", productosDeseadosArray);
}


obtenerListaCarrito();
obtenerListaDeseado();

//Generando container para mostrar productos en las paginas de categorías

///crear carrusel
const createCarousel= (carouselId, carouselItemClass, elementArray) => {
  const carruselPopular = document.getElementById(carouselId);

  // Se asigna la clase

  let carouselItemsHTML =
    '<div class="carousel-inner carruselInner justify-content-center"  role="listbox">';
  let count = 0;
  for (const id in elementArray) {
    const element = elementArray[id];
    let banderaDeseadoImg;
    let isActive = count == 0 ? " active" : "";
    carouselItemsHTML =
      carouselItemsHTML +
      `<div class="${carouselItemClass}${isActive}">` +
      '<div class="col-md-3"><div class="card  h-100">' +
      "<!-- Se agrega un header a la tarjeta y se coloca icono para wishList -->" +
      '<div class="card-header bg-transparent">';


    if (productosDeseadosArray == null || productosDeseadosArray.length == 0) {
      carouselItemsHTML =
        carouselItemsHTML + `<a id="${element.id}_deseado" onclick="guardar(this,2)" href="#" class="btn"><img id="${element.id}_deseadoImg" name="noDeseado" src="./Assets/images/Icons/icons8-me-gusta_no_background-48.png" alt="AgregaWishList" width="30px"/></a>`;
      banderaDeseadoImg = true;
    } else {
       banderaDeseadoImg = false;
      let countImg = 0;
      productosDeseadosArray.forEach((elementDeseado, index, arr) => {
        if ((elementDeseado.id == element.id) && banderaDeseadoImg == false) {
          carouselItemsHTML =
            carouselItemsHTML + `<a id="${element.id}_deseado" onclick="guardar(this,2)" href="#" class="btn"><img id="${element.id}_deseadoImg" name="deseado" src="./Assets/images/Icons/icons8-me-gusta-48.png" alt="AgregaWishList" width="30px"/></a>`;
          banderaDeseadoImg = true;
        }
        countImg++;
        if ((arr.length == countImg) && (banderaDeseadoImg == false)) {
          carouselItemsHTML =
            carouselItemsHTML + `<a id="${element.id}_deseado" onclick="guardar(this,2)" href="#" class="btn"><img id="${element.id}_deseadoImg" name="noDeseado" src="./Assets/images/Icons/icons8-me-gusta_no_background-48.png" alt="AgregaWishList" width="30px"/></a>`;
        }
      });

      banderaDeseadoImg = false;
    }

    carouselItemsHTML =
      carouselItemsHTML + "</div>" +
      "<img " +
      'class="card-img W-100"' +
      `src=".${element.imagen_Src}"` +
      'alt="Card image cap"' +
      'width=""/>' +
      '<div class="card-body">' +
      `<h5 class="card-title">${element.nombre_Producto}</h5>` +
      `<p class="card-text">${element.precio}</p>` +
      "</div>" +
      "<!-- Se agrega un footer a la tarjeta y se coloca icono para añadirCarrito-->" +
      '<div class="card-footer bg-transparent">' +
      '<small class="text-muted">' +
      '<a href="#" class="btn1">' +
      `<button id="${element.id}_carrito" onclick="guardar(this,1)" class="add">Añadir</button></a>` +
      "</small>" +
      "</div>" +
      "</div>" +
      "<!-- FIN CARD -->" +
      "</div></div>";
    count++;
  }

  carruselPopular.innerHTML =
    carouselItemsHTML +
    '</div> <a class="carousel-control-prev bg-transparent w-aut"' +
    `href="#${carouselId}"` +
    'role="button"' +
    'data-bs-slide="prev">' +
    "<span " +
    'class="carousel-control-prev-icon"' +
    ' aria-hidden="true"' +
    " ></span>" +
    " </a>" +
    "<a " +
    'class="carousel-control-next bg-transparent w-aut"' +
     `href="#${carouselId}" `+
    ' role="button"' +
    ' data-bs-slide="next"' +
    ">" +
    "<span " +
    'class="carousel-control-next-icon"' +
    'aria-hidden="true"' +
    "></span>" +
    "</a>";

  console.log(carruselPopular);
};

const seleccionProductos = (jsonFromDb) => {
  
  const productoPopularesArray = [];
  const productoNuevosArray = [];

  for (const key in jsonFromDb) {
    if (jsonFromDb[key].popular) {
      productoPopularesArray.push(jsonFromDb[key]);
    } else if (jsonFromDb[key].nuevo) {
      productoNuevosArray.push(jsonFromDb[key]);
    }
  }

  console.log("populares", productoPopularesArray);
  console.log("nuevos", productoNuevosArray);

  const carouselPopularesId = "popularesCarousel";
  const carouselItemPopulares =
    "carousel-item popularesItem categoriaItem justify-content-center";
  createCarousel(carouselPopularesId, carouselItemPopulares, productoPopularesArray);

  const carouselNuevosId = "populares2Carousel";
  const carouselItemNuevos =
    "carousel-item populares2Item categoriaItem justify-content-center";
  createCarousel(carouselNuevosId, carouselItemNuevos, productoNuevosArray);

  arranqueCarruseles();

};




getData();




const carruselFuncion = (grupoDeElementos) => {

  console.log("items", grupoDeElementos);
  grupoDeElementos.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    //console.log("next", next);
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        //
        next = grupoDeElementos[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
};
const arranqueCarruseles = () =>{
  let categoriasItems = document.querySelectorAll(
    "#categoriasCarousel .popularesCategoriaItem"
  );
  let popularesItems = document.querySelectorAll(
    "#popularesCarousel  .popularesItem"
  );
  let populares2Items = document.querySelectorAll(
    "#populares2Carousel  .populares2Item"
  );
  carruselFuncion(categoriasItems);
 carruselFuncion(popularesItems);
 carruselFuncion(populares2Items);
}


/**Se crea una funcion que recibe el objeto HTML que recibio el evento, con la intencion de recuperar el ID del producto al que pertenece,
 *  además recibirá el tipo representativo de si se guarda en el carrito o en la lista de deseados 
 */


const guardar = (objetoHTML, guardarTipo) => {
  console.log(productos);

  const id = objetoHTML.id.substring(0, objetoHTML.id.indexOf("_"));
  /**Con el fin de recuperar la lista de productos se obtiene el arreglo del localStorage */
  const productosArrayStr = localStorage.getItem("productosArray");
  const parsedproductosArray = JSON.parse(productosArrayStr);
  /***El condicional sirve para identificar si se guarda en el carrito o en la lista de deseados; Carrito: 1, Lista de deseados; 2*/
  if (guardarTipo == 1) {
    /**Se obtiene el arrglo del carrito en localStorage  */
    const productosCarritoArrayStr = localStorage.getItem("productosCarritoArray");
    const parsedproductosCarritoArray = JSON.parse(productosCarritoArrayStr);
    /*Recorre el arreglo de productos que se recupero del localStorage  */
    parsedproductosArray.forEach(element => {
      /*se comparan los IDs de los productos del arreglo con el ID que se obtuvo del elemento HTML que recibio el evento,
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
  } else if (guardarTipo == 2) {
    console.log("document.getElementById(`${id}_deseadoImg`).name", document.getElementById(`${id}_deseadoImg`).name);
    if (document.getElementById(`${id}_deseadoImg`).name == "deseado") {
      eliminarDeseado(objetoHTML);
    } else {

      parsedproductosArray.forEach(element => {
        if (element.id == parseInt(id)) {
          productosDeseadosArray.push(element);
          console.log("El elegido deseado", element);

          document.getElementById(`${id}_deseadoImg`).name = "deseado";
          document.getElementById(`${id}_deseadoImg`).src = "./Assets/images/Icons/icons8-me-gusta-48.png";
          console.log("document.getElementById(`${id}_deseado`)", document.getElementById(`${id}_deseado`));
        }
      });

      const productosDeseadosArrayJson = JSON.stringify(productosDeseadosArray);
      localStorage.setItem("productosDeseadosArray", productosDeseadosArrayJson);

      const productosDeseadosArrayStr2 = localStorage.getItem("productosDeseadosArray");
      const parsedproductosDeseadosArray2 = JSON.parse(productosDeseadosArrayStr2);
      console.log("LocalStorage deseado", parsedproductosDeseadosArray2);
    }
  }
}


const eliminarDeseado = (objetoHTML) => {
  console.log("Entro?");
  const id = objetoHTML.id.substring(0, objetoHTML.id.indexOf("_"));

  productosDeseadosArray.forEach(element => {
    if (element.id == parseInt(id)) {
      const index = productosDeseadosArray.indexOf(element);
      productosDeseadosArray = productosDeseadosArray.filter(e => productosDeseadosArray.indexOf(e) != index);

      document.getElementById(`${id}_deseadoImg`).name = "noDeseado";
      document.getElementById(`${id}_deseadoImg`).src = "./Assets/images/Icons/icons8-me-gusta_no_background-48.png";
      console.log("document.getElementById(`${id}_deseado`)", document.getElementById(`${id}_deseado`));
    }
  });

  const productosDeseadosArrayJson = JSON.stringify(productosDeseadosArray);
  localStorage.setItem("productosDeseadosArray", productosDeseadosArrayJson);

  console.log(JSON.parse(localStorage.getItem("productosDeseadosArray")));
}
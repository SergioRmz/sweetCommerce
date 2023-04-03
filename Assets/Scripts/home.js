$(function () {
  $("#navBarSection").load("/Assets/Components/NavBar/NavBar.html");
  $("#footer-section").load("/Assets/Components/Footer/footer.html");
  $("#includeCategoriasPopulares").load(
    "/Assets/Components/HomeComponets/categoriasPopularesHome.html"
  );
});

const productosArray = [
  {
    id: 0,
    imagenSrc: "/Assets/images/Productos/fun-dip-candy-3-flavour.webp",
    nombreProducto: "Fun Dip Sour 3 Flavour Pack - 39.6g",
    precio: 60.5,
    categoria: 1,
    popular: true,
    nuevo: false,
    existencias: 9,
  },
  {
    id: 1,
    imagenSrc:
      "/Assets/images/Productos/poprocks_poppingcandy_cottoncandy.webp",
    nombreProducto: "Pop Rocks Cotton Candy Explosion - .33oz.",
    precio: 36.0,
    categoria: 1,
    popular: true,
    nuevo: true,
    existencias: 15,
  },
  {
    id: 2,
    imagenSrc: "/Assets/images/Productos/nik-l-nip-4-pack.webp",
    nombreProducto: "Nik L Nip Wax Bottle Candy - 4 Pack",
    precio: 60.0,
    categoria: 1,
    popular: false,
    nuevo: true,
    existencias: 50,
  },
  {
    id: 3,
    imagenSrc: "/Assets/images/Productos/Wonka-Bottle-Caps-Soda-Candies.webp",
    nombreProducto: "Bottle Caps Candy Theater Pack - 5oz",
    precio: 80.45,
    categoria: 1,
    popular: false,
    nuevo: false,
    existencias: 23,
  },
  {
    id: 4,
    imagenSrc: "/Assets/images/Productos/CherryBlossom_45g-Top.webp",
    nombreProducto: "Cherry Blossom Candy - 45g",
    precio: 50.5,
    categoria: 2,
    popular: true,
    nuevo: false,
    existencias: 43,
  },
  {
    id: 5,
    imagenSrc: "/Assets/images/Productos/nestle_kitkat_duosMintDark.webp",
    nombreProducto: "Kit Kat Duos Mint + Dark Chocolate - 1.5oz",
    precio: 50.0,
    categoria: 2,
    popular: true,
    nuevo: true,
    existencias: 34,
  },
  {
    id: 6,
    imagenSrc: "/Assets/images/Productos/hersheys_ReesesTake5.webp",
    nombreProducto: "Reese's Take 5 Candy Bar - 42g",
    precio: 50.0,
    categoria: 2,
    popular: false,
    nuevo: true,
    existencias: 17,
  },

  {
    id: 7,
    imagenSrc: "/Assets/images/Productos/Terry_s-white-chocolate.webp",
    nombreProducto: "Terry's Chocolate Orange White Chocolate Ball - 147g",
    precio: 200.0,
    categoria: 2,
    popular: false,
    nuevo: false,
    existencias: 200,
  },

  {
    id: 8,
    imagenSrc: "/Assets/images/Productos/coca-cola-cherry-vanilla-355mL.webp",
    nombreProducto: "Coca-Cola Cherry Vanilla - 355mL",
    precio: 48.67,
    categoria: 3,
    popular: true,
    nuevo: false,
    existencias: 9,
  },

  {
    id: 9,
    imagenSrc:
      "/Assets/images/Productos/flying-cauldron-butterscotch-beer-non-alcoholic-12oz.webp",
    nombreProducto: "Flying Cauldron Butterscotch Beer (Non-Alcoholic) - 12oz",
    precio: 99.99,
    categoria: 3,
    popular: true,
    nuevo: true,
    existencias: 54,
  },

  {
    id: 10,
    imagenSrc: "/Assets/images/Productos/fanta-berry.webp",
    nombreProducto: "Fanta Berry - 355mL",
    precio: 60,
    categoria: 3,
    popular: false,
    nuevo: true,
    existencias: 54,
  },

  {
    id: 11,
    imagenSrc:
      "/Assets/images/Productos/Prime-Hydration-Drink-Strawberry-Watermelon-500mL.webp",
    nombreProducto: "Prime Hydration Drink Strawberry Watermelon - 500mL",
    precio: 160.76,
    categoria: 3,
    popular: false,
    nuevo: false,
    existencias: 76,
  },

  {
    id: 12,
    imagenSrc: "/Assets/images/Productos/lays-pizza-hut-margherita-150g.webp",
    nombreProducto: "Lay's Pizza Hut Margherita - 150g",
    precio: 100.0,
    categoria: 4,
    popular: true,
    nuevo: false,
    existencias: 34,
  },

  {
    id: 13,
    imagenSrc: "/Assets/images/Productos/pringles-sweet-paprika-185g.webp",
    nombreProducto: "Pringles Sweet Paprika - 185g",
    precio: 160.63,
    categoria: 4,
    popular: true,
    nuevo: true,
    existencias: 9,
  },

  {
    id: 14,
    imagenSrc:
      "/Assets/images/Productos/Ruffles-Flamin-Hot-Cheddar-and-Sour-Cream-2.125oz.webp",
    nombreProducto: "Ruffles Flamin Hot Cheddar and Sour Cream - 2.125oz",
    precio: 79.99,
    categoria: 4,
    popular: false,
    nuevo: true,
    existencias: 9,
  },

  {
    id: 15,
    imagenSrc: "/Assets/images/Productos/takis-dragon-sweet-chili-280g.webp",
    nombreProducto: "Takis Dragon Spicy Sweet Chili - 280g",
    precio: 120.0,
    categoria: 4,
    popular: false,
    nuevo: false,
    existencias: 45,
  },

  {
    id: 16,
    imagenSrc:
      "/Assets/images/Productos/candy-care-package-subscription-box.webp",
    nombreProducto: "Candy Care Package Subscription Box",
    precio: 1500.0,
    categoria: 5,
    popular: true,
    nuevo: false,
    existencias: 100,
  },

  {
    id: 17,
    imagenSrc: "/Assets/images/Productos/tickled-pink-all-pink-candy-box.webp",
    nombreProducto: "Tickled Pink Fun Box",
    precio: 1500.0,
    categoria: 5,
    popular: true,
    nuevo: true,
    existencias: 10,
  },

  {
    id: 18,
    imagenSrc: "/Assets/images/Productos/the-grass-is-greener-fun-box.webp",
    nombreProducto: "The Grass Is Greener Fun Box",
    precio: 1500.0,
    categoria: 5,
    popular: false,
    nuevo: true,
    existencias: 35,
  },

  {
    id: 19,
    imagenSrc: "/Assets/images/Productos/halal-box.webp",
    nombreProducto: "Halal Fun Box",
    precio: 1500.0,
    categoria: 5,
    popular: false,
    nuevo: false,
    existencias: 15,
  },
];

const productosCarritoArray = [];

const productosDeseadosArray = [];
/**convierte el arrglo en un json y lo convierte en una cadena  */
const productosArrayJson = JSON.stringify(productosArray);
/**La sigueinte line lo guarda en Localstorage, debes inditar el nombre con el que guardas el objeto que debe ser siempre en string */
localStorage.setItem("productosArray", productosArrayJson);

/*** */
const productosCarritoArrayJson = JSON.stringify(productosCarritoArray);

localStorage.setItem("productosCarritoArray", productosCarritoArrayJson);


const productosDeseadosArrayJson = JSON.stringify(productosDeseadosArray);

localStorage.setItem("productosDeseadosArray", productosDeseadosArrayJson);

/**Para recuperarlo: obtien json del local estorage utilizando el identificador que se le dio */
const productosArrayStr = localStorage.getItem("productosArray");

/**Para convertir el json en el objeto original */
const parsedproductosArray = JSON.parse(productosArrayStr);

//console.log(parsedproductosArray);

const createCard = (carouselId, carouselItemClass, elementArray) => {
  const carruselPopular = document.getElementById(carouselId);

  // Se asigna la clase

  let carouselItemsHTML =
    '<div class="carousel-inner carruselInner" id="popularesInner" role="listbox">';
  let count = 0;
  for (const id in elementArray) {
    const element = elementArray[id];

    let isActive = count == 0 ? " active" : "";
    carouselItemsHTML =
      carouselItemsHTML +
      `<div class="${carouselItemClass}${isActive}">` +
      '<div class="col-md-3"><div class="card h-100">' +
      "<!-- Se agrega un header a la tarjeta y se coloca icono para wishList -->" +
      '<div class="card-header bg-transparent">' +
      `<a id="${element.id}_deseado" onclick="guardar(this,2)" href="#" class="btn"><img src="/Assets/images/Icons/icons8-me-gusta-48.png" alt="AgregaWishList" width="30px"/></a>` +
      "</div>" +
      "<img " +
      'class="card-img-top W-100"' +
      `src="${element.imagenSrc}"` +
      'alt="Card image cap"' +
      'width=""/>' +
      '<div class="card-body">' +
      `<h5 class="card-title">${element.nombreProducto}</h5>` +
      `<p class="card-text">$${element.precio}</p>` +
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
    'href="#popularesCarousel"' +
    'role="button"' +
    'data-bs-slide="prev">' +
    "<span " +
    'class="carousel-control-prev-icon"' +
    ' aria-hidden="true"' +
    " ></span>" +
    " </a>" +
    "<a " +
    'class="carousel-control-next bg-transparent w-aut"' +
    ' href="#popularesCarousel"' +
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
const seleccionProductos = () => {
  const productoPopularesArray = [];
  const productoNuevosArray = [];
  for (const key in productosArray) {
    if (productosArray[key].popular) {
      productoPopularesArray.push(productosArray[key]);
    } else if (productosArray[key].nuevo) {
      productoNuevosArray.push(productosArray[key]);
    }
  }

  console.log("populares", productoPopularesArray);
  console.log("nuevos", productoNuevosArray);

  const carouselPopularesId = "popularesCarousel";
  const carouselItemPopulares =
    "carousel-item popularesItem categoriaItem justify-content-center";
  createCard(carouselPopularesId, carouselItemPopulares, productoPopularesArray);

  const carouselNuevosId = "populares2Carousel";
  const carouselItemNuevos =
    "carousel-item populares2Item categoriaItem justify-content-center";
  createCard(carouselNuevosId, carouselItemNuevos, productoNuevosArray);
};
seleccionProductos();

let categoriasItems = document.querySelectorAll(
  "#categoriasCarousel .popularesCategoriaItem"
);
let popularesItems = document.querySelectorAll(
  "#popularesCarousel  .popularesItem"
);
let populares2Items = document.querySelectorAll(
  "#populares2Carousel  .populares2Item"
);

const carruselFuncion = (grupoDeElementos) => {
  console.log("items", grupoDeElementos);
  grupoDeElementos.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    console.log("next", next);
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        //  imagenProducto.srcset = '';
        next = grupoDeElementos[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
};
carruselFuncion(categoriasItems);
carruselFuncion(popularesItems);
carruselFuncion(populares2Items);
/**creo una funcion que recibe el objetoHTML que se presiono o recibio el evento, con la intencion de recuperar el id del producto al que pertenece,
 *  ademàs recibirá el tipo representativo si se guarda en el carrito o en la lista de deseados 
 */
const guardar = (objetoHTML, guardarTipo) => {

  console.log(objetoHTML.id.substring(0, objetoHTML.id.indexOf("_")));
/**Con el fin de recuperar la lista de productos se obtine el arreglo del locastorage */
  const productosArrayStr = localStorage.getItem("productosArray");
  const parsedproductosArray = JSON.parse(productosArrayStr);
/***El condicional sirve para identificar si se guarda en el carrito es 1 si se guarda en la lista de deseadod es 2 */
  if (guardarTipo == 1) {
    /**Se obtiete el arrglo del carrito en localstorage  */
    const productosCarritoArrayStr = localStorage.getItem("productosCarritoArray");
    const parsedproductosCarritoArray = JSON.parse(productosCarritoArrayStr);
/*Recorrede el arrglo del productos que se recupero del localstorage  */
    parsedproductosArray.forEach(element => {
      /*se comparan los ids de los productos del arrglo con el id que se obtuvodel elemento html que recibio el evento,
       el cual se obtiene al utilizar la funcion substring del indice 0 del string del id del elemento hasta el indice 
       en el que se encuentra un guion bajo
       */
      if (element.id == parseInt(objetoHTML.id.substring(0, objetoHTML.id.indexOf("_")))) {
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
    const productosDeseadosArrayStr = localStorage.getItem("productosDeseadosArray");
    const parsedproductosDeseadosArray = JSON.parse(productosDeseadosArrayStr);

    parsedproductosArray.forEach(element => {
      if (element.id == parseInt(objetoHTML.id.substring(0, objetoHTML.id.indexOf("_")))) {
        parsedproductosDeseadosArray.push(element);
        console.log("El elegido deseado", element);
      }
    });

    const productosDeseadosArrayJson = JSON.stringify(parsedproductosDeseadosArray);
    localStorage.setItem("productosDeseadosArray", productosDeseadosArrayJson);

    const productosDeseadosArrayStr2 = localStorage.getItem("productosDeseadosArray");
    const parsedproductosDeseadosArray2 = JSON.parse(productosDeseadosArrayStr2);
    console.log("LocalStorage deseado", parsedproductosDeseadosArray2);
  }
}

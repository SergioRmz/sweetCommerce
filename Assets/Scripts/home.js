$(function () {
  $("#navBarSection").load("/Assets/Components/NavBar/NavBar.html");
  $("#footer-section").load("/Assets/Components/Footer/footer.html");
  $("#includeCategoriasPopulares").load(
    "/Assets/Components/HomeComponets/categoriasPopularesHome.html"
  );
});

const productosArray = {
  0: {
    id: 0,
    imagenSrc: "/Assets/images/Productos/fun-dip-candy-3-flavour.webp",
    nombreProducto: "Fun Dip Sour 3 Flavour Pack - 39.6g",
    precio: 60.5,
    categoria: 1,
    popular: true,
    nuevo: false,
    existencias: 9,
  },
  1: {
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
  2: {
    id: 2,
    imagenSrc: "/Assets/images/Productos/nik-l-nip-4-pack.webp",
    nombreProducto: "Nik L Nip Wax Bottle Candy - 4 Pack",
    precio: 60.0,
    categoria: 1,
    popular: false,
    nuevo: true,
    existencias: 50,
  },
  3: {
    id: 3,
    imagenSrc: "/Assets/images/Productos/Wonka-Bottle-Caps-Soda-Candies.webp",
    nombreProducto: "Bottle Caps Candy Theater Pack - 5oz",
    precio: 80.45,
    categoria: 1,
    popular: false,
    nuevo: false,
    existencias: 23,
  },
  4: {
    id: 4,
    imagenSrc: "/Assets/images/Productos/CherryBlossom_45g-Top.webp",
    nombreProducto: "Cherry Blossom Candy - 45g",
    precio: 50.5,
    categoria: 2,
    popular: true,
    nuevo: false,
    existencias: 43,
  },
  5: {
    id: 5,
    imagenSrc: "/Assets/images/Productos/nestle_kitkat_duosMintDark.webp",
    nombreProducto: "Kit Kat Duos Mint + Dark Chocolate - 1.5oz",
    precio: 50.0,
    categoria: 2,
    popular: true,
    nuevo: true,
    existencias: 34,
  },
  6: {
    id: 6,
    imagenSrc: "/Assets/images/Productos/hersheys_ReesesTake5.webp",
    nombreProducto: "Reese's Take 5 Candy Bar - 42g",
    precio: 50.0,
    categoria: 2,
    popular: false,
    nuevo: true,
    existencias: 17,
  },

  7: {
    id: 7,
    imagenSrc: "/Assets/images/Productos/Terry_s-white-chocolate.webp",
    nombreProducto: "Terry's Chocolate Orange White Chocolate Ball - 147g",
    precio: 200.0,
    categoria: 2,
    popular: false,
    nuevo: false,
    existencias: 200,
  },

  8: {
    id: 8,
    imagenSrc: "/Assets/images/Productos/coca-cola-cherry-vanilla-355mL.webp",
    nombreProducto: "Coca-Cola Cherry Vanilla - 355mL",
    precio: 48.67,
    categoria: 3,
    popular: true,
    nuevo: false,
    existencias: 9,
  },

  9: {
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

  10: {
    id: 10,
    imagenSrc: "/Assets/images/Productos/fanta-berry.webp",
    nombreProducto: "Fanta Berry - 355mL",
    precio: 60,
    categoria: 3,
    popular: false,
    nuevo: true,
    existencias: 54,
  },

  11: {
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

  12: {
    id: 12,
    imagenSrc: "/Assets/images/Productos/lays-pizza-hut-margherita-150g.webp",
    nombreProducto: "Lay's Pizza Hut Margherita - 150g",
    precio: 100.0,
    categoria: 4,
    popular: true,
    nuevo: false,
    existencias: 34,
  },

  13: {
    id: 13,
    imagenSrc: "/Assets/images/Productos/pringles-sweet-paprika-185g.webp",
    nombreProducto: "Pringles Sweet Paprika - 185g",
    precio: 160.63,
    categoria: 4,
    popular: true,
    nuevo: true,
    existencias: 9,
  },

  14: {
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

  15: {
    id: 15,
    imagenSrc: "/Assets/images/Productos/takis-dragon-sweet-chili-280g.webp",
    nombreProducto: "Takis Dragon Spicy Sweet Chili - 280g",
    precio: 120.0,
    categoria: 4,
    popular: false,
    nuevo: false,
    existencias: 45,
  },

  16: {
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

  17: {
    id: 17,
    imagenSrc: "/Assets/images/Productos/tickled-pink-all-pink-candy-box.webp",
    nombreProducto: "Tickled Pink Fun Box",
    precio: 1500.0,
    categoria: 5,
    popular: true,
    nuevo: true,
    existencias: 10,
  },

  18: {
    id: 18,
    imagenSrc: "/Assets/images/Productos/the-grass-is-greener-fun-box.webp",
    nombreProducto: "The Grass Is Greener Fun Box",
    precio: 1500.0,
    categoria: 5,
    popular: false,
    nuevo: true,
    existencias: 35,
  },

  19: {
    id: 19,
    imagenSrc: "/Assets/images/Productos/halal-box.webp",
    nombreProducto: "Halal Fun Box",
    precio: 1500.0,
    categoria: 5,
    popular: false,
    nuevo: false,
    existencias: 15,
  },
};

const productosCarritoArray = {};

const productosDeseadosArray = {};

const productosArrayJson = JSON.stringify(productosArray);

localStorage.setItem("productosArray", productosArrayJson);

const productosCarritoArrayJson = JSON.stringify(productosCarritoArray);

localStorage.setItem("productosCarritoArray", productosCarritoArrayJson);

const productosDeseadosArrayJson = JSON.stringify(productosDeseadosArray);

localStorage.setItem("productosDeseadosArray", productosDeseadosArrayJson);

// get the JSON string from localStorage
const productosArrayStr = localStorage.getItem("productosArray");

// convert JSON string to relevant object
const parsedproductosArray = JSON.parse(productosArrayStr);

console.log(parsedproductosArray);

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
        '<a href="#" class="btn"><img src="/Assets/images/Icons/icons8-me-gusta-48.png" alt="AgregaWishList" width="30px"/></a>' +
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
        '<button class="add">Añadir</button></a>' +
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
        //
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

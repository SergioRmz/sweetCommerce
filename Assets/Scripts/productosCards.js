'use strict'

console.log("hola desde productos cards");
let productosDeseadosArray;
let productosCarritoArray;
/**Para recuperarlo: obtien json del local estorage utilizando el identificador que se le dio */
const productosArrayStr = localStorage.getItem("productosArray");

/**Para convertir el json en el objeto original */
let parsedproductosArray = JSON.parse(productosArrayStr);

const createCard = (categoria, element ) => {
    const id_div_Productos = (categoria == 1)? "div_ProductosDulces": (categoria == 2)?"div_ProductosChocolates": (categoria == 3)?"div_ProductosBebidas":(categoria == 4) ? "div_ProductosSnacks":(categoria == 5) ? "div_ProductosCaja":"div_Productos";
    const div_Productos = document.getElementById(id_div_Productos);
  
    div_Productos.innerHTML +=`<div class="col-lg-4"><div class="card h-100"><!-- Se agrega un header a la tarjeta y se coloca icono para wishList --><div class="card-header bg-transparent">`;
  
  if (productosDeseadosArray == null || productosDeseadosArray.length == 0) {
    div_Productos.innerHTML += `<a id="${element.id}_deseado" onclick="guardar(this,2)" href="#" class="btn"><img id="${element.id}_deseadoImg" name="noDeseado" src="/Assets/images/Icons/icons8-me-gusta_no_background-48.png" alt="AgregaWishList" width="30px"/></a>`;
    banderaDeseadoImg = true;
  } else {
    let banderaDeseadoImg = false;
    let countImg = 0;
    productosDeseadosArray.forEach((elementDeseado, index, arr) => {
      if ((elementDeseado.id == element.id) && banderaDeseadoImg == false) {
        div_Productos.innerHTML +=`<a id="${element.id}_deseado" onclick="guardar(this,2)" href="#" class="btn"><img id="${element.id}_deseadoImg" name="deseado" src="/Assets/images/Icons/icons8-me-gusta-48.png" alt="AgregaWishList" width="30px"/></a>`;
        banderaDeseadoImg = true;
      }
      countImg++;
      if ((arr.length == countImg) && (banderaDeseadoImg == false)) {
        div_Productos.innerHTML += `<a id="${element.id}_deseado" onclick="guardar(this,2)" href="#" class="btn"><img id="${element.id}_deseadoImg" name="noDeseado" src="/Assets/images/Icons/icons8-me-gusta_no_background-48.png" alt="AgregaWishList" width="30px"/></a>`;
      }
    });
  
    banderaDeseadoImg = false;
  }
  
  div_Productos.innerHTML += "</div>" +
    "<img " +
    'class="card-img-top W-100"' +
    `src="${element.imagen_Src}"` +
    'alt="Card image cap"' +
    'width=""/>' +
    '<div class="card-body">' +
    `<h5 class="card-title">${element.nombre_Producto}</h5>` +
    `<p class="card-text">$${element.precio}</p>` +
    "</div>" +
    "<!-- Se agrega un footer a la tarjeta y se coloca icono para añadirCarrito-->" +
    '<div class="card-footer bg-transparent">' +
    '<small class="text-muted">' +
    '<a href="#" class="btn1">' +
    `<button id="${element.id}_carrito" onclick="guardar(this,1)" class="add">Añadir</button></a>` +
    "</small>" +
    "</div>" +
    "</div>" 
  
   
  
    // console.log(carruselPopular);
  };

  const seleccionProductos = (jsonFromDb) => {
  

    const dulcesArray = [];
    const chocolatesArray = [];
    const bebidasArray = [];
    const snacksArray = [];
    const cajasArray = [];
    for (const key in jsonFromDb) {

      if(jsonFromDb[key].categoria == 1){
        dulcesArray.push(jsonFromDb[key]);
        createCard(1,jsonFromDb[key])
      }
      else
      if(jsonFromDb[key].categoria == 2){
        chocolatesArray.push(jsonFromDb[key]);
      }else
      if(jsonFromDb[key].categoria == 3){
        bebidasArray.push(jsonFromDb[key]); 
      }else
      if(jsonFromDb[key].categoria == 4){
        snacksArray.push(jsonFromDb[key]);
      }else
      if(jsonFromDb[key].categoria == 5){
        cajasArray.push(jsonFromDb[key]); 
      }
    }
  
    console.log("Dulce", dulcesArray);
    console.log("nuevos");

  
  };
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
  seleccionProductos(parsedproductosArray);
  

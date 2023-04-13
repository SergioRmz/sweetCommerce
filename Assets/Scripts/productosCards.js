'use strict';
const categoria = document.querySelector('.containerProductos').id;
console.log(categoria);

console.log("hola desde productos cards");
let productosDeseadosArray;
let productosCarritoArray;
/**Para recuperarlo: obtien json del local estorage utilizando el identificador que se le dio */
const productosArrayStr = localStorage.getItem("productosArray");

/**Para convertir el json en el objeto original */
let parsedproductosArray = JSON.parse(productosArrayStr);

const createCard = (categoria, object ) => {
    const id_div_Productos = (categoria == 1)? "div_ProductosDulces": (categoria == 2)?"div_ProductosChocolates": (categoria == 3)?"div_ProductosBebidas":(categoria == 4) ? "div_ProductosSnacks":(categoria == 5) ? "div_ProductosCaja":"div_Productos";
    const div_Productos = document.getElementById(id_div_Productos);
    
  for (const key in object) {
        let innerDivProductos = "";
        const element = object[key];
        innerDivProductos+=`<div class="col-lg-4">
        <div class="card h-100">
        <!-- Se agrega un header a la tarjeta y se coloca icono para wishList -->
        <div class="card-header bg-transparent">`;
        let banderaDeseadoImg;
  if (productosDeseadosArray == null || productosDeseadosArray.length == 0) {
    innerDivProductos += `<a id="${element.id}_deseado" onclick="guardar(this,2)" href="#" class="btn"><img id="${element.id}_deseadoImg" name="noDeseado" src="/Assets/images/Icons/icons8-me-gusta_no_background-48.png" alt="AgregaWishList" width="30px"/></a>`;
    banderaDeseadoImg = true;
  } else {
     banderaDeseadoImg = false;
    let countImg = 0;
    productosDeseadosArray.forEach((elementDeseado, index, arr) => {
      if ((elementDeseado.id == element.id) && banderaDeseadoImg == false) {
        innerDivProductos +=`<a id="${element.id}_deseado" onclick="guardar(this,2)" href="#" class="btn"><img id="${element.id}_deseadoImg" name="deseado" src="/Assets/images/Icons/icons8-me-gusta-48.png" alt="AgregaWishList" width="30px"/></a>`;
        banderaDeseadoImg = true;
      }
      countImg++;
      if ((arr.length == countImg) && (banderaDeseadoImg == false)) {
        innerDivProductos += `<a id="${element.id}_deseado" onclick="guardar(this,2)" href="#" class="btn"><img id="${element.id}_deseadoImg" name="noDeseado" src="/Assets/images/Icons/icons8-me-gusta_no_background-48.png" alt="AgregaWishList" width="30px"/></a>`;
      }
    });
  
    banderaDeseadoImg = false;
  }
  
  innerDivProductos += ` </div><img class="card-img-top" src="${element.imagen_Src}" alt="Card image cap" width="">
  <div class="card-body">

    <h5 class="card-title">${element.nombre_Producto}</h5>
    <p class="card-text">$${element.precio}</p>
  </div>
  <!-- Se agrega un footer a la tarjeta y se coloca icono para añadirCarrito-->
  <div class="card-footer bg-transparent">

      <small class="text-muted">
        <a href="#" class="btn1">
        <button id="${element.id}_carrito" onclick="guardar(this,1)" class="add">Añadir</button>
        </a>

    </small>
  </div>
</div>
</div>`;   
   div_Productos.innerHTML += innerDivProductos; 
  }
  
  console.log(div_Productos);
  };

  const seleccionProductos = (categoria, jsonFromDb) => {
  

    const array = [];
    const chocolatesArray = [];
    const bebidasArray = [];
    const snacksArray = [];
    const cajasArray = [];
    for (const key in jsonFromDb) {

      if(jsonFromDb[key].categoria == categoria){
        array.push(jsonFromDb[key]);
        
      }
    }
  
    console.log(categoria, array);
    createCard(categoria, array);
    //createCard(2, chocolatesArray);
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
  seleccionProductos(categoria, parsedproductosArray);
  
/**Se crea una funcion que recibe el objeto HTML que recibio el evento, con la intencion de recuperar el ID del producto al que pertenece,
 *  además recibirá el tipo representativo de si se guarda en el carrito o en la lista de deseados 
 */


const guardar = (objetoHTML, guardarTipo) => {
  
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
            document.getElementById(`${id}_deseadoImg`).src = "/Assets/images/Icons/icons8-me-gusta-48.png";
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
        document.getElementById(`${id}_deseadoImg`).src = "/Assets/images/Icons/icons8-me-gusta_no_background-48.png";
        console.log("document.getElementById(`${id}_deseado`)", document.getElementById(`${id}_deseado`));
      }
    });
  
    const productosDeseadosArrayJson = JSON.stringify(productosDeseadosArray);
    localStorage.setItem("productosDeseadosArray", productosDeseadosArrayJson);
  
    console.log(JSON.parse(localStorage.getItem("productosDeseadosArray")));
  }
/* $(function(){
    $("#navBarSection").load("/Assets/Components/NavBar/NavBar.html");
    
}); */

/* const cartButton = document.getElementById("ad");
const feedbackBtn = document.querySelector(".feedback")

const add = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
  };
  cartButton.addEventListener("click", add);

  const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
  };
  feedbackBtn.addEventListener("click", feedback); */



let productos2;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN = 'http://localhost:8080/sweetCommerce/productos/'; //URL a donde se hace la petición
function addItems(div_Productos) { //div_Productos es el div donde se va a agregar los productos

  fetch(URL_MAIN, {
    method: 'get' //tipo de método
  }).then(function (response) {//response es la respuesta del servidor
    response.json().then(function (json) { //json es el objeto que se obtiene del servicio
      console.log(json); //imprime el json
      console.log(json.length); //imprime el tamaño del json
      productos2 = json; //se guarda el json en la variable productos
      Array.from(json).forEach((p, index) => { //Toma el JSON, si es un arreglo haces el forEach. Si no lo es, mandas el error.
        div_Productos.innerHTML += `
        
            <div class="col-lg-4">
              <div class="card h-100">
           <!-- Se agrega un header a la tarjeta y se coloca icono para wishList -->
           <div class="card-header bg-transparent">
             <a href="#" class="btn"><img src="/Assets/images/Icons/icons8-me-gusta-48.png" alt="AgregaWishList"
                 width="30px"></a>
           </div>
           <img class="card-img-top" src="${p.imagen_Src}" alt="Card image cap" width="">
           <div class="card-body">
             
             <h5 class="card-title">${p.nombre_Producto}</h5>
             <p class="card-text">$${p.precio}</p>
           </div>
           <!-- Se agrega un footer a la tarjeta y se coloca icono para añadirCarrito-->
           <div class="card-footer bg-transparent">
             
               <small class="text-muted">
                 <a href="#" class="btn1">
                   <button class="add">Añadir</button>
 
                 <!-- <img src="/Assets/icons/icons8-carrito-de-la-compra-cargado-48.png" alt="AgregarCarrito" 
                   width="40px"> -->
                 </a>
                   
             </small>
           </div>
         </div>
       </div>
       
        `;
      }); // foreach para agregar los productos al div del HTML
    });//then
  }).catch(function (err) { //si hay un error
    console.log(err); //imprime el error
  });
  console.log(document.getElementById("div_Productos")); //imprime el div donde se va a agregar los productos
  console.log("Hola");

}// addItems

window.addEventListener("load", function () { //cuando se cargue la página
  let div = document.getElementById("div_Productos"); //div donde se va a agregar los productos
  addItems(div); //se llama a la función addItems

});


const seleccionProductos = () => {
  const productoCategoria1 = [];
  const productoCategoria2 = [];
  for (const key in parsedproductosArray) {
    if (parsedproductosArray[key].popular) {
      productoPopularesArray.push(parsedproductosArray[key]);
    } else if (parsedproductosArray[key].nuevo) {
      productoNuevosArray.push(parsedproductosArray[key]);
    }
  }
}
  console.log("populares", productoPopularesArray);

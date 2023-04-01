//Seleccionamos los elementos del DOM que necesitamos
const quantities = document.querySelectorAll('.unit input');
const prices = document.querySelectorAll('.content h4');
const removeButtons = document.querySelectorAll('.btn2');
const subtotal = document.querySelector('.right-bar p:nth-of-type(1) span:nth-of-type(2)');
const iva = document.querySelector('.right-bar p:nth-of-type(2) span:nth-of-type(2)');
const total = document.querySelector('.right-bar p:nth-of-type(4) span:nth-of-type(2)');

//Inicializamos variables para los cálculos
let subtotalValue = 0;
let ivaValue = 0;
let totalValue = 0;

//Función que calcula los valores del carrito
function updateCart() {
  //Inicializamos variables para los cálculos
  subtotalValue = 0;
  ivaValue = 0;
  totalValue = 0;
  //Recorremos los elementos y actualizamos los valores
  for (let i = 0; i < quantities.length; i++) {
    //Obtenemos el valor de la cantidad
    let quantity = parseInt(quantities[i].value);
    //Verificamos que la cantidad no sea menor o igual a 0
    if (quantity <= 0) {
      quantities[i].value = 1;
      quantity = 1;
    }
    //Obtenemos el precio y lo convertimos a número
    let price = parseFloat(prices[i].textContent.replace('Precio: $', ''));
    //Calculamos el subtotal y lo agregamos a la variable correspondiente
    subtotalValue += quantity * price;
  }
  //Calculamos el IVA y lo agregamos a la variable correspondiente
  ivaValue = subtotalValue * 0.16;
  //Calculamos el total y lo agregamos a la variable correspondiente
  totalValue = subtotalValue + ivaValue + 120;
  //Actualizamos los valores en el DOM
  subtotal.textContent = '$' + subtotalValue.toFixed(2);
  iva.textContent = '$' + ivaValue.toFixed(2);
  total.textContent = '$' + totalValue.toFixed(2);
}

//Agregamos eventos a los elementos
for (let i = 0; i < quantities.length; i++) {
  //Evento para actualizar los valores al cambiar la cantidad
  quantities[i].addEventListener('change', updateCart);
  //Evento para actualizar los valores al presionar Enter en la cantidad
  quantities[i].addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      updateCart();
    }
  });
//Evento para quitar el producto
removeButtons[i].addEventListener('click', function() {
  this.parentNode.parentNode.remove();
  updateCart();
});
}

//Llamamos a la función para actualizar los valores al cargar la página
updateCart();

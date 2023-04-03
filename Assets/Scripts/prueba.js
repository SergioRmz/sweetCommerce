const ClickButton = document.querySelectorAll('.card-btn, .boton')

 const tbody = document.querySelector('tbody')

let carrito = [];

ClickButton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
});


function addToCarritoItem (e){
  const button = e.target
  const item = button.closest('.product-card, .card');
  const itemTitle = item.querySelector('.product-brand').textContent;
  const itemPrice = item.querySelector('.price').textContent;
  const itemImage = item.querySelector('.product-thumb, .portada').src;
  
  const objetosCarrito = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImage,
    cantidad: 1
  }

  addItemCarrito(objetosCarrito);

}

function addItemCarrito (objetosCarrito){
  

const inputElemento = tbody.getElementsByClassName('input__elemento')

  for (let i = 0; i < carrito.length; i++) {
   if (carrito[i].title.trim() === objetosCarrito.title.trim()) {
    carrito[i].cantidad++;
    const inputValue = inputElemento[i];
    inputValue.value++;
    CarritoTotal();
    return null;
   }
    
  }

  carrito.push(objetosCarrito)
  
  renderCarrito()

  console.log(objetosCarrito);
}


function renderCarrito(){

  tbody.innerHTML = ""
  carrito.map (item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    <th scope="row">1</th>
            <td class="table__productos">
            <h6 class="title">${item.title}</h6>
              <img src=${item.img} alt="">
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">Eliminar</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.appendChild(tr)
    tr.querySelector(".delete").addEventListener('click', eliminarCarrito)
    tr.querySelector('.input__elemento').addEventListener('change', sumaCantidad)

  })
   CarritoTotal()

}

function CarritoTotal (){
  let Total = 0;
   const ItemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) =>{
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad

  })
  ItemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
  }


  function eliminarCarrito(e){
    const buttonEliminar = e.target
    const tr = buttonEliminar.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].title.trim()=== title.trim()) {
      carrito.splice(i,1)
  
}
    }
    tr.remove()
    CarritoTotal()

  }

  function sumaCantidad(e){
    const sumaInput = e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent
    carrito.forEach(item => {
      if (item.title.trim() === title) {
        sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
        item.cantidad = sumaInput.value;
        CarritoTotal()
        
      }
    })
  }

function addLocalStorage (){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}



  window.onload = function (){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage) {
      carrito = storage;
      renderCarrito()    
    }
  }
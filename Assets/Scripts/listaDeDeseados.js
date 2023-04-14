
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
            `<a id="${element.id}_deseadoEliminar" onclick="eliminarDeseado(this)"  href="#" class="btn"><img class="remove-button" src="./Assets/images/Icons/icons8-eliminar-30.png" alt="boton-eliminar"></a>` +
            '</td>' +
            '<td>' +
            `<img class="wishlist-img" src=".${element.imagen_Src}" alt="">` +
            '</td>' +
            '<td>' +
            `${element.nombre_Producto}` +
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

//createListaDeseados();
const mensajeListaVacia = () =>{
    const mensajeLista = document.getElementById("mensajeLista");
    if(parsedproductosDeseadosArray.length == 0||parsedproductosDeseadosArray == null ){
        console.log("Lista vacía");
        mensajeLista.innerHTML =`<a href="index.html"><div class="container-fluid"><img class="w-100" src="./Assets/images/Misfavoritos.png"/></div></a>`

    }else{
        createListaDeseados();
    }

}
mensajeListaVacia();


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
    mensajeListaVacia();
    console.log(JSON.parse(localStorage.getItem("productosDeseadosArray")));
}
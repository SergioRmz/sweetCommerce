$(function(){
    $("#navBarSection").load("/Assets/Components/NavBar/NavBar.html");
    $("#includeHtml").load("/Assets/Components/HomeComponets/categoriasPopularesHome.html");
});

//Se obtiene la referencia al elemento del boton de inicio de sesion y lo almacena en botonIS
let botonCC = document.getElementById('crearCuentaId');

//Se agrega el evento click, ejecutando la siguiente funcion flecha
botonCC.addEventListener('click', () => {
  //Esta funcion obtiene los valores ingresados por el usuario utilizando getElementById y .value para almacenarlos en la variable email y password
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
//finalmente haciendo uso de setItem, logramos el almacenamiento en localStorage
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('apellido', apellido);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  window.open('/Pages/login.html', '_blank');
  
});

//coment
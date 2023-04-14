//Se obtiene la referencia al elemento del boton de inicio de sesion y lo almacena en botonIS
let botonIS = document.getElementById('botonIniciarSesion');

//Se agrega el evento click, ejecutando la siguiente funcion flecha
botonIS.addEventListener('click', () => {
  //Esta funcion obtiene los valores ingresados por el usuario utilizando getElementById y .value para almacenarlos en la variable email y password
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
//finalmente haciendo uso de setItem, logramos el almacenamiento en localStorage
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  window.open('./index.html', '_blank');
  
});

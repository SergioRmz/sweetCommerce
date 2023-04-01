let botonIS = document.getElementById('botonIniciarSesion');

botonIS.addEventListener('click', () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
});

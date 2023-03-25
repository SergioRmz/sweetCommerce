let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let botonIS = document.getElementById('botonIniciarSesion');
botonIS.addEventListener('click', () => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
});
//console.log(email);
//console.log(password);
//localStorage.setItem('email', email);
//console.log(localStorage.getItem('email'));

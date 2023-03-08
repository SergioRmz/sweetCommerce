const email_fijo = "dan@gmail.com";
const contra_fijo = "1234";
const email_input = document.getElementById("floatingInput");
const contra_input = document.getElementById("floatingPassword");


document.getElementById("keyBtn").addEventListener("click", () => {
    if (email_input.value == email_fijo) {
        if (contra_input.value == contra_fijo) {
            alert("Se ha iniciado la sesión con éxito!");
        } else {
            alert("La contraseña es incorrecta, favor de verificar los datos.");
            contra_input.value = "";
        }
    } else {
        if (contra_input == contra_fijo) {
            alert("El email es incorrecto, favor de verificar los datos.");
            email_input.value = "";
            contra_input.value = "";
        } else {
            alert("El email y la contraseña son incorrectos, favor de verificar los datos.");
            email_input.value = "";
            contra_input.value = "";
        }
    }
});

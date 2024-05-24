document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var email = document.getElementById('form2Example1').value;
            var password = document.getElementById('form2Example2').value;

            // Recupera los datos del almacenamiento local
            var storedEmail = localStorage.getItem('registroEmail');
            var storedPassword = localStorage.getItem('registroPassword');

            // Compara los datos del formulario con los del almacenamiento local
            if (email === storedEmail && password === storedPassword) {
                alert('Inicio de sesión exitoso. ¡Bienvenido de vuelta!');
            } else {
                alert('Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.');
            }
        });
    } 
});
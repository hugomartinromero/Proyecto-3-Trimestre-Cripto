document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');

    if (loginForm) {
        var loginButton = document.getElementById('loginButton');
        var showPasswordButton = document.getElementById('showPasswordButton'); // Nuevo: el botón para mostrar/ocultar contraseña
        var passwordInput = document.getElementById('form2Example2'); // Nuevo: el campo de contraseña

        loginButton.addEventListener('click', function(event) {
            event.preventDefault();

            var email = document.getElementById('form2Example1').value.trim();
            var password = passwordInput.value.trim(); // Modificado: obtener valor del campo de contraseña

            // Recupera los datos del almacenamiento local
            var storedEmail = localStorage.getItem('registroEmail');
            var storedPassword = localStorage.getItem('registroPassword');

            // Para depuración
            console.log('Email introducido:', email);
            console.log('Password introducido:', password);
            console.log('Email almacenado:', storedEmail);
            console.log('Password almacenado:', storedPassword);

            // Compara los datos del formulario con los del almacenamiento local
            if (email === storedEmail && password === storedPassword) {
                alert('Inicio de sesión exitoso. ¡Bienvenido de vuelta!');
                window.location.href = "/index.html";
            } else {
                alert('Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.');
            }
        });

        // Nuevo: Agregar evento de clic al botón de mostrar/ocultar contraseña
        if (showPasswordButton) {
            showPasswordButton.addEventListener('click', function() {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    showPasswordButton.textContent = 'Ocultar Contraseña';
                } else {
                    passwordInput.type = 'password';
                    showPasswordButton.textContent = 'Mostrar Contraseña';
                }
            });
        }
    }
});

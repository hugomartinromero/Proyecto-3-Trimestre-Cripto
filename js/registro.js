document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var firstName = document.getElementById('firstName').value.trim();
        var lastName = document.getElementById('lastName').value.trim();
        var birthdayDate = document.getElementById('FechaNacimiento').value.trim();
        var emailAddress = document.getElementById('emailAddress').value.trim();
        var phoneNumber = document.getElementById('phoneNumber').value.trim();
        var password = document.getElementById('Contraseña').value.trim();
        var repeatPassword = document.getElementById('RepetirContraseña').value.trim();

        var nameRegex = /^[a-zA-Z\s]{1,20}$/;
        var lastNameRegex = /^[a-zA-Z\s]{1,35}$/;
        var phoneRegex = /^\d{9}$/;  // Número exacto de 9 dígitos
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!firstName || !lastName || !birthdayDate || !emailAddress || !phoneNumber || !password || !repeatPassword) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        if (!nameRegex.test(firstName)) {
            alert('El nombre no debe contener números y debe tener un máximo de 20 caracteres.');
            return;
        }

        if (!lastNameRegex.test(lastName)) {
            alert('El apellido no debe contener números y debe tener un máximo de 35 caracteres.');
            return;
        }

        if (!phoneRegex.test(phoneNumber)) {
            alert('El número de teléfono debe tener exactamente 9 dígitos.');
            return;
        }

        if (!emailRegex.test(emailAddress)) {
            alert('El correo electrónico debe ser válido y contener un @.');
            return;
        }

        if (!passwordRegex.test(password)) {
            alert('La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.');
            return;
        }

        if (password !== repeatPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Validación de edad
        var today = new Date();
        var birthDate = new Date(birthdayDate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            alert('Debes ser mayor de edad para registrarte.');
            return;
        }

        // Guarda los datos en localStorage
        localStorage.setItem('registroEmail', emailAddress);
        localStorage.setItem('registroPassword', password);
        
        console.log('Email registrado:', emailAddress);
        console.log('Password registrado:', password);

        alert('Registro exitoso.');
        window.location.href = "/html/iniciarsesion.html"; // Redirigir a la página de inicio de sesión
    });

    var passwordInput = document.getElementById('Contraseña');
    var passwordStrength = document.createElement('div');
    passwordStrength.id = 'passwordStrength';
    passwordInput.parentNode.appendChild(passwordStrength);

    passwordInput.addEventListener('input', function() {
        var password = passwordInput.value;
        var strengthMessage = '';
        
        if (password.length < 8) {
            strengthMessage = 'Poco segura';
        } else if (password.length >= 8 && password.length < 12) {
            strengthMessage = 'Estable';
        } else {
            strengthMessage = 'Muy segura';
        }

        passwordStrength.textContent = `Seguridad de la contraseña: ${strengthMessage}`;
    });

    // Agregar botón para mostrar/ocultar contraseña
    var togglePasswordBtn = document.createElement('button');
    togglePasswordBtn.type = 'button';
    togglePasswordBtn.textContent = 'Mostrar Contraseña';
    passwordInput.parentNode.appendChild(togglePasswordBtn);

    togglePasswordBtn.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordBtn.textContent = 'Ocultar Contraseña';
        } else {
            passwordInput.type = 'password';
            togglePasswordBtn.textContent = 'Mostrar Contraseña';
        }
    });
});
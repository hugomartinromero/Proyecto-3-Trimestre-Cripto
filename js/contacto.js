// Validación de formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
    var form = event.target;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
    if (form.checkValidity()) {
        event.preventDefault();
        //alert('¡El formulario ha sido enviado correctamente!');
        form.reset();
        form.classList.remove('was-validated');


        var popup = document.createElement("div");
            popup.textContent = "¡El formulario ha sido enviado correctamente!";
            popup.classList.add("popup");
            document.body.appendChild(popup);
            setTimeout(function () {
                popup.style.display = "none";
            }, 3000); 


            
    }
}, false);

// Validación de teléfono (debe tener 9 cifras)
document.getElementById("phone").addEventListener("input", function (event) {
    var phoneInput = event.target;
    var phoneNumber = phoneInput.value.replace(/\D/g, '');
    if (phoneNumber.length !== 9) {
        phoneInput.setCustomValidity("El teléfono debe tener 9 cifras.");
    } else {
        phoneInput.setCustomValidity("");
    }
});

// Validación de nombre y apellido (no debe tener números ni caracteres especiales)
var nameInputs = document.querySelectorAll("#firstName, #lastName");
nameInputs.forEach(function (input) {
    input.addEventListener("input", function (event) {
        var nameInput = event.target;
        var nameValue = nameInput.value;
        if (/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]/.test(nameValue)) {
            nameInput.setCustomValidity("El nombre y el apellido no deben contener números ni caracteres especiales.");
        } else {
            nameInput.setCustomValidity("");
        }
    });
});

// Limitar la longitud del mensaje a 250 caracteres
document.getElementById("message").addEventListener("input", function (event) {
    var messageInput = event.target;
    var messageLength = messageInput.value.length;
    if (messageLength > 250) {
        messageInput.setCustomValidity("El mensaje no puede tener más de 250 caracteres.");
    } else {
        messageInput.setCustomValidity("");
    }
});
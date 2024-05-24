//Para cambiar la foto del usuario y que se actualice
$(document).ready(function () {
    $('#photo-file').change(function () {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#user-photo').attr('src', e.target.result);
        }
        reader.readAsDataURL(file);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const historialTransacciones = JSON.parse(localStorage.getItem('historialTransacciones')) || [];
    const historialTabla = document.getElementById('historialTabla');

    historialTransacciones.forEach(transaccion => {
        const fila = document.createElement('tr');

        const celdaCantidad = document.createElement('td');
        celdaCantidad.textContent = transaccion.cantidad;
        fila.appendChild(celdaCantidad);

        const celdaMoneda = document.createElement('td');
        celdaMoneda.textContent = transaccion.moneda;
        fila.appendChild(celdaMoneda);

        const celdaTipo = document.createElement('td');
        celdaTipo.textContent = transaccion.tipo;
        fila.appendChild(celdaTipo);

        const celdaPrecio = document.createElement('td');
        celdaPrecio.textContent = transaccion.precio;
        fila.appendChild(celdaPrecio);

        const celdaFecha = document.createElement('td');
        celdaFecha.textContent = transaccion.fecha;
        fila.appendChild(celdaFecha);

        historialTabla.appendChild(fila);
    });

    // Agregar evento click al botón de borrar historial
    document.getElementById('borrarHistorialBtn').addEventListener('click', function () {
        // Borrar el historial del almacenamiento local
        localStorage.removeItem('historialTransacciones');
        // Limpiar la tabla de historial
        historialTabla.innerHTML = ''; // Esto eliminará todas las filas de la tabla

        // Cerrar la ventana actual
        window.close();
        // Abrir una nueva ventana con perfil.html
        window.open('perfil.html', '_blank');
    });



    document.getElementById('botonMonedero').addEventListener('click', function () {
        

        // Cerrar la ventana actual
        window.close();
        // Abrir una nueva ventana con perfil.html
        window.open('/html/monedero.html', '_blank');
    });



    

});


// Recupera los datos del registro del almacenamiento local
var nombre = localStorage.getItem('registroNombre');
var apellidos = localStorage.getItem('registroApellidos');
var fechaNacimiento = localStorage.getItem('registroFechaNacimiento');
var correo = localStorage.getItem('registroCorreo');
var telefono = localStorage.getItem('registroTelefono');

// Muestra los datos en la página
document.getElementById('nombre').textContent = nombre;
document.getElementById('apellidos').textContent = apellidos;
document.getElementById('fechaNacimiento').textContent = fechaNacimiento;
document.getElementById('correo').textContent = correo;
document.getElementById('telefono').textContent = telefono;
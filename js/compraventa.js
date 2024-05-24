document.addEventListener("DOMContentLoaded", function () {
    // #region Crear historial
    let historialTransacciones = [];

    // #region Generar precios
    function generarPrecios(min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    }

    // #region Actualizar los precios cada 2 segundos
    function actualizarPrecios() {
        let nuevoPrecioBitcoin = generarPrecios(50000, 60000);
        let nuevoPrecioEthereum = generarPrecios(1000, 4000);
        let nuevoPrecioLitecoin = generarPrecios(50, 300);

        const ccantidadInput = document.getElementById('c-cantidad');
        const crecibirInput = document.getElementById('c-recibir');
        const cmonedaSelect = document.getElementById('c-moneda');
        const cmonedaRecibirSelect = document.getElementById('c-moneda-recibir');

        const ccantidad = parseFloat(ccantidadInput.value) || 0;
        const cmoneda = cmonedaSelect.value;

        let cvalorConvertido;
        switch (cmonedaRecibirSelect.value) {
            case 'Bitcoin':
                cvalorConvertido = ccantidad * (cmoneda === 'Euro' ? (1 / nuevoPrecioBitcoin) : (1.1 / nuevoPrecioBitcoin));
                break;
            case 'Ethereum':
                cvalorConvertido = ccantidad * (cmoneda === 'Euro' ? (1 / nuevoPrecioEthereum) : (1.1 / nuevoPrecioEthereum));
                break;
            case 'Litecoin':
                cvalorConvertido = ccantidad * (cmoneda === 'Euro' ? (1 / nuevoPrecioLitecoin) : (1.1 / nuevoPrecioLitecoin));
                break;
            default:
                cvalorConvertido = 0;
                break;
        }

        crecibirInput.value = cvalorConvertido.toFixed(8);

        const vcantidadInput = document.getElementById('v-cantidad');
        const vrecibirInput = document.getElementById('v-recibir');
        const vmonedaSelect = document.getElementById('v-moneda');
        const vmonedaRecibirSelect = document.getElementById('v-moneda-recibir');

        const vcantidad = parseFloat(vcantidadInput.value) || 0;
        const vmoneda = vmonedaSelect.value;

        let vvalorConvertido;
        switch (vmonedaRecibirSelect.value) {
            case 'Bitcoin':
                vvalorConvertido = vcantidad * (vmoneda === 'Euro' ? (1 / nuevoPrecioBitcoin) : (1.1 / nuevoPrecioBitcoin));
                break;
            case 'Ethereum':
                vvalorConvertido = vcantidad * (vmoneda === 'Euro' ? (1 / nuevoPrecioEthereum) : (1.1 / nuevoPrecioEthereum));
                break;
            case 'Litecoin':
                vvalorConvertido = vcantidad * (vmoneda === 'Euro' ? (1 / nuevoPrecioLitecoin) : (1.1 / nuevoPrecioLitecoin));
                break;
            default:
                vvalorConvertido = 0;
                break;
        }

        vrecibirInput.value = cvalorConvertido.toFixed(8);
    }

    // #Region Crear historial de transacciones
    function registrarTransaccion(cantidad, moneda, tipo, precio) {
        const transaccion = {
            cantidad: cantidad,
            moneda: moneda,
            tipo: tipo,
            precio: precio,
            fecha: new Date().toLocaleString()
        };

        historialTransacciones.push(transaccion);
        console.log("Transacción registrada:", transaccion);
    }

    const formulario = document.getElementById('formularioCompraVenta');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const cantidad = parseFloat(document.getElementById('botonComprar').classList.contains('text-yellow') ? document.getElementById('c-cantidad').value : document.getElementById('v-cantidad').value);
        const moneda = document.getElementById('c-moneda').value;
        const tipo = document.getElementById('botonComprar').classList.contains('text-yellow') ? 'compra' : 'venta';
        const precio = parseFloat(document.getElementById('c-recibir').value);

        const precioTotal = cantidad * precio;

        registrarTransaccion(cantidad, moneda, tipo, precioTotal);
        formulario.reset();
    });

    setInterval(actualizarPrecios, 2000);
});

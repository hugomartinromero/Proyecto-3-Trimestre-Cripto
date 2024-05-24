document.addEventListener("DOMContentLoaded", function () {
    // #region Generar precios
    function generarPrecios(min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    }

    let preciosBitcoin = [generarPrecios(50000, 60000)];
    let preciosEthereum = [generarPrecios(1000, 4000)];
    let preciosLitecoin = [generarPrecios(50, 300)];

    // #region Actualizar los precios cada 2 segundos
    function actualizarPrecios() {
        let nuevoPrecioBitcoin = generarPrecios(50000, 60000);
        let nuevoPrecioEthereum = generarPrecios(1000, 4000);
        let nuevoPrecioLitecoin = generarPrecios(50, 300);

        preciosBitcoin.push(nuevoPrecioBitcoin);
        preciosEthereum.push(nuevoPrecioEthereum);
        preciosLitecoin.push(nuevoPrecioLitecoin);

        if (preciosBitcoin.length > 10) {
            preciosBitcoin.shift();
            graficaBitcoin.data.labels.shift();
        }
        if (preciosEthereum.length > 10) {
            preciosEthereum.shift();
            graficaEthereum.data.labels.shift();
        }
        if (preciosLitecoin.length > 10) {
            preciosLitecoin.shift();
            graficaLitecoin.data.labels.shift();
        }

        let diaNuevo = new Date().toLocaleTimeString();
        graficaBitcoin.data.labels.push(diaNuevo);
        graficaEthereum.data.labels.push(diaNuevo);
        graficaLitecoin.data.labels.push(diaNuevo);

        graficaBitcoin.update();
        graficaEthereum.update();
        graficaLitecoin.update();

        document.getElementById("precioBitcoin").innerHTML = nuevoPrecioBitcoin;
        document.getElementById("precioEthereum").innerHTML = nuevoPrecioEthereum;
        document.getElementById("precioLitecoin").innerHTML = nuevoPrecioLitecoin;
    }

    setInterval(actualizarPrecios, 2000);

    // #region Gráfica bitcoin
    let bitcoin = document.getElementById("grafica-bitcoin").getContext("2d");
    let graficaBitcoin = new Chart(bitcoin, {
        type: "line",
        data: {
            labels: ["Inicio"],
            datasets: [
                {
                    label: "Precio",
                    data: preciosBitcoin,
                    borderColor: "#f0b90b",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        },
    });

    // #region Gráfica ethereum
    let ethereum = document.getElementById("grafica-ethereum").getContext("2d");
    let graficaEthereum = new Chart(ethereum, {
        type: "line",
        data: {
            labels: ["Inicio"],
            datasets: [
                {
                    label: "Precio",
                    data: preciosEthereum,
                    borderColor: "#f0b90b",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        },
    });

    // #region Gráfica litecoin
    let litecoin = document.getElementById("grafica-litecoin").getContext("2d");
    let graficaLitecoin = new Chart(litecoin, {
        type: "line",
        data: {
            labels: ["Inicio"],
            datasets: [
                {
                    label: "Precio",
                    data: preciosLitecoin,
                    borderColor: "#f0b90b",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // #region Gráfica bitcoin
    var bitcoin = document.getElementById("grafica-bitcoin").getContext("2d");
    var graficaBitcoin = new Chart(bitcoin, {
        type: "line",
        data: {
            labels: [
                "02/05/2024",
                "03/05/2024",
                "04/05/2024",
                "05/05/2024",
                "06/05/2024",
                "07/05/2024",
            ],
            datasets: [
                {
                    label: "Precio",
                    data: [52940, 54850, 58240, 59160, 59185, 58948],
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
    var ethereum = document.getElementById("grafica-ethereum").getContext("2d");
    var graficaEthereum = new Chart(ethereum, {
        type: "line",
        data: {
            labels: [
                "02/05/2024",
                "03/05/2024",
                "04/05/2024",
                "05/05/2024",
                "06/05/2024",
                "07/05/2024",
            ],
            datasets: [
                {
                    label: "Precio",
                    data: [2000, 2700, 2800, 2870, 2900, 2860],
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
    var litecoin = document.getElementById("grafica-litecoin").getContext("2d");
    var graficaLitecoin = new Chart(litecoin, {
        type: "line",
        data: {
            labels: [
                "02/05/2024",
                "03/05/2024",
                "04/05/2024",
                "05/05/2024",
                "06/05/2024",
                "07/05/2024",
            ],
            datasets: [
                {
                    label: "Precio",
                    data: [77, 90, 83, 80, 93, 87],
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

// #region Ejemplo
let euro = "EUR"
let dolar = "USD"

let moneda = document.getElementsByName("moneda")

let precioBitcoin = document.getElementById("precioBitcoin")

precioBitcoin.innerHTML = "58.948"

let precioEthereum = document.getElementById("precioEthereum")

precioEthereum.innerHTML = "2.860"

let precioLitecoin = document.getElementById("precioLitecoin")

precioLitecoin.innerHTML = "87"

for (let i = 0; i < moneda.length; i++) {
    moneda[i].innerHTML = euro
}
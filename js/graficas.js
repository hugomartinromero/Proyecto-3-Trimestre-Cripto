document.addEventListener("DOMContentLoaded", function () {
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
                    data: [21, 19, 10, 5, 8, 10],
                    borderColor: "#f0b90b",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
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
                    data: [19, 10, 8, 21, 10, 5],
                    borderColor: "#f0b90b",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
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
                    data: [20, 19, 5, 8, 10, 10],
                    borderColor: "#f0b90b",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
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

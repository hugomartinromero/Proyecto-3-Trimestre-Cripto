let euro = "EUR"
let dolar = "USD"

let moneda = document.getElementsByName("moneda")

for (let i = 0; i < moneda.length; i++) {
    moneda[i].innerHTML = euro
}

let precioBitcoin = document.getElementById("precioBitcoin")

precioBitcoin.innerHTML = "58.918,41"

let precioEthereum = document.getElementById("precioEthereum")

precioEthereum.innerHTML = "2.959,50"

let precioLitecoin = document.getElementById("precioLitecoin")

precioLitecoin.innerHTML = "77,64"


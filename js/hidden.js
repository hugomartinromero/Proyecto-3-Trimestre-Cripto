let bitcoin = document.getElementById("bitcoin")
let ethereum = document.getElementById("ethereum")
let litecoin = document.getElementById("litecoin")

ethereum.classList.add("visually-hidden")
litecoin.classList.add("visually-hidden")

function verBitcoin() {
    ethereum.classList.add("visually-hidden")
    litecoin.classList.add("visually-hidden")
    bitcoin.classList.remove("visually-hidden")
}

function verEthereum() {
    litecoin.classList.add("visually-hidden")
    bitcoin.classList.add("visually-hidden")
    ethereum.classList.remove("visually-hidden")
}

function verLitecoin() {
    bitcoin.classList.add("visually-hidden")
    ethereum.classList.add("visually-hidden")
    litecoin.classList.remove("visually-hidden")
}

let comprar = document.getElementById("comprar")
let vender = document.getElementById("vender")

vender.classList.add("visually-hidden")

function verCompra() {
    vender.classList.add("visually-hidden")
    comprar.classList.add("text-yellow")
    comprar.classList.remove("text-white")
    comprar.classList.remove("visually-hidden")
}

function verVenta() {
    comprar.classList.add("visually-hidden")
    vender.classList.remove("visually-hidden")
}
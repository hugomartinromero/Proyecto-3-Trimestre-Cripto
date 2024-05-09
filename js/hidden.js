let comprar = document.getElementById("comprar");
let vender = document.getElementById("vender");
let botonComprar = document.getElementById("botonComprar");
let botonVender = document.getElementById("botonVender");

function verCompra() {
    botonVender.classList.add("text-white");
    botonComprar.classList.add("text-yellow");
    botonComprar.classList.remove("text-white");
    vender.classList.add("visually-hidden");
    comprar.classList.remove("visually-hidden");
}

function verVenta() {
    botonComprar.classList.add("text-white");
    botonVender.classList.add("text-yellow");
    botonVender.classList.remove("text-white");
    comprar.classList.add("visually-hidden");
    vender.classList.remove("visually-hidden");
}

let bitcoin = document.getElementById("bitcoin");
let ethereum = document.getElementById("ethereum");
let litecoin = document.getElementById("litecoin");

function verBitcoin() {
    ethereum.classList.add("visually-hidden");
    litecoin.classList.add("visually-hidden");
    bitcoin.classList.remove("visually-hidden");
}

function verEthereum() {
    litecoin.classList.add("visually-hidden");
    bitcoin.classList.add("visually-hidden");
    ethereum.classList.remove("visually-hidden");
}

function verLitecoin() {
    bitcoin.classList.add("visually-hidden");
    ethereum.classList.add("visually-hidden");
    litecoin.classList.remove("visually-hidden");
}
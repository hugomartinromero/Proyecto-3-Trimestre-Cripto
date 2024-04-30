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

let vehiculo = "coche";
let litrosConsumidos = 20; 
let precioPorLitro = 0;

if (vehiculo === "coche") {
    precioPorLitro = 86;
} else if (vehiculo === "moto") {
    precioPorLitro = 70;
} else if (vehiculo === "autobús" || vehiculo === "autobus") {
    precioPorLitro = 55;
}

let total = precioPorLitro * litrosConsumidos;

if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
    total += 50;
} else if (litrosConsumidos > 25) {
    total += 25;
}

console.log("Total a pagar:", total);
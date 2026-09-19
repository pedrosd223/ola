let numeroIngresado = 4;
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

if (numeroIngresado === numeroSecreto) {
    console.log("¡Felicitaciones! Acertaste, el número secreto era " + numeroSecreto);
} else {
    console.log("No acertaste. Ingresaste " + numeroIngresado + " y el número secreto era " + numeroSecreto);
}
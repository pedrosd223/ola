let edad = 21; // Cambiá este número para probar

if (edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else {
    let mensajeImpar = (edad % 2 !== 0) ? " ¿Sabías que tu edad es impar?" : "";

    if (edad < 18) {
        console.log("No puede pasar al bar." + mensajeImpar);
    } else if (edad < 21) {
        console.log("Puede pasar al bar, pero no puede tomar alcohol." + mensajeImpar);
    } else if (edad === 21) {
        console.log("Puede pasar al bar y tomar alcohol. ¡Felicitaciones por haber llegado a la mayoría de edad!" + mensajeImpar);
    } else {
        console.log("Puede pasar al bar y tomar alcohol." + mensajeImpar);
    }
}
let sandwichBase = "pollo";
let tipoPan = "blanco";
let queso = true;
let tomate = false;
let lechuga = true;
let cebolla = false;
let mayonesa = false;
let mostaza = true;

let totalSandwich = 0;

if (sandwichBase === "pollo") {
    totalSandwich += 150;
} else if (sandwichBase === "carne") {
    totalSandwich += 200;
} else if (sandwichBase === "veggie" || sandwichBase === "vegetariano") {
    totalSandwich += 100;
}

if (tipoPan === "blanco") {
    totalSandwich += 50;
} else if (tipoPan === "negro") {
    totalSandwich += 60;
} else if (tipoPan === "s/gluten" || tipoPan === "singluten") {
    totalSandwich += 75;
}

if (queso) { totalSandwich += 20; }
if (tomate) { totalSandwich += 15; }
if (lechuga) { totalSandwich += 10; }
if (cebolla) { totalSandwich += 15; }
if (mayonesa) { totalSandwich += 5; }
if (mostaza) { totalSandwich += 5; }

console.log("Total a pagar del sándwich:", totalSandwich);
function calcularIMC(peso, altura) {
    // Calculamos el Índice de Masa Corporal (IMC)
    const imc = peso / (altura * altura);
    
    // Clasificamos el IMC según los rangos establecidos
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

console.log("-----------------------------------");
console.log("EJERCICIO 8");
console.log("-----------------------------------");
console.log(calcularIMC(60, 1.7)); // "Normal"
console.log(calcularIMC(80, 1.7)); // "Sobrepeso"

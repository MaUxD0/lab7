function calculadora(operacion, num1, num2) {
    // Verificamos la operación y ejecutamos la lógica correspondiente
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            // Verificamos si el segundo número es 0
            if (num2 === 0) {
                return "No se puede dividir entre 0";
            }
            return num1 / num2;
        default:
            // Si la operación no es válida
            return "Operación no reconocida";
    }
}

console.log("-----------------------------------");
console.log("EJERCICIO 4");
console.log("-----------------------------------");
console.log(calculadora("suma", 5, 3));            // 8
console.log(calculadora("division", 10, 0));       // "No se puede dividir entre 0"
console.log(calculadora("multiplicacion", 2, 4));  // 8

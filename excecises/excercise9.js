function convertirTemperatura(temperatura, escala) {
    // Convertir de Celsius a Fahrenheit
    if (escala === "C") {
        return (temperatura * 9/5) + 32;
    }
    // Convertir de Fahrenheit a Celsius
    else if (escala === "F") {
        return (temperatura - 32) * 5/9;
    }
    // Si la escala no es válida
    else {
        return "Escala no válida";
    }
}

console.log("-----------------------------------");
console.log("EJERCICIO 9");
console.log("-----------------------------------");
console.log(convertirTemperatura(0, "C"));  // 32
console.log(convertirTemperatura(32, "F")); // 0

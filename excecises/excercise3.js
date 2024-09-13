function mayorDeDos(num1, num2) {
    // Verificamos si los números son iguales
    if (num1 === num2) {
        return "Los números son iguales";
    }
    // Retornamos el mayor de los dos números
    return num1 > num2 ? num1 : num2;
}

console.log("-----------------------------------");
console.log("EJERCICIO 3");
console.log("-----------------------------------");
console.log(mayorDeDos(5, 10)); // 10
console.log(mayorDeDos(8, 8));  // "Los números son iguales"

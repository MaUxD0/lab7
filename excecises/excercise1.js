function saludar(nombre) {
    // Si el nombre es vacío o no se proporciona, retornamos "Hola, desconocido"
    if (!nombre) {
        return "Hola, desconocido";
    }
    // Si el nombre está presente, retornamos el saludo personalizado
    return "Hola, " + nombre;
}

console.log("-----------------------------------");
console.log("EJERCICIO 1");
console.log("-----------------------------------");
console.log(saludar("Ana")); // "Hola, Ana"
console.log(saludar()); // "Hola, desconocido"

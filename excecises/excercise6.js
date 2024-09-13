function calcularDescuento(precio, porcentaje) {
    // Verificamos si el porcentaje es válido
    if (porcentaje < 0 || porcentaje > 100) {
        return "Porcentaje no válido";
    }
    
    // Calculamos el descuento y el precio final
    const descuento = (precio * porcentaje) / 100;
    const precioFinal = precio - descuento;
    
    return precioFinal;
}

console.log("-----------------------------------");
console.log("EJERCICIO 6");
console.log("-----------------------------------");
console.log(calcularDescuento(100, 20)); // 80
console.log(calcularDescuento(50, -5));  // "Porcentaje no válido"

function validarContrasena(contrasena) {
    // Verificamos si la contraseña tiene al menos 8 caracteres
    if (contrasena.length < 8) {
        return "Contraseña no válida";
    }
    
    // Verificamos si la contraseña contiene al menos un número
    const contieneNumero = /\d/.test(contrasena);
    
    // Retornamos el resultado basado en las verificaciones
    return contieneNumero ? "Contraseña válida" : "Contraseña no válida";
}

console.log("-----------------------------------");
console.log("EJERCICIO 7");
console.log("-----------------------------------");
console.log(validarContrasena("pass1234")); // "Contraseña válida"
console.log(validarContrasena("password")); // "Contraseña no válida"

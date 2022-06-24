'use strict'

/**
 * Tabla de multiplicar de un numero introducido
 */

var x = parseInt(prompt("Introduzca un número: "));

document.write("<h1>Tabla de multiplicar del:" + " " + x + "</h1>");

for (let i = 1; i <= 10; i++) {
    console.log("entro");
    document.write(i + " x " + x + " = " + i * x + "<br>");
}
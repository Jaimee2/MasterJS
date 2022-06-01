'use strict'

/*
 Programa que pida dos numeros y que devuelva cual es mayor, menor o si son iguales 
 */
document.write("Ejercicio 1");
var x = parseInt(prompt("Introduzca el numero 1: "));
var y = parseInt(prompt("Introduzca el numero 2: "));

console.log(x);
console.log(y);
//Si los numeros no son NaN
if (!isNaN(x) && !isNaN(y)) {
    if (x == y) {
        console.log("Los numeros son iguales");
    } else {
        if (x > y) {
            console.log(x + " > " + y);
        } else {
            console.log(y + " > " + x);
        }
    }
}

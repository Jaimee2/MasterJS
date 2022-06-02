'use strict'


/**
 * Calculadora.
 */

var x = parseInt(prompt("Introduce el primer numero: "));
var y = parseInt(prompt("Introduce el segundo numero: "));

while (isNaN(x) || isNaN(y)) {
    var x = parseInt(prompt("Introduce el primer numero: "));
    var y = parseInt(prompt("Introduce el segundo numero: "));
}


var resultado = "La suma es: " + (x + y) + "<br>" +
    "La resta es: " + (x - y) + "<br>" +
    "La división es: " + (x / y) + "<br>";

document.write(resultado);



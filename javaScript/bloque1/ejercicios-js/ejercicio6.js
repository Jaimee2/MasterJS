'use strict'

/*
 * Decir si un numero es impar o par.
 * Si es numero no es valido, pedir otra vez un numero. 
*/

var x = parseInt(prompt("Introduce el numero: "));

while (isNaN(x)) {
    var x = parseInt(prompt("Introduce el numero: "));
}

if (x % 2 == 0) {
    document.write("Numero par");
} else {
    document.write("numero impar");
}

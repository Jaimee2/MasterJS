'use strict'

/*
 * Muestre todos los divisores de un numero introducido en un promnt 
 */

//Pedimos el numero 

var x = parseInt(prompt("Introduce el numero: "));


for (let i = 0; i <= x; i++) {
    //Un numero es divisor de x cuando su resto es == 0
    if (x % i == 0) {
        document.write(i + " <br/>");
    }

}
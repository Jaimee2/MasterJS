'use strict'


/**
 * Mostrar todos los numeros ente dos numeros introducidos por el usuario.
 */

//Pedimos los dos numeros 

var start = parseInt(prompt("Introduce el primer numero: "));

var end = parseInt(prompt("Introduce el segundo numero: "));


document.write("<h2> " + start + "-->" + end + "<h2/>")
for (let i = start; i <= end; i++) {
    document.write(i + " <br/>");
}

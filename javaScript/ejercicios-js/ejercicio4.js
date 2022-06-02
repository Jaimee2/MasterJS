'use strict'
/*
 * Mostrar todos los numeros impares entre los numeros que ha introducido el usuario 
 */

//Pedimos los dos numeros 

var start = parseInt(prompt("Introduce el primer numero: "));

var end = parseInt(prompt("Introduce el segundo numero: "));


document.write("<h2> " + start + "-->" + end + "<h2/>")
for (let i = start; i <= end; i++) {
    if (i % 2 != 0) {
        document.write(i + " <br/>");
    }

}
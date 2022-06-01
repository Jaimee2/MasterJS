'use strict'

document.write("Ejercicio 2");

/*
    Utilizando un bucle mostrar la suma y la media de los numero introducidos por 
    el usuario hasta que itroduzca un numero negativo. 
 */

var suma = 0;
var contador = 0;
var numero;
var media;
do {
    contador++;
    numero = parseInt(prompt("Introducir numero:"));
    suma += numero;
    media = suma / contador;
    console.log("Suma: " + suma + " Media: " + media);
} while (numero >= 0);

document.write("<h1>Fin del bucle</h1>")
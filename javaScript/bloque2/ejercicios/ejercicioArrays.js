'use strict'

/**
 * Programa que pida 6 numeros de pantalla y los meta en un array
 * Mostrar el array entero (Todos sus elementos) en el cuerpo de la página y en la consola
 * Ordenar y mostrarlo
 * Invertir su orden y mostrarlo
 * Mostrar cuantos elementos tiene el array
 * buscar un valor introducido poir el usuario, que nos diga si lo encuentra o no
 */


//Array
var numeros = new Array(6);

for (let i = 0; i < numeros.length; i++) {
    numeros[i] = parseInt(prompt("Introduce un número: ", 0));
}

console.log(numeros);

function mostrarArray(array, texto = "") {
    document.write("<h1>Contenido del array - " + texto + "</h1>");
    numeros.forEach((element, index) => {
        document.write("<strong>" + element + "</strong><br>");
    });
}
mostrarArray(numeros, "Original");

//Ordenamos
numeros.sort();

//Mostramos por consola
console.log(numeros);

mostrarArray(numeros, "ordenado");

//Invertir y mostrar
numeros.reverse();

mostrarArray(numeros, "Descendente");

//Contar elementos
document.write("<h1>El número de elemntos del array-> " + numeros.length + "<h1>");

//Busqueda 

var busqueda = parseInt(prompt("Busca un número: ", 0));

var buscado = numeros.findIndex(numero => numero == busqueda);

if (buscado != -1) {
    document.write("Elememto: " + busqueda);
} else {
    document.write("Elemento no encontrado")
}
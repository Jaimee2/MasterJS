'use strict'

//Funciones
function calculadora(num1, num2, mostra = false) {
    if (mostra) {
        document.write("suma: " + num1 + num2);
    } else {
        console.log("suma: " + num1 + num2);
    }

}

calculadora(1, 1, true);

//Parametros REST and SPREAD
//Para obtener un array con el resto de parametros insertados
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {

    console.log("fruta1: " + fruta1);
    console.log("fruta2  : " + fruta2);
    console.log(resto_de_frutas)

}

var frutas = ["naranja", "coco"];
listadoFrutas(...frutas, "sandia", "kiwi", "melon", "pera");

//SPREAD ...
listadoFrutas(...frutas, "sandia", "kiwi", "melon", "pera");

//Funciones anonimas
//Son las funciones que no tienen nombres

var pelicula = function (nombre) {
    return "la pelicula es " + nombre;
}

console.log(pelicula("regalo"));

//Callback
//Se le pasa una funcion anonima
// Insertar funciones dentro de los los parametros de entrada de una funcion

function sumame(n1, n2, sumaYmuestra, sumaPorDos) {
    var suma = n1 + n2;
    sumaYmuestra(suma);
    sumaPorDos(suma);

}

sumame(1, 1, function (dato) {
    console.log("la suma es: ", dato);
},
    //Tabién se puede escribir de la siguiete manera:
    dato => {
        console.log("La suma por dos es", dato * 2);
    });


//Ambitos de las variables
//Bueno aqui explica que donde se declare las variables importan

var holaMundo = "hola mundo";

function mostrarTexto(texto) {
    console.log(texto);
}

mostrarTexto(holaMundo);

var numero = 1;

mostrarTexto(numero.toString());

//Transformacion de textos 

var texto1 = "Hola esto es un texto1";
var texto2 = "hola esto es un texto2";

var dato = numero.toString();
console.log(dato);

dato = texto1.toLowerCase();
console.log(dato);
dato = texto1.toUpperCase();
console.log(dato);

//Calcular longitud de un texto

console.log("Logitud del texto: " + texto1.length);

//Concatenar textos

var textoConcatenado = texto1 + " " + texto2;
console.log(textoConcatenado);

//Busquedas

var busqueda = texto1.indexOf("esto");
console.log("Empieza en el caracter: " + busqueda);

var busqueda = texto1.startsWith("Hola");
console.log("Retorno true si lo encuetra -->>>> " + busqueda);

var busqueda = texto1.startsWith("jaime");
console.log("Retorno true si lo encuetra -->>>> " + busqueda);

//Funciones de reemplazo

var busqueda = texto1.replace("Hola", "Que tal");
console.log(busqueda);

//Array con todas las palabras separadas

var Separar = texto1.split(" ");
console.log(Separar[0]);

//Plantillas de texto JS

var nombre = prompt("Add your name: ");

var apellido = prompt("Add your surname");

//Es necesario las comillas invertidas
var plantilla = `<h1>Hola que tal</h1>
                <h2> Mi nombre es ${nombre}</h2>
                <h2>Y mi apellido es ${apellido}</h2>
    `;

document.write(plantilla);


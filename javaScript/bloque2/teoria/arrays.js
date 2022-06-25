'use strict'

var nombre = "Jaime";
var nombres = ["Jaime", "pepe", "Manolo", 52, true];
console.log(nombres);

var lenguajes = new Array("php", "java", "cobol");
console.log(lenguajes);
console.log("longutud del array: " + lenguajes.length);

var elemento = parseInt(prompt("introducir elemento del array: ", 0));

if (elemento <= lenguajes.length) {
    alert(lenguajes[elemento]);
} else {
    alert("te has colado crack")
}

document.write("<h1>Lenguajes de programcion: </h1>");

for (let i = 0; i < lenguajes.length; i++) {
    document.write(lenguajes[i] + "<br>");
}
document.write("------------------------<br>");

lenguajes.forEach(element => {
    document.write(element + "<br>");
});
document.write("------------------------<br>");

lenguajes.forEach((element, index) => {
    document.write("indice: " + index + " - " + element + " <br> ");
});

//Arrays multidimensional

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["Peli1", "peli2"];

var cine = [categorias, peliculas];
console.log(cine[1][1]);
//Añadir elemento
peliculas.push("otra peli añadida");

console.log(cine[1][2]);

peliculas.pop(); //Borrar el ultimo elemento del array

console.log(cine);

//Para convertir un array a texto

var peliculasString = peliculas.join();

document.write(peliculasString);

//Ordenar un array 
//Ordenar alfabeticamente
console.log(peliculas.sort());
//Invertier un array
console.log(peliculas.reverse());

//Otro tipo de for
document.write("<br><br>")


for (let i in lenguajes) {
    document.write(lenguajes[i] + "<br>");
}

//Busqueda

var busqueda = lenguajes.find(function (lenguaje) {
    return lenguaje == "php";
});

console.log(busqueda);

//Tabién se pude escribir de la siguente forma:

var busqueda = lenguajes.find(lenguaje => lenguaje == "php");

console.log(busqueda);

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "php");

console.log(busqueda);
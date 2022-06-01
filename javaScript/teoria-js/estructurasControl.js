'use strict'

//Codicional if

var edad = 18;
var nombre = "Jaime"

if (edad >= 18) {
    if (edad >= 33) {
        console.log("Ya no eres milenial");
    } else {
        console.log(nombre + ". Edad:" + edad);
    }

} else {
    console.log(nombre + ". No es mayor o igual de 18");
}

if (edad >= 20 && edad <= 30) {
    console.log("estas en la mejor etapa de tu vida");
}


//Condicional switch

switch (edad) {
    case 18:
        console.log("tienes 18 tacos");
        break;
    case 29:
        console.log("Tines 19 añazos");
        break;
}

//Bucle for 

for (let i = 0; i < 10; i++) {
    console.log("Valor de i: " + i);
}
var year = 2022;

while (year != 1999) {
    document.write(year + "<br>")
    year--;
}

year = 2022;

document.write("<hr>")
do {
    document.write(year + "<br>")
    year--;
} while (year != 1999);
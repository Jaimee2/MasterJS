//Uso estricto --> Para ser menos permisivo
'use strict'

document.write('Recordando las variables de js');

// esto daría erro en modo "use estrict" --> pais = "España";
var pais = "España";
var continete = "Europa";
var pais_continente = pais + " " + continete;
console.log(pais, continete);
alert(pais_continente);


//Podemos definir también let para definer variables con let
let hola = "hola";

var numero = 40;
console.log(numero);
//var nos permite modificar el contenido de la variable
if (true) {
    var numero = 50;
    console.log(numero);
}

var texto = "Prueba";

if (true) {
    //Let genera una variable dentro del bloque del código
    //solo actua a nivel de bloque
    let texto = "cambio el texto";
    console.log(texto);
}
//se sigue mostrando "prueba"
console.log(texto);

//Constantes
const variableConstante = "Hola soy una constante";

//Salta error
//variableConstante = "intento cambiar la constante";

console.log(variableConstante);



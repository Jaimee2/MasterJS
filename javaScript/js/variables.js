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


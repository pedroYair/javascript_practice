/*
 DOM: permite acceder a las etiquetas html a modo de objetos

    - emplea el objeto document

    - getElementsByTagName: devuelve todas las etiquetas que cumplan con el tag pasado como parametro

        document.getElementsByTagName('p'); // todos los parrafos

    - getElementsByClassName('nombreClase')

 BOM: permite acceder a propiedades del navegador

    - emplea el objeto window

*/

// buscar por etiqueta
// devuelve un array

var parrafos = document.getElementsByTagName('p');
console.log(parrafos);
console.log(parrafos[0].innerText); // obteniendo solo el texto
console.log(parrafos[0].textContent); // obteniendo solo el texto

// buscar por clase
parrafos = document.getElementsByClassName("clase1");
console.log(parrafos);
console.log(parrafos[1].innerText); // obteniendo solo el texto

// crear un elemento html

var foto = document.createElement("img");
foto.src = "sintomas.jpg";
foto.title = "sintomas";
foto.width = "400";
document.body.appendChild(foto);


// trabajando con el navegador - BOM

// ancho y alto de la ventana
// estas funciones pueden ser invocadas sin anteponer window, pero se recomienda no hacerlo

console.log("ANCHO: " + window.innerWidth);
console.log("ALTO: " + window.innerHeight);

// almacenamiento local
// este almacenamiento local se puede ver en la pestaña aplication de las herramientas de desarrollador en el
// navegador

window.localStorage.setItem("nombreCampo", 'contenido');

// obteniendo el valor
var campo = window.localStorage.getItem("nombreCampo");
console.log(campo);
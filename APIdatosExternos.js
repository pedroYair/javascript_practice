/* api a consumir: https://jsonplaceholder.typicode.com/

*/

//*** Obteniendo datos con fetch

var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');
var mensajes = document.getElementById('mensajes');
var posts = null;

function getPosteos() {
    return fetch('http://jsonplaceholder.typicode.com/posts');

}

function getBanderas() {
    return fetch('https://restcountries.eu/rest/v2/all');
}

function mostrarDatos(posts) {
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}

function mostrarBanderas(countries) {
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    })
}

boton.addEventListener('click', function() {

    /*
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => {
            posts = data;
            mostrarDatos(posts)
        })
    */

    getPosteos()
        .then(data => data.json())
        .then(posts => {
            mostrarDatos(posts);
            return getBanderas(); // llamamos de inmediato los datos de la otra fuente
        })
        .then(data => data.json())
        .then(banderas => mostrarBanderas(banderas))
        // controlado los errores
        .catch(error => {
            mensajes.classList.toggle('hide'); // quitar la clase
            mensajes.innerHTML = error;
            setTimeout(() => mensajes.classList.toggle('hide'), 6000); // reaplicar la clase hide despues de 6 sgs
        })

});
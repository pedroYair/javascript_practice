"use strict"

const boton = document.querySelector(".boton");
const caja = document.querySelector("#caja1");
const video = document.querySelector("#video1");

// eventos de mouse

boton.addEventListener("click", function() { console.log("boton pulsado"); });

boton.addEventListener("mouseover", function() { console.log("Estas sobre el boton"); });

boton.addEventListener("mouseout", function() { console.log("Saliste del boton"); });


// eventos de teclado (se ejecutan cada vez que se pulsa un tecla)

window.addEventListener("keydown", function(event) {
    let tecla = String.fromCharCode(event.keyCode);
    console.log("presionaste la tecla " + tecla);
});

caja.addEventListener("keypress", function(event) { console.log("presionaste una tecla dentro de la caja de texto") });

window.addEventListener("keyup", function(event) { console.log("Soltaste una tecla") });

// evento carga total del documento

window.addEventListener('load', function() { alert("La pagina ha sido cargada totalmente") });


// eventos multimedia (video, audio)

video.addEventListener("play", function() { console.log("El video ha iniciado"); });

video.addEventListener("ended", function() { console.log("El video ha finalizado"); });

// cuando movemos el curso del video para adelante o atras, con currentTime vemos el tiempo al que se movio el video
video.addEventListener("seeking", function() { console.log("Se esta buscando en el video", this.currentTime); });
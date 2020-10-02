/*

    permiten ejecutar una o varias acciones cada cierto tiempo

    - setInterval: permite la ejecución infinita de un grupo de acciones cada determinado tiempo, hasta que se 
    detenga.

    - setTimeout: ejecuta una accion despues del tiempo indicado, pero solo una vez


*/

// ejemplo cambiar cada 2 segundos el color de fondo de la web

function setColor() {
    let pagina = document.body;
    pagina.style.background = pagina.style.background == "blue" ? "green" : "blue";
}

var temp1 = setInterval(function() {
    setColor();
}, 2000);


// para detener el temporizador

function stopTemporizador() {
    clearInterval(temp1);
}


// setTimeOut

setTimeout(function() {
    setColor();
}, 5000);
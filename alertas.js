/* este tipo de notificaciones se usan para informar algo considerado de gran importancia para el usuario, 
por lo cual no deben ser empleadas indiscriminadamente

*/

const video2 = document.querySelector("#video1");


video2.addEventListener("ended", function() {
    // ventana informativa
    alert("el video ha finalizado");

    // ventana de solicitud de confirmacion (aceptar = true, cancelar = false)
    let resp = confirm("Repetir el video?");

    if (resp == true) {
        video.play();
    } // else {
    // window.location = "https://www.google.com.co/";
    // }

    // ventana ingreso de datos (el segundo parametro es opcional, corresponde al valor por default)
    // cancelar = null

    let email = prompt("escribe tu email para ver mas videos", "pcaravall17@gmail.com");

    if (email == null || email == "") {
        console.log("Sin datos");
    } else {
        console.log(email);
    }

});
// declaracion de arreglos

var arr = ["Pedro", "Caraballo", 27, 1.67, "M"];
console.log(arr);

var arr2 = new Array("Samir", "Kevin", "Mary angel");

// verificar si un objeto es de tipo array

console.log("Es array?: " + Array.isArray(arr));

// tamaño del arreglo

console.log("Mide: " + arr2.length);

// acceso a los elementos

console.log("Nombre posicion 1: " + arr2[1]);

// arreglo multidimensional

var arr3 = [arr, arr2];
console.log(arr3);
console.log(arr3[0][1]);

// agregar elementos al arreglo al final

arr2.push("daniel");
console.log(arr2);

// eliminar el ultimo elemento

arr2.pop();
console.log(arr2);

// retornar elementos del arreglo como una cadena

console.log(arr2.join());

// generar arreglo con el metodo split

var numeros = "1,2,3,4,5,6";

var arr4 = numeros.split(","); // separando la cadena por coma
console.log(arr4);

// generando arreglo con Array.from()

var ingHTML = Array.from(document.querySelectorAll(".ingredientes p"));
var ing = ingHTML.map(i => i.textContent);
console.log(ing);

// generando arreglo con Array.of()

var arr6 = Array.of("a", "b", "c", "d");
console.log(arr6);


// ordenar arreglo

console.log(arr2.sort()); // modifica el arreglo original
console.log(arr2.reverse()); //para ordenar de forma decreciente ordenamos de forma creciente y luego invertimos
// reverse no modifica el arreglo original

// destructuracion de arreglos

var n1 = null;
var n2 = null;
var n3 = null;

[n1, n2, n3] = arr2;

console.log(n1 + " - " + n2 + " - ", n3);

// recorriendo un arreglo con for - in

for (let i in arr2) {
    console.log(arr2[i]);
}


// recorriendo un arreglo con foreach

arr.forEach(nombre => { console.log(nombre); });
arr.forEach((nombre, index) => { console.log(index, nombre); }); // mostrando el indice


// buscar dentro del arreglo

// retorna el valor buscado si lo encuentra e undefined si no (solo trae la primera aparicion)
var resp = arr2.find(nombre => nombre == "Samir");
console.log(resp);

// obtener el indice donde se encuentra un valor del arreglo (- sino aparece)
var resp = arr2.findIndex(nombre => nombre == "Samir");
console.log(resp);

var personas = [
    { nombre: "pedro", edad: 27, pais: "colombia" },
    { nombre: "samir", edad: 24, pais: "colombia" },
    { nombre: "kevin", edad: 19, pais: "colombia" },
    { nombre: "daniel", edad: 18, pais: "venezuela" }
];

console.log(personas.findIndex(persona => persona.edad == 19));

// filtrar un arreglo

resp = personas.filter(persona => persona.pais == "colombia");
console.log(resp);

// validacion de elementos del array

// some permite validar si algun valor del array cumple la funcion pasada como callback
resp = personas.some(persona => persona.edad > 20);
console.log("Existen personas mayores de 20?: " + resp);

// every permite validar si todos los valores del array cumplen la funcion pasada como callback
resp = personas.every(persona => persona.edad > 20);
console.log("Todos son mayores de 20?: " + resp);
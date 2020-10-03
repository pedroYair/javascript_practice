// valor maximo permitido por js
console.log("Valor maximo: " + Number.MAX_VALUE);

// valor minimo permitido por js
console.log("Valor minimo: " + Number.MIN_VALUE);

// infinito negativo
console.log("Negativo infinito: " + Number.NEGATIVE_INFINITY);

// infinito positivo
console.log("Positivo infinito: " + Number.POSITIVE_INFINITY);

// valor Not a Number
console.log("NaN: " + Number.NaN);



// CONVIRTIENDO A TIPOS NUMEROS

var num = "10.45";
var num2 = 1.5;

console.log("String a Number: ", Number(num));

console.log("String a Entero: ", parseInt(num));

console.log("String a Float: ", parseFloat(num));

console.log("es un numero?: ", isNaN(num));

console.log("es entero?: ", Number.isInteger(num));

// el valor pasado indica cuanto digitos se van a mostrar
console.log("Numero en forma exponencial: ", num2.toExponential(2));

// ajustar el valor para manejar siempre la misma cantidad de decimales
// si se le pasa el valor 0 como parametro redondeará el numero
console.log("Reajustar numero: ", num2.toFixed(4)); // el valor serpa reajustado a cuatro decimales

console.log("Valor numerico a string: ", num2.toString());
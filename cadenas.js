// forma simple de crear una cadena
var nombre = "Pedro yair Caraballo Vallejo";

// forma object

var nombre2 = new String("Samir caraballo vallejo caraballo otro Caraballo");

// acceso a caracteres de la cadena

console.log(nombre[0] + "-" + nombre2[0]);

// tamaño de la cadena

console.log(nombre.length + "-" + nombre2.length);

// metodos de busqueda (si el resultado es -1 entonces la subcadena no existe dentro de la cadena)

// buscar la primera aparicion de una subcadena - retornando la posicion  dentro de la cadena donde 
// inicia la subcadena

console.log(nombre.indexOf("yair"));

// tambien se puede hacer usando el metodo search

console.log(nombre.search("yair"));

// buscar la ultima aparicion de una subcadena - retornando la posicion  dentro de la cadena donde 
// inicia la subcadena

console.log(nombre2.lastIndexOf("caraballo"));

// buscando con expresiones regulares (la "i" indica que la busqueda sera incase sensitive)

console.log(nombre.search(/Pe/i));

console.log(nombre.search(/Ya/));

// buscar con match, retorna un arreglo donde por cada elemento indica la subcadena buscada, la posicion donde
// la encontró y la longitud de la subcadena encontrada
// por defecto solo busca la primera coincidencia

console.log(nombre2.match(/caraballo/));

// obteniendo todas las coincidencias

console.log(nombre2.match(/caraballo/g));

// buscar todas las coincidencias pero ignorando mayusculas y minusculas

console.log(nombre2.match(/caraballo/gi));

// obtener substring de la cadena
// obtener 10 caracteres iniando en la posicion 2 de la cadena
console.log(nombre.substr(2, 10));

// obtener substring de la cadena
// en este caso el segundo parametro inicia a contar desde el primer caracter a la izquierda
console.log(nombre.substring(2, 10));

// obtener un caracter segun su posicion

console.log(nombre.charAt(11));

// verificar si la palabra inicia con cierto caracter o subcadena

console.log("Inicia: " + nombre.startsWith("y"));
console.log("Inicia: " + nombre.startsWith("y", 6)); // iniciando la verificacion en la posicion 2

// verificar si la palabra inicia con cierto caracter o subcadena

console.log("Termina: " + nombre.endsWith("jo"));

// verificar si una subcadena esta incluida en una cadena

console.log("Incluye: " + nombre.includes("Valle"));
console.log("Incluye: " + nombre.includes("yair", 15)); // iniciando la busqueda a partir de la pocision 15

// repetir la cadena
// repetir el nombre 3 veces
res = nombre.repeat(3);

console.log("Repitiendo: " + res);

// reemplazar texto dentro de la cadena (retorna el resultado del reemplazo,pero no afecta la cadena original)
// reemplazar yair por Yair
res = nombre.replace("yair", "Yair");
console.log("Reemplazo: " + res);

// excluir una parte de la cadena

console.log("Excluyendo primeros 6 caracteres: " + nombre.slice(6));
// excluir los primeros 6 y los ultimos 2 caracteres
console.log("Excluyendo con inicio y final: " + nombre.slice(6, nombre.length - 2));

// dividir cadena por algun caracter (devuelve un arreglo con todas las cadenas producto de la separacion)

console.log("Diviendo: " + nombre.split(" "));

// quitar espacios en blanco antes y despues de una cadena

console.log("Quitando espacios: " + nombre.trim());

// convertir a minuscula y mayuscula la cadena

console.log("todo minuscula: " + nombre.toLowerCase());
console.log("todo mayuscula: " + nombre.toUpperCase());

// concatenar con la funcion concat

console.log("concatenando: " + nombre.concat(" ", nombre2, " ", "Kevin sair"));


// usando plantillas literales (permiten hacer que los mensajes se muestren de la misma forma en que son
// construidos en el codigo)

var mensaje = `Hola ${nombre} y te saluda ${nombre2}`;

console.log(mensaje);

var mensaje2 = `Hola:
 ${nombre},
te saluda ${nombre2}
como estas?`;

console.log(mensaje2);
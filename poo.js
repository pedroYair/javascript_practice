class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

    }

    nombreCompleto() {
        console.log(this.nombre + " " + this.apellido);
    }

    set edad(valor) {
        this.kgs = valor;
    }

    get edad() {
        return "La edad es " + this.kgs;
    }
}

var p1 = new Persona("pedro", "yair", 27);
console.log(p1);
console.log(p1.nombreCompleto());
p1.edad = 15;
console.log(p1.edad);

// HERENCIA

class Profesor extends Persona {

    constructor(nombre, apellido, edad, materia, tipo) {
        super(nombre, apellido, edad);
        this.materia = materia;
        this.tipo = tipo;
    }
}

var prof1 = new Profesor("Alirio", "Paiba", 55, "Quimica", "Colegio");
console.log(prof1);
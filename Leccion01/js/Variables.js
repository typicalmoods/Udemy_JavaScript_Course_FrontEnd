//En este ejercicio muestro cómo trabajar con los diferentes tipos de variables.

//Tipo de dato string
var nombre = "Ann";
console.log("Mi nombre es:");
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre)

//Tipo de dato numérico
var numero = 100;
console.log("Este es el número:");
console.log(numero);

//Tipo de dato object
var persona = {
    nombre: "Ann",
    apellido: "Muñoz",
    segundoApellido: "Alfageme",
    edad: 25,
    telefono: 665732248,
    cambiarNombre: function (nuevoNombre) {
        this.nombre = nuevoNombre
    }
}

//Tipo de dato boolean (true, false)
var bandera = true
console.log(bandera)

var bandera = false
console.log(bandera)

//Tipo de dato function
function miFuncion() { }
console.log(miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo de clase es una function
class gente {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof gente);

//Tipo undefined
var x = 10;
console.log(x);


//null = ausencia de valor
var y = null;
console.log(y);

//Arrays
var autos = ["BMW", "Audi", "Volvo"]
console.log(autos);
console.log(typeof autos);

var z = "";
console.log(typeof z);
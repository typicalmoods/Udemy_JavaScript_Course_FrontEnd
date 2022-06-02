let a = 3;
let b = 2;
let c = "3";

let z = a < b;
console.log(z);

let y = a <= b;
console.log(y);

/*En este caso "a" no es menor ni igual a "b". Si quisiéramos que fuese igual a "b", sería en este caso:

let a = 3;
let b = 3;
let c = "3";

let y = a <= b;
console.log(y); false

Cambiando el valor de "b = 2;" a "b = 3;"*/

let p = a > b;
console.log(p);

/*Situación en la que "a" es igual a "b":

let a = 3;
let b = 3;
let c = "3";

let y = a >= b;
console.log(y); true

Ya que "a" no es mayor pero SÍ es igual a "b", la consola nos responderá con "true".

*/
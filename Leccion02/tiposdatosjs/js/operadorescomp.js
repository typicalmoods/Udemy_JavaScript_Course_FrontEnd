let a = 3;
let b = 2;
let c = "3";

let z = a == b; //Se revisa el valor sin importar el tipo
console.log(z);

let x = a === c; //Revisa los valores pero también los tipos 
console.log(x);

let u = a != c; //Para preguntar si uno del otro son distintos
console.log(u);

let o = a !== c; //Para preguntar si uno del otro son distintos teniendo en cuenta el tipo
console.log(o);

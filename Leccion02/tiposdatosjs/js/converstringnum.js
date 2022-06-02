let miNumero = "20";
//console.log(typeof miNumero); string

let edad = Number(miNumero);
//console.log(typeof edad); number

if (edad >= 18) {
    console.log("Acceso a voto");
}
else {
    console.log("Sin acceso a voto");
}

let resultado = (edad >= 18) ? "Acceso a voto" : "Sin acceso a voto";
console.log(resultado);

let miNumero = "15";
let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)) {
    console.log("No es un número");
}
else {
    if (edad >= 18) {
        console.log("Acceso a voto");
    }
    else {
        console.log("Sin acceso a voto");
    }
}

if (isNaN(edad)) {
    console.log("No es un número");
}
else {
    let resultado = (edad >= 18) ? "Acceso a voto" : "Sin acceso a voto";
    console.log(resultado);
}


//definir variables
let sistemasMecanicos = true;

//condicional (not) diagnostico previo  

if( sistemasMecanicos != false) {
    console.log("FALLO MECÁNICO: Imposible aterrizar");
}else {
    console.log("Se puede aterrizar");
}

//variables
let altura = 600;
let combustible = 89;

//condicional
if ( altura >= 500 && combustible >= 30) {
    console.log ("Combustible Suficiente para Aterrizar")
}else if ( altura <= 500 && combustible == 10) {
    console.log ("Combustible necesario para aterrizar")
}else {
    console.log ("Combustible insuficiente para aterrizar")
}


// variables
let velocidad = 210;
let combustibleSuficiente = false;
let oxigenoEmergencia = true;
let altura = 80;

//condicional 1
if ( velocidad < 1000 && combustibleSuficiente) || (!combustibleSuficiente && oxigenoEmergencia && altura < 100){
    console.log("Aterrizaje exitoso")
}else {
    console.log("No cumple condiciones de aterrizaje")
}


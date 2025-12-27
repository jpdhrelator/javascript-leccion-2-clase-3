let autoVel = 90;
let autoLimitVel = 100;
let sem = "verde";
let peatonCruzando = true;
let lluviaInensa = false;
let pilotoAuto = true;

console.log("----Sistema inicializado---");


if (peatonCruzando || semaforo === "rojo") {
    accion = "PARADA DE EMERGENCIA";
} 
else if (lluviaIntensa || semaforo === "Amarillo" || velocidad > limiteVelocidad) {
    accion = "DISMINUIR VELOCIDAD";
} 
else {
    accion = "MANTENER CURSO";
}
if (pilotoAuto) {
    console.log("Sistema Activo. Decisión: " + accion);
} else {
    console.log("Sistema Apagado. Control manual requerido.");
}
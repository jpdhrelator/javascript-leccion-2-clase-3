//--SCRIPT Viajando al planeta Rojo -- PROTOCOLO DE EMERGENCIA
let altura = 80;               
let velocidad = 2000;           
let combustible = 5;           
let sistemasMecanicos = true;  
let oxigenoEmergencia = true;  

console.log("--- COMENZANDO PROTOCOLO DE EMERGENCIA ---");
console.log(`Telemetría: Altura ${altura}m, Velocidad ${velocidad}km/h, Combustible ${combustible}%`);

if (!sistemasMecanicos) {
    console.log("ERROR CRÍTICO - FALLO MECÁNICO: Imposible aterrizar. Tren de aterrizaje no responde.");
    console.log("PROCEDIMIENTO: ABORTAR MISIÓN INMEDIATAMENTE!!");
} else {
    console.log("Sistemas mecánicos: OK. Analizando vectores de descenso...");

    let combustibleSuficiente = false;

    if (altura > 500) {
     
        combustibleSuficiente = (combustible >= 30);
    } else {
    
        combustibleSuficiente = (combustible >= 10);
    }

    console.log(`Evaluación de recursos: Combustible suficiente = ${combustibleSuficiente}`);
    
    let situacionIdeal = (velocidad < 1000 && combustibleSuficiente);
    let situacionMilagro = (!combustibleSuficiente && oxigenoEmergencia && altura < 100);

    if (situacionIdeal || situacionMilagro) {
        if (situacionMilagro) {
            console.log("ADVERTENCIA: Aterrizaje forzoso de emergencia detectado.");
        }
        console.log(">>> ATERRIZAJE INICIADO: La tripulación está a salvo. Bienvenidos a Marte .");
    } else {
        console.log("PELIGRO: Condiciones no seguras. ABORTAR MISIÓN y volver a órbita.");
        console.log("MOTIVO: Velocidad excesiva o recursos insuficientes para la altitud actual.");
    }
}

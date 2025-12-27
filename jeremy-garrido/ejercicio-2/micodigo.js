let fcaCardiaca = 70;
let temperatura = 37;
let dolorPecho = false;
let inconsciente = false;
let tiempoEspera = 100;

let nivelPrioridad;
// ROJO, NARANJA, AMARILLO O VERDE

if (inconsciente === true || fcaCardiaca < 40){
    nivelPrioridad = "rojo";
    console.log("---Paciente Ingresado---");
    console.log("Diagnóstico: "+ nivelPrioridad);
    console.log("Mensaje: Paro inminente ATENCIÓN INMEDIATA: Paciente crítico");
    

    
}
    else if (dolorPecho != false && fcaCardiaca > 100){
        nivelPrioridad = "naranja";
        console.log("---Paciente Ingresado---");
        console.log("Diagnóstico: "+ nivelPrioridad);
        console.log("Mensaje: Posible infarto. Pasar a Box de Reanimación");
        
    }
    else if (temperatura > 39 || temperatura < 36 ){
        nivelPrioridad = "amarillo";
        console.log("---Paciente Ingresado---");
        console.log("Diagnóstico: "+ nivelPrioridad + " ");
        console.log("Mensaje: temperatura corporal: "  + temperatura + ". Pasar a sala de observación");

    }
    else if ( nivelPrioridad = "verde") {
        console.log("---Paciente Ingresado---");
        console.log("Diagnóstico: "+ nivelPrioridad);
        console.log("Mensaje: Esperar turno en sala de espera");
        
    }
    if ( nivelPrioridad === "verde" && tiempoEspera > 60){
        nivelPrioridad = "amarillo"
        console.log("Debido a su alto tiempo en espera, su nivel de prioridad cambió a " + nivelPrioridad);
    }

// Inicio los parámetros iniciales de la nave
let altura = 800;
let velocidad = 900;
let combustible = 50;
let sistemasMecanicos = true;
let oxigenoEmergencia = false;

// Decidimos si hay combustible suficiente segun la altura
function hayCombustibleSuficiente(altura, combustible) {
  if (altura > 500) {
    return combustible >= 30;
  } else {
    return combustible >= 10;
  }
}

// Evaluamos si se puede sobrevivir sin combustible
function situacionDeMilagro(altura, combustible, oxigenoEmergencia) {
  return !hayCombustibleSuficiente(altura, combustible) &&
         oxigenoEmergencia &&
         altura < 100;
}

//Funcion principal del protocolo de aterrizaje
function protocoloAterrizaje(altura, velocidad, combustible, sistemasMecanicos, oxigenoEmergencia) {
  console.log("\n======================================");
  console.log(" INICIO DEL PROTOCOLO DE ATERRIZAJE");

  console.log("\nFASE 1: Lectura de Sensores");
  console.log("Altura:", altura, "m");
  console.log("Velocidad:", velocidad, "km/h");
  console.log("Combustible:", combustible, "%");
  console.log("Sistemas mecánicos OK:", sistemasMecanicos);
  console.log("Oxígeno de emergencia:", oxigenoEmergencia);

  console.log("\nFASE 2: Diagnóstico Previo");
  if (!sistemasMecanicos) {
    console.log("\n==================================");
    console.log("FALLO MECÁNICO: Imposible aterrizar");
    console.log("FIN DEL PROTOCOLO");
    return;
  }

  console.log("\nFASE 3: Cálculo de Recursos");
  let combustibleSuficiente = hayCombustibleSuficiente(altura, combustible);
  console.log("Combustible suficiente:", combustibleSuficiente);

  console.log("\nFASE 4: Decisión Final");
  let situacionIdeal = velocidad < 1000 && combustibleSuficiente;
  let situacionMilagro = situacionDeMilagro(altura, combustible, oxigenoEmergencia);

  if (situacionIdeal || situacionMilagro) {
      console.log("\n============================================");
    console.log("ATERRIZAJE INICIADO: La tripulación está a salvo");
  } else {
      console.log("\n=============================================================");
    console.log("PELIGRO: Condiciones no seguras. ABORTAR MISIÓN y volver a órbita");
  }

  console.log("FIN DEL PROTOCOLO");
}

// Iniciar el protocolo de aterrizaje
protocoloAterrizaje(altura, velocidad, combustible, sistemasMecanicos, oxigenoEmergencia);

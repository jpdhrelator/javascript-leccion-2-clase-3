let altura = 620;
let velocidad = 810;
let combustible = 43;
let sistemasMecanicos = true;
let oxigenoEmergencia = false;




if (sistemasMecanicos == false) {
  console.log("FALLO MECÁNICO: Imposible aterrizar");
} else {
  console.log("Sistemas mecánicos funcionando");




  let combustibleSuficiente = false;

  if (altura > 500) {
    if (combustible >= 30) {
      combustibleSuficiente = true;
    }
  }

  if (altura <= 500) {
    if (combustible >= 10) {
      combustibleSuficiente = true;
    }
  }

  console.log("Combustible suficiente:", combustibleSuficiente);



  

  if (velocidad < 1000 && combustibleSuficiente == true) {
    console.log("ATERRIZAJE INICIADO: La tripulación está a salvo");

  } else if (
    combustibleSuficiente == false &&
    oxigenoEmergencia == true &&
    altura < 100
  ) {
    console.log("ATERRIZAJE INICIADO: Aterrizaje de emergencia");

  } else {
    console.log("PELIGRO: Condiciones no seguras. ABORTAR MISIÓN");
  }
}

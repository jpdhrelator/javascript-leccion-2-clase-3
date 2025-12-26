let altura = 600;
let velocidad = 100;
let combustible = 10;
let combustibleSuficiente;
let sistMecanico = true;
let oxiEmergencia = true;

console.log("--- INICIANDO PROTOCOLO DE ATERRIZAJE ---");

if (!sistMecanico) {
  console.log(
    "Cuidado: Los sistemas mecánicos no están funcionando. Imposible aterrizar."
  );
} else {
  if (altura > 500) {
    combustibleSuficiente = combustible >= 30;
    console.log("Altura: " + altura + " Puede maniobrar");
  } else if (altura <= 500) {
    combustibleSuficiente = combustible >= 10;
    console.log("Altura: " + altura + " Puede maniobrar");
  }

  if (combustibleSuficiente) {
    console.log("Recursos verificados: Combustible suficiente para maniobrar.");
  } else {
    console.log("Alerta: No hay combustible suficiente para el frenado.");
  }

  if (
    (velocidad < 1000 && combustibleSuficiente) ||
    (combustible >= 10 && oxiEmergencia == true && altura < 100)
  ) {
    console.log("Éxito: Puede aterrizar normalmente.");
  } else {
    console.log(
      "Fallo: No se cumplen las condiciones de seguridad para aterrizar."
    );
  }
}

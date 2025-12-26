# 🚀 Desafío Práctico: El Algoritmo de Aterrizaje en Marte

**Tema:** Variables, Operadores Lógicos y Sentencias Condicionales.

---

## 👨‍🚀 Contexto para el Alumno

Eres el ingeniero de software principal de la primera misión tripulada a Marte. Justo antes de entrar en la atmósfera marciana, el sistema de pilotaje automático ha fallado.

Tu misión es escribir un **script de emergencia en JavaScript** que analice los datos de los sensores de la nave y decida automáticamente si es seguro aterrizar o si la misión debe abortar y regresar a órbita.

La vida de la tripulación depende de tu lógica.

---

## 📝 Instrucciones Paso a Paso

Sigue las fases de desarrollo cuidadosamente. Usa `console.log()` para reportar lo que sucede en cada etapa.

### FASE 1: Lectura de Sensores (Variables)
Define las siguientes variables para simular el estado actual de la nave. Tú decides los valores iniciales para probar tus escenarios (puedes cambiarlos después para ver si tu código funciona en distintos casos).

1.  **`altura` (Number):** La distancia actual al suelo (ej. 800 metros).
2.  **`velocidad` (Number):** La velocidad de caída en km/h (ej. 2500).
3.  **`combustible` (Number):** Porcentaje de combustible restante (0 a 100).
4.  **`sistemasMecanicos` (Boolean):** `true` si el tren de aterrizaje funciona, `false` si está dañado.
5.  **`oxigenoEmergencia` (Boolean):** `true` si hay reservas de aire, `false` si no.

### FASE 2: Diagnóstico Previo (Operador NOT)
Antes de intentar cualquier maniobra, verifica los sistemas mecánicos.
* Si los `sistemasMecanicos` **NO** están funcionando (`!`), imprime una alerta roja: "FALLO MECÁNICO: Imposible aterrizar".
* En este caso, la ejecución no debería continuar hacia el aterrizaje.

### FASE 3: Cálculo de Recursos (Aritmética y Comparación)
Si los sistemas mecánicos están bien, verifica si tienes recursos para la maniobra.
* Para frenar la nave, necesitas quemar combustible.
* Si la `altura` es mayor a 500 metros, necesitas al menos 30% de combustible.
* Si la `altura` es menor o igual a 500 metros, necesitas al menos 10% de combustible.
* Usa una estructura `if/else` para determinar si tienes `combustibleSuficiente`.

### FASE 4: La Decisión Final (Lógica Combinada)
Aquí es donde se decide la suerte de la misión. Debes combinar todas las condiciones.

El aterrizaje es **EXITOSO** solo si se cumple **UNA** de las siguientes dos situaciones grandes:

1.  **Situación Ideal:** La `velocidad` es menor a 1000 km/h **Y** tienes `combustibleSuficiente`.
2.  **Situación de Milagro:** No tienes combustible suficiente, **PERO** tienes `oxigenoEmergencia` (para sobrevivir al choque) **Y** la `altura` es menor a 100 metros (el golpe no será tan fuerte).

Usa operadores `&&` (Y) y `||` (O) para construir esta gran condición.

* Si se cumple: Imprime "ATERRIZAJE INICIADO: La tripulación está a salvo".
* Si no se cumple: Imprime "PELIGRO: Condiciones no seguras. ABORTAR MISIÓN y volver a órbita".

---

## 🧪 Pruebas (Checklist)

Para asegurar que tu código funciona, prueba cambiando tus variables iniciales con estos escenarios:

1.  **Escenario Catastrófico:** `sistemasMecanicos = false`. (Debe abortar al inicio).
2.  **Escenario Perfecto:** Velocidad baja, mucho combustible, altura alta. (Debe aterrizar).
3.  **Escenario "Sin Gasolina":** Velocidad baja, poco combustible, altura alta. (Debe abortar).
4.  **Escenario "De Película":** Sin combustible, pero con oxígeno de emergencia y muy cerca del suelo (altura baja). (Debe aterrizar).




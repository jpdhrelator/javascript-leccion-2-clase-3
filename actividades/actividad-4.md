# 🏎️ Desafío Práctico: El Ingeniero de Estrategia F1


**Tema:** Lógica Condicional, Operadores Booleanos (`&&`, `||`) y Toma de Decisiones Estratégicas.

---

## 🏁 Contexto para el Alumno

Eres el Ingeniero de Carrera principal de la escudería "JS Racing" en el Gran Premio de Mónaco. Faltan pocas vueltas para el final y estás peleando el podio.

Tu piloto depende de ti. Debes escribir un **script de estrategia** que analice la telemetría del auto en tiempo real y envíe la orden correcta por radio: **Entrar a Boxes (Pit Stop)** o **Mantenerse en Pista**.

Una mala decisión te hará perder la carrera.

---

## 📝 Instrucciones Paso a Paso

### FASE 1: Telemetría (Variables)
Define las variables que representan los datos del auto y la pista. Asigna valores iniciales para probar un escenario tenso.

1.  **`vueltasRestantes` (Number):** Cuántas vueltas faltan para terminar (ej. 10).
2.  **`desgasteNeumaticos` (Number):** Porcentaje de desgaste, de 0 a 100 (ej. 50).
3.  **`climaLluvioso` (Boolean):** `true` si empieza a llover fuerte.
4.  **`safetyCarPista` (Boolean):** `true` si el auto de seguridad salió (esto hace que la parada en boxes sea "barata" en tiempo).
5.  **`litrosCombustible` (Number):** Litros que quedan en el tanque (ej. 5).

### FASE 2: Prioridad 1 - Seguridad Climática (If Simple)
Lo más crítico es el clima.
* Si `climaLluvioso` es `true`, no importa nada más: debes llamar al piloto a boxes inmediatamente para poner neumáticos de lluvia.
* Define una variable `ordenDeRadio` (String) y asígnale el mensaje: "BOX BOX BOX - Lluvia Extrema".

### FASE 3: Prioridad 2 - Oportunidad Estratégica (Else If y Lógica Combinada)
Si no está lloviendo, evalúa si conviene parar por estrategia o desgaste crítico.
La orden debe ser "BOX BOX BOX - Cambio de Neumáticos" si ocurre **CUALQUIERA** de estas dos situaciones:

1.  **Desgaste Crítico:** El `desgasteNeumaticos` es mayor a 80 (Riesgo de pinchazo).
    *O BIEN (||)*
2.  **Parada Táctica:** Hay un `safetyCarPista` (`true`) **Y** (`&&`) tus neumáticos tienen un desgaste mayor a 40 (Aprovechas que la carrera va lento para cambiar ruedas "gratis").

*Usa operadores `||` y `&&` dentro de tu condición `else if`.*

### FASE 4: Gestión de Pista (Else y Anidación)
Si no entramos a boxes, nos quedamos en pista. Pero, ¿cómo conducimos?
* Dentro del `else` final, verifica el combustible.
* Si `litrosCombustible` es menor a 2, la orden es: "QUEDARSE FUERA - Modo Ahorro (Lift and Coast)".
* Si tienes combustible suficiente, la orden es: "QUEDARSE FUERA - Modo Ataque (Push Hard)".

### FASE 5: Transmisión (Salida)
Imprime en la consola el reporte final:
> "Vuelta [vueltasRestantes]: [ordenDeRadio]"

---

## 🧪 Escenarios de Prueba

Prueba tu código cambiando las variables iniciales para simular estas situaciones:

1.  **El Diluvio:** No importa el desgaste, si `climaLluvioso` es `true`. -> **BOX Lluvia**.
2.  **El Golpe de Suerte:** `climaLluvioso` falso, `safetyCarPista` true, `desgaste` 45. -> **BOX Cambio de Neumáticos** (Aprovechando el Safety Car).
3.  **El Riesgo:** `safetyCarPista` false, `desgaste` 70. -> **QUEDARSE FUERA** (No está tan gastado para parar sin Safety Car).
4.  **Final Agónico:** Quedarse fuera, pero con `litrosCombustible` en 1. -> **Modo Ahorro**.

---

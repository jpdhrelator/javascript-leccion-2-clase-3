# 🚗 Desafío Práctico: El Copiloto IA (Auto Autónomo)


**Tema:** Lógica Booleana, Comparaciones y Toma de Decisiones Críticas.

---

## 🤖 Contexto para el Alumno

Has sido contratado por "FutureDrive", una empresa de autos eléctricos autónomos. Tu primera tarea es programar el **módulo de seguridad principal** del vehículo.

El auto recibe datos constantes de sus cámaras y sensores. Tu código debe analizar estos datos en tiempo real y decidir qué acción física tomará el auto: **Frenar en Seco**, **Disminuir Velocidad** o **Mantener Curso**.

*Recuerda: En la carretera, una mala línea de código puede causar un accidente.*

---

## 📝 Instrucciones Paso a Paso

### FASE 1: Configuración de Sensores (Variables)
Define las variables que representan lo que "ve" el auto. Asigna valores iniciales para probar un escenario peligroso.

1.  **`velocidad` (Number):** Velocidad actual en km/h (ej. 90).
2.  **`limiteVelocidad` (Number):** Límite legal de la vía (ej. 100).
3.  **`semaforo` (String):** Puede ser "Verde", "Amarillo" o "Rojo".
4.  **`peatonCruzando` (Boolean):** `true` si hay alguien en la vía.
5.  **`lluviaIntensa` (Boolean):** `true` si la visibilidad es baja por clima.
6.  **`pilotoAutomatico` (Boolean):** `true` si el sistema está activado.

### FASE 2: Protocolo de Seguridad Absoluta (Parada de Emergencia)
La regla de oro de la robótica es no dañar a los humanos.
* Si hay un `peatonCruzando` **O** el `semaforo` está en "Rojo", el auto debe detenerse sin importar nada más.
* Crea una variable `accion` (String) y asígnale el valor "PARADA DE EMERGENCIA" si se cumple esta condición crítica.

### FASE 3: Adaptación al Entorno (Precaución)
Si no hay emergencia, el auto debe adaptarse.
* Si hay `lluviaIntensa` **O** el `semaforo` está en "Amarillo", el auto debe bajar la velocidad.
* Además, verifica si la `velocidad` actual supera el `limiteVelocidad`.
* Si ocurre cualquiera de estas cosas, la `accion` debe ser "DISMINUIR VELOCIDAD".

### FASE 4: Navegación Estándar (Else)
* Si no hay peligros ni advertencias, la `accion` debe ser "MANTENER CURSO".

### FASE 5: Ejecución (El Interruptor Maestro)
Finalmente, el auto solo debe obedecer estas órdenes si el `pilotoAutomatico` está encendido.
* Usa un `if` final que envuelva tu reporte.
* Si el piloto automático está activado (`true`), imprime:
    > "Sistema Activo. Decisión: [accion]"
* Si está apagado (`false`), imprime:
    > "Sistema Apagado. Control manual requerido."

---

## 🧪 Escenarios de Prueba

Tu código debe reaccionar correctamente a estas situaciones (modifica tus variables para probar):

1.  **El Imprudente:** Semáforo Verde, pero `peatonCruzando` es `true`. -> **PARADA DE EMERGENCIA**.
2.  **Día Lluvioso:** Semáforo Verde, sin peatones, pero `lluviaIntensa` es `true`. -> **DISMINUIR VELOCIDAD**.
3.  **Exceso de Velocidad:** Todo despejado, pero vas a 120 en zona de 100. -> **DISMINUIR VELOCIDAD**.
4.  **Autopista Ideal:** Sol, Verde, sin peatones, velocidad bajo el límite. -> **MANTENER CURSO**.
5.  **Sistema Apagado:** Cualquier escenario, pero `pilotoAutomatico` es `false`. -> **Control manual requerido**.

---

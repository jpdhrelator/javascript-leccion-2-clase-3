# 🏥 Desafío Práctico: Sistema de Triaje IA-MED


**Tema:** Variables, Operadores de Comparación y Lógica de Negocio Compleja.

---

## 👨‍⚕️ Contexto para el Alumno

El Hospital Central ha implementado un nuevo quiosco de "Auto-Admisión" con Inteligencia Artificial. Cuando los pacientes llegan, sensores miden sus signos vitales automáticamente.

Tu trabajo es programar el **cerebro lógico** de este sistema. Tu script debe recibir los datos del paciente y asignar un **Nivel de Prioridad** (Código Rojo, Naranja, Amarillo o Verde) para que los médicos sepan a quién atender primero.

¡Un error en tu código podría costar vidas!

---

## 📝 Instrucciones Paso a Paso

### FASE 1: Lectura de Signos Vitales (Variables)
Define las variables que simulan los sensores del quiosco. Tú decides los valores iniciales para probar tu código.

1.  **`frecuenciaCardiaca` (Number):** Latidos por minuto (ej. 120).
2.  **`temperatura` (Number):** Grados Celsius (ej. 38.5).
3.  **`dolorPecho` (Boolean):** `true` si el paciente reporta dolor, `false` si no.
4.  **`inconsciente` (Boolean):** `true` si el paciente no responde, `false` si está despierto.
5.  **`tiempoEspera` (Number):** Minutos que lleva esperando el paciente (ej. 10).

### FASE 2: Asignación de Prioridad Inicial (Lógica Anidada)
Debes determinar el `nivelPrioridad` (String) siguiendo estrictamente este protocolo médico:

1.  **CÓDIGO ROJO (Resucitación):** Se asigna si el paciente está `inconsciente` **O** si su `frecuenciaCardiaca` es menor a 40 (Paro inminente).
2.  **CÓDIGO NARANJA (Emergencia):** Si no es rojo, verifica si tiene `dolorPecho` **Y** su `frecuenciaCardiaca` es mayor a 100 (Posible infarto).
3.  **CÓDIGO AMARILLO (Urgencia):** Si no es anterior, verifica si la `temperatura` es mayor a 39 (Fiebre alta) **O** menor a 36 (Hipotermia).
4.  **CÓDIGO VERDE (No Urgente):** Cualquier otro caso.

*Usa una estructura `if / else if / else` para asignar la variable `nivelPrioridad`.*

### FASE 3: Ajuste por Tiempo de Espera (Re-asignación)
A veces, un paciente leve empeora si espera mucho. Agrega la siguiente lógica después de la fase 2:

* Si el paciente fue clasificado como **"CÓDIGO VERDE"** pero su `tiempoEspera` es mayor a 60 minutos, el sistema debe cambiar su prioridad automáticamente a **"CÓDIGO AMARILLO"**.
* *Pista: Necesitarás un `if` que verifique ambas cosas al mismo tiempo.*

### FASE 4: Reporte al Médico (Salida)
Muestra en la consola un reporte claro:

> "Paciente ingresado."
> "Diagnóstico: [Nivel de Prioridad]"
> "Mensaje: [Mensaje personalizado]"

* Si es Rojo: "ATENCIÓN INMEDIATA: Paciente crítico".
* Si es Naranja: "Pasar a Box de Reanimación".
* Si es Amarillo: "Pasar a sala de observación".
* Si es Verde: "Esperar turno en sala de espera".

---

## 🧪 Pruebas de Calidad

Tu código debe funcionar para estos pacientes (cambia los valores de tus variables para probar):

1.  **Paciente A:** Inconsciente (Debe ser ROJO sin importar lo demás).
2.  **Paciente B:** Despierto, Dolor de pecho, Ritmo 110. (Debe ser NARANJA).
3.  **Paciente C:** Despierto, Sin dolor, Ritmo 70, Temp 39.5. (Debe ser AMARILLO).
4.  **Paciente D:** Sano, pero lleva 90 minutos esperando. (Debe pasar de VERDE a AMARILLO).

---

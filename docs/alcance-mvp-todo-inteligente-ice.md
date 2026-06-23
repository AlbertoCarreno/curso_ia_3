# Alcance funcional del MVP: Gestor de Tareas Inteligente con modelo ICE

## 1. Objetivo del MVP

El objetivo del MVP es construir una aplicacion web simple en React para gestionar tareas y priorizarlas usando el modelo ICE:

- **Impacto**: cuanto valor aporta la tarea.
- **Confianza**: que tan seguro es que la tarea aporte ese valor.
- **Esfuerzo**: cuanto trabajo requiere completarla.

La aplicacion permitira crear tareas con una descripcion y calcular automaticamente una puntuacion ICE usando una API de IA gratuita. El enfoque debe ser didactico, sencillo y adecuado para un curso de React, evitando arquitectura compleja o dependencias innecesarias.

## 2. Tipo de aplicacion

- Aplicacion frontend desarrollada con React.
- Sin backend propio.
- Sin autenticacion.
- Sin persistencia real.
- Pensada para ejecutarse en local durante el curso.
- Datos almacenados solo en estado de React mientras la aplicacion esta abierta.

## 3. Usuarios objetivo

El usuario principal es un estudiante o persona que quiere practicar React creando una aplicacion funcional de gestion de tareas con una pequena integracion de IA.

## 4. Funcionalidades incluidas

### 4.1 Crear tarea

El usuario podra crear una tarea introduciendo:

- Titulo de la tarea.
- Descripcion de la tarea.

Al crearla, la tarea se anadira a una lista visible en pantalla.

### 4.2 Calcular ICE con IA

La aplicacion debera permitir calcular automaticamente los valores ICE a partir de la descripcion de la tarea.

La IA debera devolver:

- Impacto: numero del 1 al 10.
- Confianza: numero del 1 al 10.
- Esfuerzo: numero del 1 al 10.
- Breve justificacion opcional.

La puntuacion ICE se calculara con la formula:

```text
ICE = (Impacto * Confianza) / Esfuerzo
```

La integracion se realizara desde el frontend llamando a una API de IA gratuita o con plan gratuito. Para mantener el desarrollo simple, se recomienda usar una API que permita llamadas HTTP directas desde React durante el curso.

Ejemplos de opciones:

- Google Gemini API con cuota gratuita.
- OpenRouter con modelos gratuitos disponibles.
- Hugging Face Inference API con modelos gratuitos, si esta disponible para el caso de uso.

### 4.3 Ver lista de tareas

La aplicacion mostrara una lista simple de tareas con:

- Titulo.
- Descripcion.
- Estado.
- Impacto.
- Confianza.
- Esfuerzo.
- Puntuacion ICE.
- Justificacion generada por IA, si existe.

### 4.4 Ordenar por prioridad ICE

Las tareas podran mostrarse ordenadas de mayor a menor puntuacion ICE para identificar rapidamente las mas prioritarias.

### 4.5 Cambiar estado de una tarea

Cada tarea podra tener un estado simple:

- Pendiente.
- Completada.

El usuario podra marcar una tarea como completada o volverla a marcar como pendiente.

### 4.6 Eliminar tarea

El usuario podra eliminar una tarea de la lista.

### 4.7 Editar tarea

El usuario podra modificar:

- Titulo.
- Descripcion.

Tras editar la descripcion, la aplicacion podra permitir recalcular el ICE con IA.

### 4.8 Estados de carga y error

La aplicacion debera mostrar estados basicos:

- Cargando mientras se calcula el ICE.
- Error si la API no responde o devuelve un resultado invalido.
- Mensaje cuando no hay tareas creadas.

## 5. Funcionalidades excluidas

El MVP no incluye:

- Backend.
- Autenticacion.
- Persistencia real en base de datos.
- Paginacion.
- Multiusuario.
- Tags o etiquetas.
- Roles de usuario.
- Subtareas.
- Comentarios.
- Adjuntos.
- Notificaciones.
- Fechas de vencimiento avanzadas.
- Sincronizacion entre dispositivos.

## 6. Modelo de datos propuesto

Una tarea puede representarse con un objeto simple:

```js
{
  id: "task-1",
  title: "Preparar presentacion",
  description: "Crear una presentacion para explicar el proyecto final del curso",
  status: "pending",
  impact: 8,
  confidence: 7,
  effort: 4,
  iceScore: 14,
  aiReason: "Tiene impacto alto porque ayuda a comunicar el proyecto, con esfuerzo moderado.",
  createdAt: "2026-06-22T10:00:00.000Z"
}
```

## 7. Pantallas principales

### 7.1 Pantalla principal

La aplicacion puede resolverse en una unica pantalla con:

- Formulario para crear o editar tareas.
- Boton para calcular ICE con IA.
- Lista de tareas.
- Control para ordenar por ICE.
- Acciones por tarea: editar, completar y eliminar.

No es necesario implementar rutas ni navegacion compleja.

## 8. Criterios de aceptacion

El MVP se considerara completo cuando:

- El usuario pueda crear una tarea con titulo y descripcion.
- La aplicacion pueda solicitar a una API de IA el calculo de impacto, confianza y esfuerzo.
- La aplicacion calcule y muestre la puntuacion ICE.
- El usuario pueda ver todas las tareas en una lista.
- El usuario pueda ordenar las tareas por ICE.
- El usuario pueda editar, completar y eliminar tareas.
- La aplicacion muestre errores basicos si falla la API.
- Todo funcione sin backend y sin autenticacion.

## 9. Prompt sugerido para calcular ICE

Ejemplo de prompt para enviar a la API de IA:

```text
Analiza la siguiente tarea y devuelve solamente un JSON valido con esta estructura:
{
  "impact": number,
  "confidence": number,
  "effort": number,
  "reason": "string"
}

Reglas:
- impact debe ser un numero entre 1 y 10.
- confidence debe ser un numero entre 1 y 10.
- effort debe ser un numero entre 1 y 10.
- reason debe ser una explicacion breve en espanol.
- No incluyas markdown ni texto adicional.

Tarea:
Titulo: {{title}}
Descripcion: {{description}}
```

## 10. Riesgos y simplificaciones

- Las APIs gratuitas pueden tener limites de uso o requerir una cuenta.
- Exponer una API key en frontend no es seguro para produccion, pero es aceptable para un ejercicio local de curso.
- La respuesta de la IA puede no ser siempre JSON valido, por lo que conviene validar el resultado antes de usarlo.
- Al no tener persistencia real, las tareas se perderan al recargar la pagina.

## 11. Resultado esperado

El resultado sera una aplicacion sencilla, funcional y pedagogica que permita gestionar tareas, calcular una metrica ICE con IA y priorizar el trabajo de forma visual.

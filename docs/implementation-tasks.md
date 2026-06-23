# Tareas de implementacion - Gestor de Tareas ICE

## Objetivo

Dividir el desarrollo del MVP en tareas pequenas, ordenadas y coherentes para implementar una app React + TypeScript + Material UI sin backend, sin autenticacion y sin persistencia real.

## Tarea 1: Preparar base del proyecto y estructura

**Objetivo:** dejar lista la base tecnica para desarrollar el MVP siguiendo la guia del proyecto.

**Incluye:**

- Crear proyecto React con TypeScript y Vite.
- Instalar Material UI y dependencias aprobadas.
- Definir estructura inicial de carpetas:
  - `src/components/`
  - `src/features/`
  - `src/hooks/`
  - `src/services/`
  - `src/types/`
  - `src/utils/`
  - `src/theme/`
- Configurar tema base de Material UI.
- Crear tipos principales del dominio: `Task`, `TaskStatus`, `IceSuggestion`.
- Crear utilidad pura para calcular `iceScore`.

**Criterios de finalizacion:**

- La app arranca correctamente.
- Existe un layout base con Material UI.
- El modelo de tarea esta tipado.
- El calculo ICE funciona de forma local.

## Tarea 2: Construir pantalla principal y listado de tareas

**Objetivo:** implementar la estructura visual principal de la aplicacion.

**Incluye:**

- Crear `TaskDashboard` como pantalla principal.
- Crear `AppBar` con titulo y accion principal.
- Crear `TaskToolbar` con ordenacion por ICE y filtros simples por estado.
- Crear `TaskListSection`.
- Crear `TaskList`.
- Crear `TaskCard`.
- Crear `EmptyState` para cuando no existan tareas.
- Gestionar tareas en estado local de React.

**Criterios de finalizacion:**

- Se muestra la pantalla principal en la ruta `/`.
- Se ve el estado vacio cuando no hay tareas.
- Se pueden renderizar tareas de prueba.
- Las tareas pueden ordenarse por puntuacion ICE.

## Tarea 3: Implementar formulario y flujo de creacion

**Objetivo:** permitir que el usuario cree una tarea desde un dialogo siguiendo el flujo definido.

**Incluye:**

- Crear `TaskFormDialog`.
- Crear `CreateTaskForm`.
- Anadir campos de titulo y descripcion con Material UI.
- Validar campos obligatorios antes de continuar.
- Crear acciones de cancelar y solicitar sugerencia ICE.
- Mantener el formulario en estado local.
- Preparar el flujo para revisar la sugerencia antes de confirmar.

**Criterios de finalizacion:**

- El usuario puede abrir el formulario desde la accion "Crear".
- El formulario valida titulo y descripcion.
- El usuario no puede continuar con campos vacios.
- El dialogo puede cerrarse sin crear tarea.

## Tarea 4: Integrar sugerencia ICE con IA

**Objetivo:** obtener impacto, confianza y esfuerzo desde una API de IA gratuita o con plan gratuito.

**Incluye:**

- Crear `aiService` en `src/services/`.
- Leer la API key desde variable de entorno de Vite.
- Enviar titulo y descripcion al servicio de IA.
- Validar que la respuesta tenga `impact`, `confidence`, `effort` y `reason`.
- Verificar que los valores numericos esten entre 1 y 10.
- Crear `AIRecommendationPanel`.
- Mostrar estados de carga y error.
- Permitir reintentar si falla la solicitud.

**Criterios de finalizacion:**

- El usuario puede solicitar una sugerencia ICE.
- La app muestra loading durante la solicitud.
- La app muestra error recuperable si falla la API.
- Una respuesta valida muestra valores ICE y razon.
- La puntuacion ICE se calcula en frontend.

## Tarea 5: Confirmacion, edicion manual y acciones de tareas

**Objetivo:** completar el flujo de creacion y las acciones principales del MVP.

**Incluye:**

- Crear `ManualIceFields` para ajustar impacto, confianza y esfuerzo.
- Recalcular `iceScore` al editar valores ICE.
- Crear `TaskConfirmedSummary` o resumen de tarea creada.
- Confirmar tarea y anadirla al estado local.
- Cerrar dialogo y actualizar `TaskList`.
- Permitir marcar tarea como pendiente o completada.
- Permitir editar titulo y descripcion de una tarea.
- Permitir recalcular ICE tras editar descripcion.
- Permitir eliminar tarea.

**Criterios de finalizacion:**

- El usuario puede aceptar o ajustar la sugerencia ICE.
- La tarea confirmada aparece en el listado.
- El usuario puede completar, editar y eliminar tareas.
- El usuario puede recalcular ICE tras editar descripcion.
- Todo funciona sin backend, autenticacion ni persistencia real.

## Orden recomendado

| Orden | Tarea | Resultado |
| --- | --- | --- |
| 1 | Base del proyecto | App preparada y tipada |
| 2 | Pantalla principal | Dashboard y listado visibles |
| 3 | Formulario | Flujo de creacion iniciado |
| 4 | IA e ICE | Sugerencia automatica funcional |
| 5 | Confirmacion y acciones | MVP completo |

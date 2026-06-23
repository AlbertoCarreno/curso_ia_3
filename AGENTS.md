# AGENTS.md - Guia del repositorio para Codex

## Proposito de este archivo

- Este archivo no duplica el alcance funcional ni la guia tecnica del proyecto.
- Usa este archivo como punto de entrada para saber que documentos consultar y como resolver conflictos.
- Las reglas globales de Codex siguen aplicando para estilo de trabajo, alcance reducido, confirmaciones y calidad de codigo.
- Si una regla estable ya existe en la documentacion del proyecto, no la repitas aqui: enlaza o actualiza el documento fuente.

## Fuentes canonicas del proyecto

- Alcance funcional, exclusiones, modelo ICE, modelo de datos, criterios de aceptacion, prompt IA y riesgos: `docs/alcance-mvp-todo-inteligente-ice.md`.
- Estructura de carpetas, nombres, responsabilidades de componentes, hooks, estado, llamadas API, errores, cargas y librerias aprobadas: `docs/development-guidelines.md`.
- Secuencia sugerida de implementacion: `docs/implementation-tasks.md`.
- Flujo de creacion de tareas: `docs/task-creation-flow.mmd`.
- Navegacion y composicion de pantalla: `docs/user-navigation-flow.mmd`.
- Referencia visual de pantallas y estados UI: `docs/app-screens.svg`.

## Orden de consulta antes de cambiar codigo

- Lee primero `docs/alcance-mvp-todo-inteligente-ice.md` para validar si el cambio pertenece al MVP.
- Lee despues `docs/development-guidelines.md` para aplicar estructura, convenciones y reglas tecnicas.
- Si el cambio afecta flujos de usuario, revisa tambien los diagramas `.mmd`.
- Si el cambio afecta composicion visual, revisa `docs/app-screens.svg`.
- Si el cambio corresponde a una tarea planificada, usa `docs/implementation-tasks.md` solo como guia de orden, no como sustituto del alcance.

## Reglas especificas de este repositorio

- No conviertas tareas de `docs/implementation-tasks.md` en reglas permanentes.
- No conviertas ejemplos de los documentos en arquitectura obligatoria salvo que el documento lo exprese como regla o criterio.
- No inventes funcionalidades, carpetas, servicios, rutas ni dependencias que no esten respaldadas por la documentacion canonica.
- Si una peticion contradice el alcance documentado, senala la contradiccion antes de modificar el proyecto.
- Si detectas una inconsistencia entre documentos, documentala como observacion y no la apliques como regla.
- Si una decision tecnica no esta cubierta por los documentos, elige la opcion mas simple compatible con React, TypeScript, Vite y Material UI.
- Manten este archivo breve; las reglas detalladas deben vivir en los documentos canonicos correspondientes.

## Observaciones arquitectonicas

- No se detectaron inconsistencias arquitectonicas entre los documentos revisados al crear esta guia.
- La documentacion describe una app frontend didactica y de una sola pantalla; los diagramas y tareas detallan una implementacion posible sin exigir rutas adicionales.

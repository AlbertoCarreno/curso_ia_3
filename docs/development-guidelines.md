# Development Guidelines

## Estructura de carpetas

| Carpeta / archivo | Regla                                            |
| ----------------- | ------------------------------------------------ |
| `src/`            | Raiz del codigo de aplicacion.                   |
| `src/main.tsx`    | Solo arranque de React y providers globales.     |
| `src/App.tsx`     | Composicion principal, sin logica pesada.        |
| `src/components/` | Componentes reutilizables de UI.                 |
| `src/features/`   | Codigo agrupado por funcionalidad cuando crezca. |
| `src/hooks/`      | Hooks compartidos entre componentes.             |
| `src/services/`   | Llamadas a APIs externas.                        |
| `src/types/`      | Tipos compartidos del dominio.                   |
| `src/utils/`      | Funciones puras y helpers pequenos.              |
| `src/theme/`      | Configuracion de Material UI y tokens visuales.  |

## Convenciones de nombres

- [ ] Componentes React en `PascalCase`.

- [ ] Hooks propios con prefijo `use`.

- [ ] Funciones y variables en `camelCase`.

- [ ] Tipos e interfaces en `PascalCase`.

- [ ] Archivos de componentes en `PascalCase.tsx`.

- [ ] Archivos de hooks en `useNombre.ts`.

- [ ] Archivos de servicios en `nombreService.ts`.

- [ ] Constantes globales en `UPPER_SNAKE_CASE`.

- [ ] Props tipadas como `NombreComponenteProps`.

- [ ] Nombres orientados al dominio, no a detalles tecnicos.

## Organizacion de componentes con sus responsabilidades

| Tipo      | Responsabilidad                                      |
| --------- | ---------------------------------------------------- |
| `App`     | Orquestar layout principal y estado de alto nivel.   |
| `Page`    | Representar una vista completa si existe mas de una. |
| `Feature` | Agrupar UI y logica de una funcionalidad concreta.   |
| `Form`    | Gestionar campos, validacion local y submit.         |
| `List`    | Renderizar colecciones y delegar acciones.           |
| `Item`    | Mostrar un elemento y emitir callbacks.              |
| `Dialog`  | Confirmar o editar informacion puntual.              |
| `Display` | Mostrar datos calculados sin efectos externos.       |
| `Layout`  | Distribucion visual sin reglas de negocio.           |
| `Service` | Nunca debe mezclarse dentro de componentes visuales. |

## Uso de hooks

- [ ] Usar `useState` para estado local simple.

- [ ] Usar `useEffect` solo para efectos externos.

- [ ] No usar `useEffect` para calculos derivados.

- [ ] Crear hooks propios solo si reducen duplicacion real.

- [ ] Mantener cada hook enfocado en un caso de uso.

- [ ] No llamar hooks en condicionales, bucles o callbacks.

- [ ] Usar `useMemo` solo para calculos costosos o referencias estables.

- [ ] Usar `useCallback` solo cuando estabilice props o dependencias.

- [ ] Evitar hooks genericos que oculten demasiada logica.

- [ ] Priorizar legibilidad sobre microoptimizaciones.

## Gestion del estado

- [ ] Estado local primero.

- [ ] Estado global solo si varias ramas lo necesitan.

- [ ] Usar `useState` para formularios y toggles simples.

- [ ] Usar `useReducer` si muchas acciones modifican el mismo modelo.

- [ ] No usar Redux, Zustand ni similares en el MVP.

- [ ] Mantener el estado minimo necesario.

- [ ] Derivar listas ordenadas, filtros y calculos durante render.

- [ ] Actualizar arrays y objetos de forma inmutable.

- [ ] No usar persistencia real salvo cambio de alcance.

- [ ] Resetear estado temporal al crear, guardar o cancelar.

## Gestion de llamadas API

- [ ] Centralizar llamadas HTTP en `src/services/`.

- [ ] Usar `fetch` nativo salvo necesidad justificada.

- [ ] Leer claves desde variables de entorno de Vite.

- [ ] No subir `.env` con secretos al repositorio.

- [ ] Usar claves frontend solo en entorno local o didactico.

- [ ] Definir un contrato de entrada y salida por servicio.

- [ ] Validar respuestas antes de actualizar estado.

- [ ] Transformar errores tecnicos en mensajes de UI.

- [ ] No llamar APIs desde componentes puramente visuales.

- [ ] No anadir clientes HTTP externos si `fetch` basta.

## Manejo de errores y cargas

- [ ] Cada llamada API debe tener `loading`.

- [ ] Cada llamada API debe tener `error`.

- [ ] Mostrar mensajes breves y accionables.

- [ ] Desactivar acciones mientras se procesa una operacion critica.

- [ ] Evitar bloquear toda la pantalla por una carga puntual.

- [ ] Validar campos antes de llamar a la API.

- [ ] Manejar respuestas vacias o JSON invalido.

- [ ] Mantener datos previos si falla un recalculo.

- [ ] Mostrar estados vacios para listas sin elementos.

- [ ] No mostrar detalles internos de errores al usuario final.

## Librerias aprobadas

| Libreria                            | Uso aprobado                                             |
| ----------------------------------- | -------------------------------------------------------- |
| `react`                             | Construccion de UI.                                      |
| `react-dom`                         | Renderizado en navegador.                                |
| `typescript`                        | Tipado estatico.                                         |
| `vite`                              | Desarrollo local y build.                                |
| `@mui/material`                     | Componentes Material Design.                             |
| `@mui/icons-material`               | Iconos Material UI.                                      |
| `@emotion/react`                    | Dependencia requerida por Material UI.                   |
| `@emotion/styled`                   | Dependencia requerida por Material UI.                   |
| `eslint`                            | Reglas basicas de calidad si ya esta configurado.        |
| `@eslint/js`                        | Configuracion recomendada base de ESLint.                |
| `typescript-eslint`                 | Reglas recomendadas de ESLint para TypeScript.           |
| `eslint-plugin-react`               | Reglas recomendadas de ESLint para React.                |
| `eslint-plugin-react-hooks`         | Reglas recomendadas de ESLint para Hooks.                |
| `eslint-plugin-import-x`            | Validacion y orden basico de importaciones.              |
| `eslint-import-resolver-typescript` | Resolucion de imports TypeScript para ESLint.            |
| `prettier`                          | Formato automatico de codigo y configuracion.            |
| `eslint-config-prettier`            | Desactivar reglas de ESLint que conflicten con Prettier. |
| `globals`                           | Variables globales de navegador para ESLint.             |
| Ninguna nueva                       | Solo anadir dependencias con beneficio claro.            |

## Herramientas de calidad

- [ ] Usar `npm run lint` para revisar reglas de ESLint.

- [ ] Usar `npm run lint:fix` para aplicar correcciones automaticas de ESLint.

- [ ] Usar `npm run format` para formatear el proyecto con Prettier.

- [ ] Usar `npm run format:check` para comprobar formato sin modificar archivos.

- [ ] Mantener `eslint-config-prettier` al final de `eslint.config.js` para evitar conflictos entre
      ESLint y Prettier.

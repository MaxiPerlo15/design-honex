# Issue 002 — Implementar seccion interactiva de diagnostico

## Goal

Construir el componente React de la seccion `Que necesita tu negocio?` con seleccion de etapa y respuesta visual por estado.

## Context

El PRD define una interaccion de un solo paso:
el usuario elige una etapa del negocio y la UI responde con un bloque de diagnostico propio.
La referencia visual e interactiva viene de un `.html` del cliente, pero la implementacion debe respetar el design system actual.

## Scope

- Renderizar las 4 opciones de etapa.
- Manejar estado de seleccion.
- Mostrar un bloque de diagnostico distinto por etapa.
- Mantener visible la grilla de opciones en mobile.
- Mostrar el resultado debajo de las opciones.
- Respetar la estetica y tipografia de la landing actual.

## Out of Scope

- CTA de WhatsApp.
- Integracion con navegacion o posicion en el layout.
- Ajustes de SEO o metadata.
- Reescritura de copys.

## Files Likely Affected

- `src/components/landing/BusinessDiagnostic.tsx` o equivalente nuevo
- `src/app/page.tsx`

## Testing Strategy

Required.

This is the core interactive slice. It needs component-level verification that stage selection updates the rendered diagnostic content and preserves the expected mobile behavior.

- Component renders the 4 stage options.
- Selecting a stage shows the corresponding diagnostic block.
- Resetting selection returns to the initial state.
- Mobile layout keeps the options visible with the result below.

## Acceptance Criteria

- El usuario puede seleccionar una etapa.
- La UI cambia segun la etapa elegida.
- Cada etapa muestra su propio bloque de diagnostico.
- La experiencia funciona sin recargar la pagina.
- En mobile, las opciones siguen visibles y el resultado aparece abajo.
- La estrategia de testing requerida fue aplicada.

## Notes For Agent

- No convertir esto en un wizard de varios pasos.
- No romper el sistema visual existente.

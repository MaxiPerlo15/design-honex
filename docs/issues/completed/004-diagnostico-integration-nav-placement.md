# Issue 004 — Integrar seccion y navegacion antes de Proceso

## Goal

Insertar la nueva seccion de diagnostico en el flujo de la landing antes de `Proceso` y agregar un item de navegacion propio.

## Context

El PRD define que la seccion vive como puente entre la propuesta de valor y el bloque de proceso.
Tambien requiere un acceso rapido desde la navegacion.

## Scope

- Insertar la seccion antes de `Proceso`.
- Agregar un item de navegacion propio para la seccion.
- Mantener el orden y la jerarquia actual de la landing.
- Evitar cambios innecesarios en otras secciones.

## Out of Scope

- Detalles de la interaccion interna.
- Lógica de WhatsApp.
- Rediseño global de la pagina.

## Files Likely Affected

- `src/app/page.tsx`
- `src/components/landing/Nav.tsx`
- `src/data/landing.ts`

## Testing Strategy

Required.

This is an integration issue. It needs a simple regression check that the new section is present in the right place and that the nav anchor scrolls to it correctly.

- Section renders before `Proceso`.
- Navigation link scrolls to the section anchor.
- Existing navigation behavior remains intact.

## Acceptance Criteria

- La seccion aparece antes de `Proceso`.
- La navegacion incluye acceso directo a la seccion.
- El scroll a la seccion funciona correctamente.
- No se altera el orden del resto de las secciones.
- La estrategia de testing requerida fue aplicada.

## Notes For Agent

- Mantener consistencia con el sistema visual actual.
- No agregar elementos de navegacion redundantes.

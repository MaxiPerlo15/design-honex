# Issue 009 — Resolver riesgo del claim de Burger King

## Goal

Respaldar o reformular la afirmacion sobre Burger King para que no parezca una acusacion sin evidencia.

## Context

Sale de `docs/prd.md`, secciones `Audit Findings`, `Brand Positioning`, `Functional Requirements` y `Success Criteria`.

El copy actual dice `Burger King copio mi diseño. Dos veces.` sin evidencia enlazada ni contexto verificable.

## Scope

- Decidir entre dos caminos: agregar evidencia real enlazada o reformular el claim.
- Si hay evidencia, mostrarla de forma clara y verificable.
- Si no hay evidencia, cambiar el bloque a una prueba de autoridad menos riesgosa.
- Mantener el tono directo de la marca sin prometer de mas.

## Out of Scope

- Investigar legalmente el caso.
- Crear una pagina larga de caso de estudio.
- Agregar backend o CMS.

## Files Likely Affected

- `src/data/landing.ts`
- `src/components/landing/ProofClaim.tsx`
- `src/app/globals.css` si cambia la composicion visual

## Testing Strategy

Optional.

El cambio es de contenido y presentacion. Usar test solo si cambia comportamiento condicional.

## Acceptance Criteria

- No queda una afirmacion fuerte sin respaldo visible.
- El bloque mantiene fuerza comercial.
- Si se usan enlaces, abren en una nueva pestaña con `rel` correcto.
- Mobile y desktop se mantienen coherentes.

## Notes For Agent

Este punto no es cosmetico. Tal como esta, baja confianza y puede generar riesgo reputacional.

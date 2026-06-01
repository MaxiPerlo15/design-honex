# Issue 021 - SEO: agregar FAQPage JSON-LD cuando el copy esté final

## Goal

Agregar schema.org `FAQPage` (JSON-LD) para potenciar SEO cuando las respuestas de FAQs estén listas y sean definitivas.

## Context

Referencia: `docs/prd.md` → Functional Requirements (SEO FAQs).

Decisión cerrada: no indexar placeholders. Este issue se ejecuta **después** de que el cliente provea el copy final de respuestas.

## Scope

- Extender el data model de FAQs (si no existe ya) para incluir `question` + `answer` final.
- Renderizar `FAQPage` JSON-LD en `src/app/page.tsx` (o donde esté el JSON-LD principal) usando esas Q/A.
- Validar que el JSON-LD sea válido:
  - `@type: FAQPage`
  - `mainEntity[]` con `Question` + `acceptedAnswer.text`
- Confirmar que el contenido visible coincide con el schema (mismo texto).

## Out of Scope

- Keyword research.
- Cambios en metadata fuera del schema de FAQs.
- Agregar contenido nuevo que no exista en la UI.

## Files Likely Affected

- `src/data/landing.ts`
- `src/app/page.tsx`
- `docs/audits/seo-readiness.md` (solo si hay decisión/documentación nueva)

## Testing Strategy

Optional.

- Render test simple que verifique que el JSON-LD incluye `FAQPage` cuando hay respuestas.
- Validación manual del JSON-LD (DevTools) y herramienta de test de rich results.

## Acceptance Criteria

- El schema `FAQPage` se renderiza solo cuando hay respuestas reales.
- El JSON-LD es válido y consistente con el contenido visible.
- No se agregan placeholders o respuestas vacías al schema.
- `npm run lint` y `npm test` pasan.

## Notes For Agent

No agregar schema si `answer` está vacío o es placeholder. El SEO se mejora con datos reales, no con estructura incompleta.

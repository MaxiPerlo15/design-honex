# Issue 014 - Auditar responsiveness completo

## Goal

Auditar la landing completa para detectar problemas responsive antes de implementar cambios visuales.

## Context

Referencia: `docs/prd.md`, secciones Functional Requirements, Non-Functional Requirements y Success Criteria.

La landing ya tuvo varias iteraciones visuales. No alcanza con revisar mobile y desktop; se debe verificar tambien tablet y `md`.

## Scope

- Auditar estos viewports: `360`, `390`, `430`, `768`, `820`, `1024`, `1366`, `1440px`.
- Revisar seccion por seccion:
  - Hero
  - Proof claim
  - Client marquee
  - Services
  - Business Diagnostic
  - Portfolio
  - Process
  - Contact CTA
  - Footer
- Detectar overflow horizontal, textos cortados, superposiciones, CTAs poco visibles, spacing inconsistente y problemas de jerarquia.
- Usar `frontend-design` para criterio visual.
- Usar `playwright-skill` para screenshots y validacion responsive.
- Crear un reporte en `docs/audits/responsive-audit.md`.

## Out of Scope

- Implementar fixes.
- Cambiar SEO.
- Cambiar contenido/copy salvo que el reporte lo marque como problema.

## Files Likely Affected

- `docs/audits/responsive-audit.md`

## Testing Strategy

Optional.

Esta issue es de auditoria. La verificacion principal son screenshots, reporte por viewport y deteccion de problemas concretos.

## Acceptance Criteria

- El reporte lista hallazgos por seccion y viewport.
- El reporte separa problemas bloqueantes de ajustes visuales menores.
- El reporte identifica si hay scroll horizontal real.
- El reporte incluye recomendaciones implementables.
- No se modifican componentes ni estilos.

## Notes For Agent

No conviertas la auditoria en un rediseño. El output debe permitir crear o ejecutar fixes concretos sin ambiguedad.

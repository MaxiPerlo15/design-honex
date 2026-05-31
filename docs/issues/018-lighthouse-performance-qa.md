# Issue 018 - QA final y Lighthouse

## Goal

Ejecutar QA final y Lighthouse mobile para validar rendimiento, accesibilidad, buenas practicas y SEO base.

## Context

Referencia: `docs/prd.md`, Non-Functional Requirements y Success Criteria.

Esta issue ocurre despues de cerrar responsive y tablet.

## Scope

- Ejecutar QA manual en `360`, `390`, `430`, `768`, `820`, `1024`, `1366`, `1440px`.
- Verificar:
  - navegacion;
  - CTAs;9,   
  - links externos;
  - foco visible;
  - estados interactivos;
  - ausencia de overflow horizontal;
  - legibilidad;
  - `prefers-reduced-motion`.
- Ejecutar Lighthouse mobile.
- Aplicar mejoras necesarias para cumplir:
  - `Performance >= 90`;
  - `Accessibility >= 95`;
  - `Best Practices >= 95`;
  - `SEO >= 95`.
- Usar `vercel-react-best-practices` para revisar performance React/Next.js.
- Documentar resultados en `docs/audits/final-qa-lighthouse.md`.

## Out of Scope

- Redisenar secciones.
- Agregar analytics.
- Implementar SEO avanzado si requiere cambios de contenido amplios.

## Files Likely Affected

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- Componentes de `src/components/landing/`
- `docs/audits/final-qa-lighthouse.md`

## Testing Strategy

Required.

Verificacion requerida:

- `npm test`
- `npm run build`
- Lighthouse mobile
- QA visual en viewports definidos

## Acceptance Criteria

- Lighthouse mobile cumple los cuatro umbrales.
- QA documentada con hallazgos y fixes aplicados.
- No queda overflow horizontal.
- Los CTAs y links funcionan.
- `npm test` pasa.
- `npm run build` pasa.

## Notes For Agent

Si Lighthouse falla por una causa que requiere decision de producto, documentar el bloqueo y no aplicar cambios que rompan la direccion visual.

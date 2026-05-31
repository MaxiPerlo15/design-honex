# Issue 011 — Unificar estrategia de carga tipografica

## Goal

Eliminar la carga duplicada/inconsistente de fuentes y dejar una estrategia unica para Barlow, Barlow Condensed y Space Mono.

## Context

Sale de `docs/prd.md`, secciones `Audit Findings`, `Visual Direction`, `Technical Constraints` y `Success Criteria`.

Hoy se usa `@import` de Google Fonts en CSS y tambien `next/font` con Geist en el layout, aunque la UI real usa Barlow y Space Mono.

## Scope

- Elegir una unica estrategia de carga de fuentes.
- Remover Geist si no se usa visualmente.
- Remover `@import` si se reemplaza por `next/font`.
- Mantener las variables/tokens actuales de Tailwind funcionando.
- Verificar que no haya cambio visual indeseado.

## Out of Scope

- Cambiar la identidad tipografica.
- Agregar fuentes nuevas.
- Reescribir toda la hoja global.

## Files Likely Affected

- `src/app/layout.tsx`
- `src/app/globals.css`

## Testing Strategy

Optional.

Es una mejora tecnica/visual. Validar con `npm run build` y QA visual.

## Acceptance Criteria

- Hay una sola estrategia de carga de fuentes.
- No quedan fuentes declaradas que no se usen.
- Build pasa.
- La apariencia general se mantiene.

## Notes For Agent

Preferir `next/font/google` si no rompe la paleta tipografica actual y evita bloqueo por `@import`.

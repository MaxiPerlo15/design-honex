# Issue 008 — Reemplazar placeholders del portfolio por prueba visual real

## Goal

Convertir el portfolio en una prueba visual creible, usando imagenes, enlaces o assets reales en vez de emojis como presentacion final.

## Context

Sale de `docs/prd.md`, secciones `Audit Findings`, `Visual Direction`, `Functional Requirements` y `Success Criteria`.

Una landing de diseño no puede sostener el portfolio principal con iconos/emoji como si fueran trabajos reales.

## Scope

- Definir el formato final de cada item de portfolio: imagen local, enlace externo o ambos.
- Actualizar los datos para soportar piezas reales y fallback controlado.
- Ajustar el componente para priorizar imagen/enlace real.
- Mantener el marquee o reemplazarlo por una grilla si mejora la inspeccion visual.
- Verificar mobile y desktop.

## Out of Scope

- Crear assets falsos.
- Integrar CMS.
- Redisenar toda la landing.
- Agregar filtros o pagina de detalle.

## Files Likely Affected

- `src/data/landing.ts`
- `src/components/landing/Portfolio.tsx`
- `src/app/globals.css`
- `public/*` si se agregan assets reales

## Testing Strategy

Optional.

Es una mejora principalmente visual y de contenido. Agregar test ligero si cambia la estructura del componente.

- Si se modifica el rendering condicional, testear que imagen/enlace se renderizan cuando existen.
- Hacer QA manual responsive.

## Acceptance Criteria

- El portfolio muestra prueba visual real o enlaces verificables.
- Los emojis no son la representacion principal de trabajos finales.
- Los items siguen siendo faciles de actualizar desde datos.
- La seccion se ve bien en mobile y desktop.
- No se agregan dependencias.

## Notes For Agent

Si faltan assets reales, no inventarlos. Pedirlos o reformular la seccion para mostrar enlaces verificables.

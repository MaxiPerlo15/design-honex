# Issue 010 — Pulir hero desktop y lectura semantica del H1

## Goal

Reducir el espacio vacio del hero en desktop y corregir la lectura semantica del H1 sin perder impacto visual.

## Context

Sale de `docs/prd.md`, secciones `Audit Findings`, `Functional Requirements` y `Success Criteria`.

El hero deja demasiado aire antes de la siguiente seccion y el H1 renderizado se lee como `Tu marcano esinvisible.` al extraer texto.

## Scope

- Ajustar alturas y espaciado del hero en desktop.
- Mantener mobile first y CTA visible.
- Corregir el H1 para que lectores de pantalla y extraccion DOM conserven espacios.
- Verificar que el resultado visual siga alineado con la direccion de marca.

## Out of Scope

- Cambiar el mensaje principal.
- Redisenar secciones posteriores.
- Agregar imagen hero si no hay asset aprobado.

## Files Likely Affected

- `src/components/landing/Hero.tsx`
- `src/app/globals.css`
- `src/data/landing.ts` si se ajusta la estructura del titulo

## Testing Strategy

Required.

El H1 es contenido critico y afecta accesibilidad/SEO.

- Testear que el H1 tiene texto legible con espacios.
- QA visual mobile `390px` y desktop `1440px`.

## Acceptance Criteria

- El H1 se lee como `Tu marca no es invisible.`
- El hero no genera un bloque vacio innecesario en desktop.
- Los CTAs siguen visibles y utilizables.
- Mobile no empeora.

## Notes For Agent

Resolver con estructura semantica limpia. No uses texto duplicado visible que pueda confundir accesibilidad.

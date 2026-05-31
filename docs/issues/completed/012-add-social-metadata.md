# Issue 012 — Agregar metadata social basica

## Goal

Completar la metadata social para que la landing se comparta correctamente en redes y mensajeria.

## Context

Sale de `docs/prd.md`, secciones `Audit Findings`, `Functional Requirements` y `Success Criteria`.

El layout solo define `title` y `description`; faltan Open Graph, Twitter card e imagen social.

## Scope

- Agregar `openGraph` con titulo, descripcion, tipo, locale e imagen.
- Agregar `twitter` card.
- Definir una imagen social valida.
- Mantener metadata compatible con Next.js App Router.

## Out of Scope

- Generar analytics.
- Crear sitemap.
- Crear robots.
- Integrar CMS.

## Files Likely Affected

- `src/app/layout.tsx`
- `public/*` si se agrega imagen social

## Testing Strategy

Required.

La metadata es output verificable.

- Testear o verificar que el HTML generado contiene tags OG/Twitter esperados.
- `npm run build` debe pasar.

## Acceptance Criteria

- Existen tags Open Graph basicos.
- Existe Twitter card basica.
- La imagen social apunta a un asset valido.
- El build pasa.

## Notes For Agent

No usar una imagen inexistente. Si no hay asset final, crear un issue dependiente o usar temporalmente el logo solo si se acepta como fallback.

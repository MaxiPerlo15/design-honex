# Issue 019 - Preparar SEO de alta calidad para deployment

## Goal

Dejar el SEO tecnico, social y semantico listo para deployment posterior.

## Context

Referencia: `docs/prd.md`, Functional Requirements y Success Criteria.

Decision cerrada: SEO va como issue separado despues de responsive y QA, no mezclado con layout.

## Scope

- Revisar y mejorar metadata de Next.js.
- Definir title y description finales.
- Configurar canonical.
- Revisar Open Graph y Twitter card.
- Usar una imagen social adecuada para compartir, no solo un asset improvisado si no funciona bien en preview.
- Crear o validar `robots.txt`.
- Crear o validar `sitemap.xml`.
- Evaluar schema JSON-LD apropiado para negocio/servicio.
- Revisar estructura semantica de headings.
- Verificar textos alternativos de imagenes importantes.
- Verificar que los links externos tengan `rel` correcto.
- Documentar decisiones SEO en `docs/audits/seo-readiness.md`.

## Out of Scope

- Blog.
- CMS.
- Analytics avanzado.
- A/B testing.
- Campanas pagas.
- Keyword research profundo fuera del contenido actual.

## Files Likely Affected

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/robots.ts` o `public/robots.txt`
- `src/app/sitemap.ts` o `public/sitemap.xml`
- Componentes de `src/components/landing/`
- `public/`
- `docs/audits/seo-readiness.md`

## Testing Strategy

Required.

Verificacion requerida:

- `npm run build`
- Lighthouse SEO `>= 95`
- Validacion manual de metadata renderizada
- Validacion de sitemap y robots

## Acceptance Criteria

- Metadata lista para deployment.
- Open Graph y Twitter card funcionan con imagen adecuada.
- Canonical configurado.
- Sitemap y robots disponibles.
- Headings mantienen estructura semantica.
- Imagenes relevantes tienen alt util.
- Lighthouse SEO mobile es `>= 95`.
- `npm run build` pasa.

## Notes For Agent

No convertir esta issue en una estrategia de marketing completa. El objetivo es SEO tecnico y calidad de presentacion social para lanzar la landing.

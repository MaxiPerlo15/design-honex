# SEO Readiness (Issue 019)

## Objetivo

Dejar el SEO **técnico / social / semántico** listo para deployment, sin entrar en keyword research profundo ni cambios masivos de contenido.

## Decisiones cerradas

- **Brand name:** `Design Honex` (unificado en metadata + UI accesible).
- **Canonical + dominio:** `https://designhonex.com/` (sin `www`).
- **Local SEO base:** `Córdoba, Argentina` + servicio **remoto**.

## Metadata (Next.js)

- `title`: `Design Honex | Social Media, Branding y Diseño en Córdoba`
- `description`: `Social media, branding, diseño gráfico y contenido para negocios en Córdoba y remoto. Estrategia + diseño con criterio. Contactame por WhatsApp.`
- `alternates.canonical`: `/`
- `openGraph` + `twitter`: alineados con los valores anteriores.

Archivo: `src/app/layout.tsx`

## Social preview images (OG/Twitter)

Se generan como imágenes PNG via rutas de Next:

- Open Graph: `src/app/opengraph-image.tsx` → `/opengraph-image`
- Twitter: `src/app/twitter-image.tsx` → `/twitter-image`

## Robots + Sitemap

Implementados como rutas de Next:

- `src/app/robots.ts` → `/robots.txt`
- `src/app/sitemap.ts` → `/sitemap.xml`

## Schema JSON-LD

Se declara un `ProfessionalService` con base local y servicio remoto:

- Name: `Design Honex`
- URL: `https://designhonex.com`
- Address: `Córdoba, Córdoba, AR` (sin calle)
- Area served: `Córdoba, Argentina, Remote`
- sameAs: Instagram
- ContactPoint: WhatsApp (E.164)

Archivo: `src/app/page.tsx`

## Links externos

Todos los links externos relevantes usan `rel="noopener noreferrer"` cuando aplican.

## Fuera de alcance (por decisión)

- Keyword research + clustering + estrategia de contenidos (queda para PRD/issue posterior).


# SEO Readiness (Issue 019)

## Objetivo

Dejar el SEO **técnico / social / semántico** listo para deployment, sin entrar en keyword research profundo ni cambios masivos de contenido.

## Decisiones cerradas

- **Brand name:** `Design Honex` (unificado en metadata + UI accesible).
- **Canonical + dominio:** `https://designhonex.com/` (sin `www`).
- **Local SEO base:** `Córdoba, Argentina` + servicio **remoto**.

## Metadata (Next.js)

- `title`: `Design Honex | Branding, diseño gráfico y redes en Córdoba`
- `description`: `Branding, diseño gráfico y contenido para redes para negocios en Córdoba y remoto. Estrategia visual clara para marcas que quieren destacar. Contactame por WhatsApp.`
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

Se declara un grafo JSON-LD con señales locales y semánticas más fuertes:

- `WebSite` y `WebPage` enlazados al negocio.
- `ProfessionalService` + `LocalBusiness` sobre la misma entidad.
- `hasOfferCatalog` con los servicios visibles en la landing.
- Name: `Design Honex`
- URL: `https://designhonex.com`
- Address: `Córdoba, Córdoba, AR` (sin calle)
- Area served: `Córdoba, Argentina, Remote`
- sameAs: Instagram
- ContactPoint: WhatsApp (E.164)

Archivo: `src/app/page.tsx`

## Metadata extendida

- `applicationName`, `creator`, `publisher`, `authors` y `keywords` definidos.
- `robots` explícito con `index`, `follow` y max previews para Google.

## Links externos

Todos los links externos relevantes usan `rel="noopener noreferrer"` cuando aplican.

## Fuera de alcance (por decisión)

- Keyword research + clustering + estrategia de contenidos (queda para PRD/issue posterior).

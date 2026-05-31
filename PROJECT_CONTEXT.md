# Honex Design Landing

## Contexto del proyecto

Landing page estática para Honex Design, cliente orientado a diseño gráfico, branding, social media y contenido digital. El objetivo actual es iterar rápido a nivel UI, sin backend ni lógica compleja, tomando como referencia visual los HTML exportados desde Figma/Stitch y el logo entregado por el cliente.

Por ahora el frontend vive como una implementación monolítica simple dentro de `src/app/page.tsx`, con estilos globales en `src/app/globals.css`. La migración a componentes React más limpios queda para una etapa posterior.

## Design system utilizado

Dirección visual:

- Estética dark, técnica y agresiva.
- Paleta principal: negro `#0a0a0a`, azul intenso `#1400ff`, verde neón `#00ff41`, blanco y amarillo de acento `#ffe600`.
- Tipografías: `Barlow Condensed` para titulares y comandos visuales, `Barlow` para cuerpo, `Space Mono` para metadata, números y etiquetas.
- Recursos visuales: grilla técnica, ruido sutil, cortes diagonales, outlines tipográficos, bandas azules, cards oscuras y marquees horizontales.

Tokens/clases principales agregadas:

- `ds-hero`: H1 principal.
- `ds-display`: títulos de sección.
- `ds-display-sm`: títulos destacados secundarios.
- `ds-kicker`: labels/eyebrows.
- `ds-body`: texto descriptivo.
- `ds-card-title`: títulos de cards.
- `ds-card-copy`: textos de cards.

## Animaciones implementadas

Las animaciones se portaron desde el HTML exportado sin instalar librerías externas. Están resueltas con CSS y APIs nativas del navegador.

CSS:

- `grid-pulse`: respiración sutil de la grilla del hero.
- `blob-breath`: movimiento del bloque azul del hero.
- `stripe-scroll`: movimiento de diagonales en bandas azules.
- `reveal-right`, `line-reveal`, `fade-up`, `fade-left`: entrada inicial del hero.
- `float-logo`, `corner-pulse`: movimiento del logo principal.
- `marquee`: desplazamiento de clientes y portfolio.
- `pulse-glow`: indicador de disponibilidad.

JS client-side:

- `AnimationEffects.tsx` agrega cursor custom con ring en desktop.
- Nav compacta al hacer scroll.
- `IntersectionObserver` para reveal de secciones.
- Parallax sutil del hero con movimiento del mouse.
- Contador animado para stats.
- Botones magnéticos en desktop.

## Implementado hasta ahora

- Landing completa con secciones: nav, hero, claim Burger King, clientes, servicios, portfolio, proceso, contacto y footer.
- Logo real convertido desde `logo-designhonex.png` a `public/logo-designhonex.webp`.
- Uso de `next/image` para el logo en nav y hero.
- Corrección de textos en español con tildes y `ñ`.
- Ajuste responsive desktop/tablet/mobile.
- Navegación mobile mínima: `Servicios` y `Hablemos`.
- Auditoría con Playwright en `1440x1100`, `768x1024`, `390x844` y `360x740`.
- Validación sin overflow horizontal real.

## Verificaciones realizadas

- `npm run lint`
- `npm run build`
- Auditorías visuales con Playwright y capturas temporales en `/tmp`.

## Pendiente antes de avanzar

- Migrar la landing desde el monolito de `page.tsx` a componentes React explícitos.
- Separar data estática de presentación.
- Reemplazar placeholders de contacto: WhatsApp y email final.
- Integrar imágenes `.webp` del paquete final del cliente cuando estén disponibles.
- Revisar claims sensibles como “Burger King copió mi diseño” si el cliente no aporta prueba o autorización.


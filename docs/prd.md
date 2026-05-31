# PRD - Auditoria de Landing Page

**Proyecto:** Honex Design landing page  
**Estado:** Draft auditado  
**Fecha:** 2026-05-30  
**Fuente:** Revision de codigo, build, tests y QA visual responsive con Playwright.

## Project Overview

La landing presenta los servicios de Honex Design para potenciales clientes que necesitan gestion de redes, branding, contenido y estrategia digital.

El sitio existe para mostrar criterio profesional, prueba de trabajo, servicios claros y caminos directos de contacto. Es una landing frontend-only, no una aplicacion SaaS.

## Business Goal

Generar consultas calificadas de potenciales clientes a traves de CTAs visibles y confiables.

## Target Audience

Dueños de negocios, emprendedores y marcas chicas/medianas que necesitan mejorar su presencia digital sin gestionar un equipo interno de diseño o social media.

El visitante ideal llega desde redes, recomendacion o busqueda directa; quiere entender rapido si el servicio aplica a su negocio, ver pruebas concretas y contactar sin friccion.

## Brand Positioning

Honex Design debe percibirse como una marca creativa, directa, moderna y profesional.

El tono puede ser filoso y memorable, pero no debe cruzar la linea hacia afirmaciones sin respaldo, placeholders visibles o promesas que bajen confianza.

## Visual Direction

- Color direction: base negra con azul electrico, verde neon y acentos puntuales en amarillo.
- Typography direction: titulos condensados de alto impacto, texto corto y escaneable.
- Layout style: secciones de alto contraste, grillas simples, composicion editorial y CTAs claros.
- Imagery style: trabajos reales, piezas visuales verificables y enlaces a portfolio cuando existan.
- Motion philosophy: animacion con caracter, pero controlada; debe respetar `prefers-reduced-motion` y no impedir lectura.

## Audit Findings

- `npm test` falla. El test espera un link accesible como `/hablemos por whatsapp/i`, pero el CTA real expone `HABLEMOS DE ESTO por WhatsApp` en `src/components/landing/BusinessDiagnostic.spec.tsx:55` y `src/components/landing/BusinessDiagnostic.tsx`.
- El contacto principal de WhatsApp esta inconsistente: el diagnostico usa `543533432075`, pero la seccion contacto muestra `Pendiente de numero final` y apunta a `https://wa.me/5490000000000` en `src/data/landing.ts:314`.
- El portfolio no muestra trabajos reales; usa iconos/emoji como sustitutos en `src/data/landing.ts:221` y `src/components/landing/Portfolio.tsx:37`. Para una landing de diseño, esto debilita la prueba visual.
- La afirmacion "Burger King copio mi diseño" no tiene evidencia enlazada ni contexto verificable en `src/data/landing.ts:199`. Asi como esta, es una afirmacion de alto riesgo reputacional.
- El hero en desktop deja demasiado espacio vacio antes de la siguiente seccion por `min-h-[760px]` / `xl:min-h-[820px]` en `src/components/landing/Hero.tsx:9`.
- El H1 renderizado concatena texto sin espacios en lectura DOM: `Tu marcano esinvisible.`. Debe conservar legibilidad semantica aunque visualmente este partido en lineas.
- La carga de fuentes esta duplicada/inconsistente: se importa Google Fonts via CSS en `src/app/globals.css:1` y tambien `next/font` con Geist en `src/app/layout.tsx:2`, aunque el sistema visual usa Barlow/Space Mono.
- El SEO social es minimo: metadata solo define `title` y `description` en `src/app/layout.tsx:15`; faltan Open Graph, Twitter card e imagen social.

## Information Architecture

1. Hero
2. Proof claim / prueba de autoridad
3. Client marquee
4. Services
5. Business Diagnostic
6. Portfolio
7. Process
8. Contact CTA
9. Footer

## Functional Requirements

- El CTA de diagnostico debe tener nombre accesible y tests alineados con el copy final.
- Todos los CTAs a WhatsApp deben usar el mismo numero final y el mismo formato de pais.
- La seccion Contacto no debe mostrar placeholders en produccion.
- El portfolio debe aceptar imagen, enlace externo o asset real por item; los iconos solo pueden ser fallback temporal no visible en version final.
- La prueba de autoridad debe enlazar evidencia real o reformularse para evitar una afirmacion sin respaldo.
- La navegacion debe llevar correctamente a cada seccion visible.
- El hero debe mantener el mensaje principal y CTA visibles sin generar un bloque vacio innecesario en desktop.
- El H1 debe ser visualmente igual o mejor, pero semanticamente legible para lectores de pantalla y extraccion de texto.
- Las fuentes deben cargarse con una estrategia unica y coherente.
- La metadata debe incluir Open Graph, Twitter card y una imagen social valida.

## Non-Functional Requirements

- `npm run build` debe pasar.
- `npm run lint` debe pasar.
- `npm test` debe pasar.
- La landing debe verse pulida en mobile `390px`, tablet `768px` y desktop `1440px`.
- No debe haber scroll horizontal real en ningun breakpoint.
- Los contrastes de CTAs, links y texto secundario deben seguir siendo legibles sobre fondo negro o azul.
- La UI debe respetar `prefers-reduced-motion`.
- No se deben agregar dependencias innecesarias.
- No se deben modificar archivos fuera del alcance de la landing y su documentacion.

## Technical Constraints

- Next.js App Router.
- React + TypeScript estricto.
- Tailwind CSS.
- Frontend-only.
- Sin backend.
- Sin autenticacion.
- Sin base de datos.
- Sin CMS.
- Sin dependencias nuevas salvo justificacion explicita.

## Out of Scope

- Blog.
- Dashboard.
- Login o cuentas de usuario.
- Formularios con almacenamiento.
- Panel administrativo.
- Integracion CMS.
- Pagos.
- Analytics avanzado.
- Rediseño completo de marca.

## Success Criteria

La auditoria se considera implementada cuando:

- `docs/prd.md` deja de tener placeholders y funciona como fuente de verdad.
- `npm run build`, `npm run lint` y `npm test` pasan.
- El numero de WhatsApp es final y consistente en diagnostico/contacto.
- No queda ningun placeholder visible en la landing.
- El portfolio muestra prueba visual real o enlaces verificables.
- La afirmacion sobre Burger King queda respaldada con evidencia o reformulada.
- El hero desktop reduce el espacio vacio sin perder impacto visual.
- El H1 conserva lectura semantica correcta.
- Metadata social basica esta configurada.
- Mobile, tablet y desktop fueron revisados visualmente.

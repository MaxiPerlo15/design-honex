# PRD — Landing Page (Design Honex)

**Proyecto:** Design Honex landing page  
**Estado:** Activo  
**Fecha:** 2026-06-01  
**Fuente:** Estado actual del sitio + decisión validada para incorporar sección FAQs.

## Project Overview

Landing frontend-only para presentar servicios de social media, branding/diseño gráfico y contenido.

El sitio existe para mostrar criterio profesional, prueba de trabajo, servicios claros y caminos directos de contacto. No es una aplicación SaaS.

## Business Goal

Generar consultas calificadas de potenciales clientes a traves de CTAs visibles y confiables.

## Target Audience

Dueños de negocios, emprendedores y marcas chicas/medianas que necesitan mejorar su presencia digital sin gestionar un equipo interno de diseño o social media.

El visitante ideal llega desde redes, recomendacion o busqueda directa; quiere entender rapido si el servicio aplica a su negocio, ver pruebas concretas y contactar sin friccion.

## Brand Positioning

Design Honex debe percibirse como una marca creativa, directa, moderna y profesional.

El tono puede ser filoso y memorable, pero no debe cruzar la linea hacia afirmaciones sin respaldo, placeholders visibles o promesas que bajen confianza.

## Visual Direction

- Color direction: base negra con azul electrico, verde neon y acentos puntuales en amarillo.
- Typography direction: titulos condensados de alto impacto, texto corto y escaneable.
- Layout style: secciones de alto contraste, grillas simples, composicion editorial y CTAs claros.
- Imagery style: trabajos reales, piezas visuales verificables y enlaces a portfolio cuando existan.
- Motion philosophy: animacion con caracter, pero controlada; debe respetar `prefers-reduced-motion` y no impedir lectura.

## Information Architecture

1. Hero
2. Proof claim / prueba de autoridad
3. Services marquee (franja)
4. Servicios
5. Diagnóstico (Business Diagnostic)
6. Portfolio / Marcas
7. Proceso
8. FAQs
9. Contacto (CTA final)
10. Footer

## Functional Requirements

- Navegación: el menú debe incluir link `FAQs` que scrollea a `#faqs` en mobile y desktop.
- FAQs (máx. 5 items): sección ubicada entre `Proceso` y `Contacto`, sin obligar a que `Contacto` pase a fondo azul.
- FAQs (titulo): encabezado visible `¿Tenés dudas?` en mobile y desktop.
- FAQs (desktop): se ven los 5 títulos; cada item despliega/colapsa respuesta al click; solo una abierta a la vez; permitir 0 abiertas.
- FAQs (mobile): por defecto solo se ve el encabezado; tap en el encabezado muestra/oculta la lista; dentro, acordeón con el mismo comportamiento (1 abierta, permitir 0).
- FAQs (mobile reset): al colapsar la lista, se cierra cualquier pregunta abierta (reset de estado).
- FAQs (contenido): por ahora solo se define estructura (títulos); las respuestas se cargarán luego. No renderizar placeholders visibles como “próximamente”.
- SEO: NO agregar `FAQPage` JSON-LD hasta tener las respuestas finales.
- Diseño: mantener el design system existente (tipografía `ds-*`, paleta, jerarquía y espaciados).

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

El proyecto se considera completo cuando:

- La sección FAQs existe, respeta el design system y está ubicada según el IA.
- El link `FAQs` del menú scrollea a la sección correcta en mobile y desktop.
- En desktop se ven los 5 títulos y el acordeón cumple el comportamiento definido (1 abierta, permitir 0).
- En mobile el encabezado controla el colapso de la lista y el reset de estado funciona.
- No hay placeholders visibles en respuestas.
- `npm run build`, `npm run lint` y `npm test` pasan.

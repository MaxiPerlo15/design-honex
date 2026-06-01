# Issue 020 - Agregar sección FAQs (mobile collapsible + acordeón)

## Goal

Incorporar una sección de **FAQs** con hasta 5 preguntas, manteniendo el design system actual y mejorando conversión antes del CTA final.

## Context

Referencia: `docs/prd.md` → Information Architecture + Functional Requirements (FAQs).

Decisiones cerradas:

- Ubicación: entre `Proceso` y `Contacto`.
- Nav: agregar link `FAQs` (mobile + desktop) que scrollea a `#faqs`.
- Título sección visible (H2): `¿Tenés dudas?` (con tilde) en mobile y desktop.
- Desktop: se ven los 5 títulos; click despliega/colapsa; **solo 1 abierta**; permitir **0 abiertas**.
- Mobile: por defecto se ve solo el H2; tap en H2 muestra/oculta la lista; dentro el acordeón mantiene el mismo comportamiento.
- Mobile reset: al colapsar la lista, cerrar la pregunta abierta (reset de estado).
- Contenido: solo estructura (títulos). Las respuestas se cargarán luego, sin placeholders visibles.
- SEO: no agregar `FAQPage` JSON-LD hasta tener respuestas finales (ver Issue 021).

## Scope

- Crear componente de sección `FAQs` (responsive) manteniendo estilos/jerarquía existentes:
  - Usar `ds-kicker` + `ds-display`/`ds-display-sm` de forma consistente.
  - Fondo oscuro tipo panel (negro levemente distinto) + `border-y border-white/10` para separar de `Contacto` sin volverlo azul.
- Implementar comportamiento:
  - Acordeón 1-abierta (state único), permitir 0 (toggle).
  - Desktop: lista visible siempre.
  - Mobile: lista oculta por defecto, se muestra al tap del header; al ocultar → reset (cerrar item activo).
  - Accesibilidad: navegación por teclado, `aria-expanded`, `aria-controls`, `id` estables.
- Agregar data source para FAQs en `src/data/landing.ts` (solo títulos + campo `answer` opcional para completar luego sin romper UI).
- Insertar sección en `src/app/page.tsx` entre `Process` y `Contact`.
- Agregar link `FAQs` a `navLinks` con `href: "#faqs"`.

## Out of Scope

- Escribir el copy final de respuestas.
- Agregar `FAQPage` JSON-LD (se hace en Issue 021 cuando haya respuestas reales).
- Cambios de layout fuera de la nueva sección y el link de navegación.

## Files Likely Affected

- `src/app/page.tsx`
- `src/data/landing.ts`
- `src/components/landing/Faqs.tsx` (nuevo)
- `src/app/globals.css` (solo si hace falta para detalles finos)
- `src/components/landing/Nav.tsx` (si el componente requiere ajuste para el link)
- Tests: `src/components/landing/Faqs.spec.tsx` (nuevo) y/o update de tests existentes si corresponde

## Testing Strategy

Required.

- Render: la sección existe y tiene `id="faqs"`.
- Desktop: por defecto los 5 títulos están visibles.
- Acordeón: click en un título abre, click en otro cierra el anterior; click en el abierto lo cierra.
- Mobile: tap en el header muestra/oculta lista; al ocultar, se resetea el item abierto.
- Accesibilidad mínima: botones con `aria-expanded` correcto.

## Acceptance Criteria

- Sección FAQs visible y coherente con el design system.
- En desktop: se ven 5 títulos y acordeón cumple comportamiento definido.
- En mobile: header colapsa/expande lista; reset funciona al colapsar.
- Link `FAQs` en navegación scrollea a `#faqs`.
- No hay placeholders visibles en respuestas.
- `npm run lint` y `npm test` pasan.
- UI funciona en mobile y desktop sin scroll horizontal.

## Notes For Agent

- Evitar dependencias nuevas.
- Preferir control de “mobile vs desktop” con breakpoints/CSS, no con `window.innerWidth` salvo necesidad.
- Mantener el componente chico y enfocado: contenido desde `landing.ts`, UI en `Faqs.tsx`.

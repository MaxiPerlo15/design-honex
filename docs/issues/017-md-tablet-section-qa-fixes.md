# Issue 017 - Corregir layout md y tablet seccion por seccion

## Goal

Corregir problemas visuales y funcionales en `768`, `820` y `1024px` seccion por seccion.

## Context

Referencia: `docs/prd.md`, Functional Requirements y Success Criteria.

Decision cerrada: la auditoria md/tablet debe ser seccion por seccion, no solo por roturas evidentes.

## Scope

- Revisar y corregir:
  - Hero
  - Proof claim
  - Client marquee
  - Services
  - Business Diagnostic
  - Portfolio
  - Process
  - Contact CTA
  - Footer
- Ajustar grillas, spacing, tamanos de headings, posicion de imagenes y ancho de cards cuando sea necesario.
- Verificar que los carruseles y secciones con contenido horizontal no generen overflow.
- Mantener consistencia visual con mobile y desktop.

## Out of Scope

- Redisenar secciones desde cero.
- Cambiar copy.
- Implementar SEO.
- Cambiar comportamiento de diagnostico fuera de mobile/tablet.

## Files Likely Affected

- `src/components/landing/Hero.tsx`
- `src/components/landing/ProofClaim.tsx`
- `src/components/landing/ClientMarquee.tsx`
- `src/components/landing/Services.tsx`
- `src/components/landing/BusinessDiagnostic.tsx`
- `src/components/landing/Portfolio.tsx`
- `src/components/landing/Process.tsx`
- `src/components/landing/Contact.tsx`
- `src/components/landing/Footer.tsx`
- `src/app/globals.css`

## Testing Strategy

Optional.

Visual QA es la verificacion principal. Agregar tests solo si se cambia comportamiento o render condicional.

## Acceptance Criteria

- `768`, `820` y `1024px` fueron revisados con screenshots.
- Cada seccion mantiene jerarquia y legibilidad.
- No hay textos superpuestos ni cortados.
- No hay overflow horizontal.
- `npm test` pasa.
- `npm run build` pasa.

## Notes For Agent

Usar `frontend-design` para criterio visual y `playwright-skill` para screenshots. No mezclar esta issue con SEO ni Lighthouse.

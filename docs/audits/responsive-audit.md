# Responsive Audit (Issue 014)

Fecha: 2026-05-31  
Entorno auditado: `next dev` en `http://localhost:3000` (se detectó server Next ya corriendo)  
Viewports: `360`, `390`, `430`, `768`, `820`, `1024`, `1366`, `1440`

## Metodología

- Generé screenshots por viewport y por sección con Playwright:
  - `/tmp/responsive-audit-014/<viewport>/(full|hero|proof-claim|client-marquee|services|business-diagnostic|portfolio|process|contact-cta|footer).png`
- Validé navegación por anchor (`#servicios`, `#diagnostico`, etc.) con scroll suave activo:
  - `/tmp/responsive-audit-014-nav/<viewport>/(inicio|servicios|diagnostico|portfolio|proceso|contacto).png`
  - `/tmp/responsive-audit-014-nav/results.json`
- Detección de overflow horizontal (medición de `scrollWidth` vs `clientWidth`) en `/tmp/responsive-audit-014/results.json`.

## Resultado global

- Scroll horizontal real: **NO** en ninguno de los viewports auditados (`scrollWidth === clientWidth` en los 8 casos).
- Overflows/solapamientos entre secciones: **NO** se detectaron problemas estructurales.
- Ruido de entorno (importante para interpretar screenshots):
  - En `next dev` aparece el **Dev Indicator de Next.js** (círculo con “N” abajo a la izquierda). En mobile tapa partes de UI en screenshots y puede bloquear clicks, pero **no es un problema de producción**.

## Hallazgos (bloqueantes)

1) **Anchor + navbar fija tapa “eyebrows” (kicker) en varias secciones (mobile).**  
   - No tapa los títulos principales (H1/H2), pero sí los rótulos chicos de arriba (“LO QUE HAGO”, “PORTFOLIO”, “SIN VUELTAS”, etc.) cuando se llega por `#anchor`.
   - Evidencia: `/tmp/responsive-audit-014-nav/360/servicios.png`, `/tmp/responsive-audit-014-nav/360/portfolio.png`, `/tmp/responsive-audit-014-nav/360/proceso.png` (mismo patrón en 390/430).
   - Impacto: la navegación “salta” a una vista donde falta contexto visual inmediato.

## Hallazgos (ajustes menores)

- **Mobile nav recorta navegación disponible** (en 360/390/430 solo muestra 2 links + CTA).  
  - No es un bug responsive per se, pero limita acceso directo a secciones como Portfolio/Proceso desde header.
  - Esto probablemente se resuelva en Issue 015 (hamburger navigation).
- **Legibilidad en textos secundarios (mobile)**: algunos párrafos gris sobre negro quedan cerca del umbral de contraste (especialmente en cards/descripcion). No se corta, pero se siente “apagado”.

## Revisión por sección y viewport

### 1) Hero

- 360 / 390 / 430:
  - OK: título + CTAs entran sin cortes; jerarquía fuerte.
  - A revisar: densidad del header (links + CTA) y tamaño clickeable de links.
- 768 / 820 / 1024 / 1366 / 1440:
  - OK: layout equilibrado; CTA principal bien visible.

### 2) Proof claim

- 360 / 390 / 430:
  - OK: texto no se corta; snapshots quedan lado a lado y se entienden (aunque se sienten justos en 360).
- 768 / 820 / 1024 / 1366 / 1440:
  - OK: composición sólida; imágenes con buen aire.

### 3) Client marquee

- Todos los viewports:
  - OK: sin overflow ni cortes.

### 4) Services

- 360 / 390 / 430:
  - Anchor `#servicios`: el eyebrow “LO QUE HAGO” queda **parcialmente tapado** por la navbar fija.
    - Evidencia: `/tmp/responsive-audit-014-nav/360/servicios.png`.
  - Layout: lista 1-col OK.
- 768 / 820:
  - OK: pasa a 2 columnas sin cortes.
- 1024 / 1366 / 1440:
  - OK: 3 columnas; spacing consistente.

### 5) Business Diagnostic

- Todos los viewports:
  - OK: no se detectan cortes, overflow horizontal ni solapamientos.
  - Nota: esta sección **sí** tiene `scroll-mt-*`, por eso el anchor se siente más “correcto” que en otras secciones.

### 6) Portfolio

- 360 / 390 / 430:
  - Anchor `#portfolio`: el rótulo “PORTFOLIO” queda **tapado** por la navbar fija (el H2 “MARCAS REALES.” queda visible).
    - Evidencia: `/tmp/responsive-audit-014-nav/360/portfolio.png`.
  - CTA visible.
- 768 / 820:
  - OK: 2 columnas + CTA.
- 1024 / 1366 / 1440:
  - OK: grilla amplia; CTA centrada.

### 7) Process

- 360 / 390 / 430:
  - Anchor `#proceso`: el eyebrow “SIN VUELTAS” queda **parcialmente tapado** por la navbar fija.
    - Evidencia: `/tmp/responsive-audit-014-nav/360/proceso.png`.
  - Cards 1-col OK.
- 768 / 820:
  - OK: 2x2 cards.
- 1024 / 1366 / 1440:
  - OK: cards en una fila; buena lectura.

### 8) Contact CTA

- Todos los viewports:
  - OK: sin cortes; CTAs (cards) accesibles.

### 9) Footer

- Todos los viewports:
  - OK: layout responsive (stack en mobile, fila en md+).
  - Nota de entorno: el Dev Indicator “N” puede superponerse en screenshots (no producción).

## Recomendaciones implementables (para issues de fixes)

1) **Agregar `scroll-margin-top`/`scroll-mt-*` a secciones que hoy no lo tienen** (`#servicios`, `#portfolio`, `#proceso`, etc.), para que el eyebrow no quede detrás de la navbar fija al navegar por anchor.  
2) **(Opcional) Revisar contraste de texto secundario en mobile** en cards y descripciones largas (sin cambiar copy).


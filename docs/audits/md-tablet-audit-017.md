# QA md/tablet (Issue 017)

Fecha: 2026-05-31  
Viewports auditados: `768`, `820`, `1024px`  
Entorno: `http://localhost:3000` (Next en dev)

## Evidencia (screenshots)

Carpeta: `/tmp/md-tablet-audit-017/`

- Por viewport:
  - `/tmp/md-tablet-audit-017/768/(full|hero|proof-claim|client-marquee|services|business-diagnostic|portfolio|process|contact|footer).png`
  - `/tmp/md-tablet-audit-017/820/(full|hero|proof-claim|client-marquee|services|business-diagnostic|portfolio|process|contact|footer).png`
  - `/tmp/md-tablet-audit-017/1024/(full|hero|proof-claim|client-marquee|services|business-diagnostic|portfolio|process|contact|footer).png`

## Overflow horizontal

Chequeo por viewport (`scrollWidth` vs `clientWidth`) con Playwright:

- `768`: sin scroll horizontal
- `820`: sin scroll horizontal
- `1024`: sin scroll horizontal

## Hallazgos

- No se detectaron textos cortados, solapamientos o roturas funcionales en `md/tablet` que ameriten cambios adicionales a los ya hechos en issues previas.
- Nota: en algunos screenshots aparece el **Dev Indicator** (círculo “N” de Next.js) superpuesto a la UI. Esto **no aplica a producción** y se ignora para QA visual.


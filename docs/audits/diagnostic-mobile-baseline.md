# Diagnostic mobile baseline (Issue 016)

Fecha: 2026-05-31  
Commit base (backup recuperable): `cada6498a05eddeed21b9a15e093fbc52d242836`

## Qué se guardó como backup

- Referencia de código: el diagnóstico actual en este commit
  - `src/components/landing/BusinessDiagnostic.tsx`
  - `src/app/globals.css` (estilos `.quiz-*` / `.result-*`)
- Nota: a partir de este punto, cualquier ajuste del Issue 016 se puede revertir volviendo a este hash o re-aplicando el contenido de esos archivos desde el commit.

## Screenshots baseline (mobile)

Generados con Playwright (headless) antes de tocar la UI del diagnóstico:

- Carpeta: `/tmp/diagnostic-mobile-baseline-016/`
- Viewports:
  - `360px`: `/tmp/diagnostic-mobile-baseline-016/360/(step-0|step-1|result|restarted).png`
  - `390px`: `/tmp/diagnostic-mobile-baseline-016/390/(step-0|step-1|result|restarted).png`
  - `430px`: `/tmp/diagnostic-mobile-baseline-016/430/(step-0|step-1|result|restarted).png`

## Observaciones baseline (rápidas)

- La interacción por cards funciona y avanza, pero el “feel” mobile todavía admite pulido en:
  - spacing vertical y densidad visual,
  - legibilidad de subtítulos,
  - estados de focus/selected,
  - jerarquía del CTA vs reinicio en el resultado.


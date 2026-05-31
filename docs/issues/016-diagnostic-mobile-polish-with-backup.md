# Issue 016 - Ajustar diagnostico mobile preservando backup

## Goal

Pulir la experiencia mobile del diagnostico manteniendo cards interactivas y dejando un backup recuperable de la version actual.

## Context

Referencia: `docs/prd.md`, Functional Requirements.

Decision cerrada: no convertir el diagnostico a selects. La experiencia actual no disgusta, por lo que antes de modificarla debe quedar una forma clara de volver atras.

## Scope

- Crear backup recuperable de la version actual antes de modificar:
  - registrar commit base o patch de referencia;
  - documentar screenshots mobile actuales;
  - guardar notas en `docs/audits/diagnostic-mobile-baseline.md`.
- Mantener cards interactivas en mobile.
- Ajustar spacing vertical, tamanos, estados `selected/focus/hover` y legibilidad.
- Verificar resultado del diagnostico en mobile.
- Verificar que el CTA de WhatsApp y el boton de reinicio no se superpongan ni pierdan jerarquia.
- Respetar `prefers-reduced-motion`.

## Out of Scope

- Convertir opciones a selects.
- Cambiar la logica de resultados.
- Cambiar el contenido del diagnostico.
- Cambiar contacto/WhatsApp salvo que un bug lo exija.

## Files Likely Affected

- `src/components/landing/BusinessDiagnostic.tsx`
- `src/components/landing/BusinessDiagnostic.spec.tsx`
- `src/app/globals.css`
- `docs/audits/diagnostic-mobile-baseline.md`

## Testing Strategy

Required.

Tests minimos:

- Render de preguntas.
- Seleccion de opcion avanza correctamente.
- Resultado aparece.
- Boton de reinicio vuelve al inicio.
- CTA de WhatsApp mantiene nombre accesible.

## Acceptance Criteria

- Existe backup documentado antes de los cambios.
- Las cards siguen siendo la interaccion principal.
- Mobile `360`, `390` y `430px` se ven correctos.
- No hay overflow horizontal.
- `npm test` pasa.
- `npm run build` pasa.

## Notes For Agent

No sobrecorregir. La version actual ya funciona razonablemente; el objetivo es mejorar legibilidad y comportamiento responsive sin perder el caracter de la seccion.

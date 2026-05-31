# Issue 003 — Conectar CTA de WhatsApp con mensaje prearmado

## Goal

Hacer que la CTA `Hablemos` abra WhatsApp con un mensaje prearmado que incluya la etapa seleccionada.

## Context

El PRD pide que la conversacion arranque con contexto real, usando el numero final de WhatsApp `+54 353 343 2075`.
La CTA no debe mandar al usuario a escribir desde cero.

## Scope

- Construir el link final de WhatsApp.
- Incluir la etapa seleccionada en el texto.
- Mantener la CTA visible dentro del bloque de diagnostico.
- Mostrar `Volver a empezar` solo despues de haber elegido una etapa.
- Permitir reiniciar el estado sin recargar.

## Out of Scope

- Cambios en el contenido de los diagnosticos.
- Cambios de layout general.
- Integraciones externas fuera de WhatsApp.

## Files Likely Affected

- `src/components/landing/BusinessDiagnostic.tsx` o equivalente
- `src/data/landing.ts`

## Testing Strategy

Required.

This issue affects the main conversion action. It needs verification that the final URL includes the selected stage and the correct WhatsApp destination.

- CTA opens WhatsApp.
- Prefilled message includes the chosen stage.
- Reset returns the UI to the initial state.
- CTA is unavailable or disabled until a stage exists, if that is the implemented pattern.

## Acceptance Criteria

- Al hacer click en `Hablemos`, se abre WhatsApp.
- El mensaje incluye la etapa elegida.
- El numero usado es el definitivo con prefijo `+54`.
- `Volver a empezar` limpia el estado y vuelve a la vista inicial.
- El reset no aparece antes de elegir una etapa.
- La estrategia de testing requerida fue aplicada.

## Notes For Agent

- Validar encoding del texto en el link.
- No dejar placeholders temporales.

# Issue 007 — Unificar WhatsApp en diagnostico y contacto

## Goal

Eliminar el placeholder de WhatsApp en la seccion Contacto y usar un unico numero final en toda la landing.

## Context

Sale de `docs/prd.md`, secciones `Audit Findings`, `Functional Requirements` y `Success Criteria`.

El diagnostico usa `543533432075`, pero Contacto muestra `Pendiente de numero final` y apunta a `https://wa.me/5490000000000`.

## Scope

- Actualizar el link de WhatsApp de Contacto al numero final.
- Reemplazar el texto visible `Pendiente de numero final` por un dato real o una etiqueta no-placeholder.
- Mantener consistencia entre diagnostico y contacto.
- Verificar que no queden placeholders visibles relacionados a contacto.

## Out of Scope

- Agregar formulario.
- Agregar backend.
- Cambiar Instagram o email salvo que sea necesario por consistencia de copy.

## Files Likely Affected

- `src/data/landing.ts`
- `src/components/landing/Contact.tsx`

## Testing Strategy

Required.

La CTA de contacto es conversion principal.

- Testear que el link de WhatsApp final renderiza con el numero correcto.
- Testear que no aparece `Pendiente de numero final`.

## Acceptance Criteria

- Contacto apunta a `https://wa.me/543533432075` o equivalente con mensaje prearmado si se decide agregarlo.
- No aparece texto placeholder en la landing.
- Diagnostico y Contacto usan el mismo destino.
- `npm test` pasa.

## Notes For Agent

Si se agrega mensaje prearmado al Contacto, debe ser corto y no duplicar el mensaje contextual del diagnostico.

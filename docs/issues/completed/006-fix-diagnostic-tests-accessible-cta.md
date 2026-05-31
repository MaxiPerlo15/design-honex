# Issue 006 — Corregir tests y nombre accesible del CTA de diagnostico

## Goal

Hacer que la suite de tests vuelva a pasar y que el CTA de WhatsApp del diagnostico tenga un nombre accesible alineado con el copy real.

## Context

Sale de `docs/prd.md`, secciones `Audit Findings`, `Functional Requirements` y `Success Criteria`.

Hoy `npm test` falla porque el test busca `/hablemos por whatsapp/i`, pero el link real expone `HABLEMOS DE ESTO por WhatsApp`.

## Scope

- Definir el copy accesible final del CTA de diagnostico.
- Actualizar el test para verificar el nombre accesible real.
- Verificar que el link siga usando el numero correcto y mensaje prearmado.
- Mantener el comportamiento actual del diagnostico sin redisenarlo.

## Out of Scope

- Cambiar el flujo del diagnostico.
- Cambiar el layout de la seccion.
- Cambiar el numero global de contacto fuera de esta verificacion.

## Files Likely Affected

- `src/components/landing/BusinessDiagnostic.tsx`
- `src/components/landing/BusinessDiagnostic.spec.tsx`

## Testing Strategy

Required.

El issue corrige una regresion de test y afecta una CTA principal de conversion.

- El test debe encontrar el CTA por su nombre accesible final.
- El href debe contener `https://wa.me/543533432075?text=`.
- El mensaje debe incluir etapa, opcion elegida y recomendacion final.

## Acceptance Criteria

- `npm test` pasa para `BusinessDiagnostic`.
- El CTA puede encontrarse por rol `link`.
- El nombre accesible no contradice el texto visible.
- No se modifica comportamiento no relacionado.

## Notes For Agent

No ocultar el problema cambiando el test a un selector fragil. La verificacion debe seguir siendo accesible.

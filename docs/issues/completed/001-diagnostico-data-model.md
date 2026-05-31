# Issue 001 — Definir data model para diagnostico de negocio

## Goal

Crear la estructura de datos para la nueva seccion interactiva `Que necesita tu negocio?`.

## Context

Este issue sale del PRD `docs/prd-diagnostico-negocio.md` y resuelve la base de contenido para la interaccion.
La seccion debe ser data-driven para no hardcodear copys ni bloques dentro del componente.

## Scope

- Definir el modelo de datos para las 4 etapas del negocio.
- Incluir el contenido de diagnostico/plan para cada etapa.
- Incluir el texto de la CTA `Hablemos`.
- Incluir el texto de `Volver a empezar`.
- Incluir el mapping necesario para construir el mensaje prearmado de WhatsApp.

## Out of Scope

- UI de la seccion.
- Integracion con la pagina principal.
- Logica de WhatsApp.
- Ajustes visuales o responsive.

## Files Likely Affected

- `src/data/landing.ts`
- `src/components/landing/*` si se necesita tipado compartido

## Testing Strategy

Not needed.

This issue is a data/model definition task. Validation happens through the downstream UI issue and final QA.

## Acceptance Criteria

- Existe una estructura de datos clara para las 4 etapas.
- Cada etapa tiene su bloque de diagnostico propio.
- El contenido puede consumirse desde React sin hardcodear textos en el componente.
- El modelo permite construir el mensaje final de WhatsApp a partir de la etapa elegida.
- No se agrega logica de UI en este issue.

## Notes For Agent

- Respetar el copy del cliente.
- Mantener el enfoque simple y editable.

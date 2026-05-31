# PRD - Seccion Interactiva "Que necesita tu negocio"

**Producto/Feature:** Seccion interactiva de diagnostico para la landing  
**Estado:** Draft  
**Autor:** Codex  
**Stakeholders:** Cliente, desarrollo frontend, diseño  
**Fecha de creacion:** 2026-05-28  
**Ultima actualizacion:** 2026-05-28  
**Version:** 1.0

## Executive Summary

**One-liner:** Agregar una seccion interactiva previa a `Proceso` que permita al usuario seleccionar la etapa de su negocio y recibir un diagnostico visual con una CTA directa a WhatsApp.

**Overview:**  
La landing actual ya presenta servicios, portfolio, proceso y contacto. Esta iniciativa suma una nueva seccion de diagnostico rapido que funciona como puente entre el mensaje de valor y la conversion final. El usuario selecciona una de cuatro etapas del negocio y la UI responde con un bloque de recomendaciones/plan de accion especifico para esa etapa.

La experiencia debe mantenerse fiel al design system actual de la pagina: misma paleta, tipografia, tono y estilo general. La referencia visual e interactiva vendra de un archivo `.html` provisto por el cliente, pero la implementacion debe traducirse a React con una estructura data-driven para facilitar mantenimiento futuro sin tocar copys manualmente.

**Quick Facts:**
- **Target Users:** Potenciales clientes que visitan la landing y quieren entender rapidamente si el servicio aplica a su etapa.
- **Problem Solved:** Reduce friccion en la conversion al transformar una duda general en un diagnostico guiado con CTA contextual.
- **Key Metric:** Clics a WhatsApp desde la seccion de diagnostico.
- **Target Launch:** Fase siguiente de iteracion de la landing.

## Problem Statement

### The Problem
La landing actual comunica servicios y credenciales, pero no ofrece un punto intermedio de autodiagnostico que ayude al usuario a ubicarse segun su etapa de negocio antes de pasar a la conversacion directa.

### Current State
Hoy la conversion depende principalmente de ir a `Contacto` o hacer clic en la CTA general. Eso funciona, pero exige que el usuario ya tenga bastante claridad sobre lo que necesita.

### Impact
**User Impact:**
- El usuario debe decidir si contactar sin una guia intermedia.
- Falta una experiencia que traduzca necesidades difusas en una recomendacion concreta.

**Business Impact:**
- Menor pre-calificacion del lead antes de WhatsApp.
- Menos contexto en la conversacion inicial con el cliente.

### Why Now?
La landing ya tiene una base visual y narrativa consistente. Esta seccion agrega una capa de conversion mas util sin introducir backend, autenticacion ni complejidad innecesaria.

## Goals & Objectives

### Business Goals
1. **Aumentar conversion a WhatsApp:** ofrecer una CTA mas contextual y accionable.
2. **Mejorar la calificacion del lead:** incluir en el mensaje la etapa seleccionada para dar contexto inmediato.
3. **Sumar valor percibido:** presentar un diagnostico que se sienta util y no solo promocional.

### User Goals
1. **Entender en que etapa esta su negocio.**
2. **Ver rapidamente que acciones se recomiendan para esa etapa.**
3. **Contactar por WhatsApp con el contexto ya prearmado.**

### Non-Goals
- No crear un wizard de multiples pasos.
- No cambiar los copys del cliente.
- No agregar backend, CMS, autenticacion ni base de datos.
- No salir del sistema visual actual de la pagina.

## User Persona

### Primary Persona: Dueño/a de negocio o emprendedor/a

**Behaviors:**
- Llega desde redes, recomendacion o trafico directo.
- Busca claridad rapida sobre si el servicio encaja con su momento actual.
- Prefiere un camino corto hacia el contacto.

**Needs & Motivations:**
- Quiere saber que hacer con su negocio sin perder tiempo.
- Busca confianza, criterio y claridad en la propuesta.

**Pain Points:**
- No sabe si su negocio esta listo para invertir en gestion/diseño/estrategia.
- Tiene dudas sobre cual seria el primer paso.

## User Stories & Requirements

### Epic: Diagnostico interactivo de negocio

#### Must-Have Stories (P0)

##### Story 1: Seleccion de etapa

**User Story:**
```text
As a potential client,
I want to select the current stage of my business,
So that I can see a tailored diagnosis or action plan.
```

**Acceptance Criteria:**
- [ ] Given the section is visible, when the user clicks one of the four stage options, then the corresponding diagnostic block is displayed.
- [ ] Given a stage is selected, when the user changes the selection, then the UI updates to show the new stage content.
- [ ] Given no stage is selected, then the section only shows the available options and the intro copy.

**Priority:** Must Have (P0)
**Dependencies:** Data-driven content structure

##### Story 2: CTA a WhatsApp con contexto

**User Story:**
```text
As a potential client,
I want to open WhatsApp with a prefilled message that includes my selected stage,
So that I can contact the designer with context already prepared.
```

**Acceptance Criteria:**
- [ ] Given a stage was selected, when the user clicks `Hablemos`, then WhatsApp opens with a prefilled message.
- [ ] The message includes the selected stage name.
- [ ] The message uses the final WhatsApp number with country code `+54`.

**Priority:** Must Have (P0)

##### Story 3: Reinicio de flujo

**User Story:**
```text
As a user reviewing different options,
I want to restart the diagnostic flow,
So that I can compare another business stage without refreshing the page.
```

**Acceptance Criteria:**
- [ ] Given a stage was selected, then a `Volver a empezar` action is visible.
- [ ] Given the user clicks `Volver a empezar`, then the selection is cleared and the initial options view returns.
- [ ] The reset action is not shown before any stage is selected.

**Priority:** Must Have (P0)

#### Functional Requirements

| Req ID | Description | Priority | Status |
|---|---|---:|---|
| FR-001 | La seccion debe insertarse antes de `Proceso`. | Must Have | Open |
| FR-002 | Debe existir un item de navegacion propio para la seccion. | Must Have | Open |
| FR-003 | Debe mostrar cuatro opciones de etapa: `Recién arrancando`, `Ya estoy rodando`, `Negocio establecido`, `Quiero escalar`. | Must Have | Open |
| FR-004 | Cada opcion debe disparar un bloque de diagnostico propio. | Must Have | Open |
| FR-005 | El CTA principal debe abrir WhatsApp con mensaje prearmado. | Must Have | Open |
| FR-006 | Debe existir una accion `Volver a empezar` visible solo luego de seleccionar una etapa. | Must Have | Open |
| FR-007 | La UI debe mantenerse dentro del design system actual. | Must Have | Open |
| FR-008 | La implementacion debe ser data-driven para facilitar mantenimiento de copys y bloques. | Must Have | Open |

#### Non-Functional Requirements

| Req ID | Category | Description | Target |
|---|---|---|---|
| NFR-001 | Responsive | La seccion debe funcionar en mobile y desktop sin perder legibilidad ni jerarquia. | Pass en ambos breakpoints |
| NFR-002 | Accessibility | Las opciones y CTAs deben ser navegables por teclado y tener estados claros. | AA practicable |
| NFR-003 | Performance | No introducir dependencias pesadas ni afectar de forma perceptible el render de la landing. | Mantener performance de landing |
| NFR-004 | Maintainability | El contenido debe vivir en estructura de datos, no hardcodeado dentro del componente. | 100% data-driven |

## Success Metrics

### Primary Metric

**Metric:** Clics en WhatsApp desde la seccion de diagnostico  
**Definition:** Cantidad de usuarios que seleccionan una etapa y activan la CTA `Hablemos`  
**Current Baseline:** 0, porque la seccion aun no existe  
**Target:** Establecer una linea base inmediata tras el lanzamiento y optimizar iterativamente a partir de esa medicion  

### Secondary Metrics

| Metric | Current | Target | Timeframe |
|---|---:|---:|---|
| Seleccion de etapa | 0 | Medible tras lanzamiento | Primeras 2 semanas |
| Uso de `Volver a empezar` | 0 | Medible tras lanzamiento | Primeras 2 semanas |
| CTR de la seccion hacia WhatsApp | 0 | Medible tras lanzamiento | Primeras 2 semanas |
| Consistencia mobile/desktop | N/A | Sin regresiones visuales | Antes de release |

## Scope

### In Scope
- Nueva seccion interactiva previa a `Proceso`.
- Cuatro etapas de negocio con contenido propio.
- CTA `Hablemos` con mensaje prearmado para WhatsApp.
- Accion `Volver a empezar`.
- Item de navegacion propio.
- Implementacion en React siguiendo el sistema visual existente.
- Estructura data-driven para stage data, diagnosticos y CTA copy.

### Out of Scope
- Backend.
- CMS.
- Autenticacion.
- Base de datos.
- Automatizaciones externas.
- Reescritura completa del copy del cliente.
- Redisenar el resto de la landing para acompanar esta seccion.

## Technical Considerations

- La seccion debe implementarse como componente React reutilizable dentro del flujo actual de `src/app/page.tsx`.
- El contenido debe definirse en una estructura de datos similar a `src/data/landing.ts`.
- La CTA final debe formar un enlace a WhatsApp con el numero `+54 353 343 2075`.
- El mensaje debe incluir la etapa seleccionada para dar contexto al contacto.
- La referencia visual provista por el cliente en `.html` debe usarse como guia de estructura e interaccion, no como copia visual literal si entra en conflicto con el design system.

## Design & UX Requirements

- Respetar paleta, tipografias y tono existentes.
- Mantener coherencia con el layout de secciones actuales.
- La seccion debe sentirse interactiva, pero no fuera de sistema.
- En mobile, las cuatro opciones deben seguir visibles despues de seleccionar una etapa.
- El diagnostico debe aparecer debajo de las opciones en mobile.
- El CTA final y `Volver a empezar` deben tener jerarquia visual clara.
- El bloque de diagnostico de cada etapa puede variar de forma significativa, siempre dentro de la estetica general de la landing.

## Timeline & Milestones

1. Recibir el archivo `.html` de referencia.
2. Extraer estructura, copy y comportamiento interactivo.
3. Traducir el flujo a un componente React data-driven.
4. Integrar la seccion antes de `Proceso` y agregar su item de navegacion.
5. Validar responsive, accesibilidad y CTA de WhatsApp.

## Risks & Mitigation

- **Riesgo:** El `.html` puede tener elementos visuales que choquen con el sistema actual.  
  **Mitigacion:** Priorizar estructura e interaccion, no replica visual literal.

- **Riesgo:** El copy final puede venir definido por el cliente y cambiar.  
  **Mitigacion:** Mantener toda la informacion en datos separados del componente.

- **Riesgo:** La CTA a WhatsApp puede quedar mal formada.  
  **Mitigacion:** Normalizar el numero final y validar el link antes de release.

## Dependencies & Assumptions

### Dependencies
- Archivo `.html` de referencia provisto por el cliente.
- Confirmacion final del copy por etapa dentro del material del cliente.

### Assumptions
- El cliente quiere respetar sus copys actuales.
- La implementacion debe conservar el design system de la pagina.
- La seccion actua como puente de conversion antes del bloque `Proceso`.

## Open Questions

1. Confirmar el copy exacto de cada bloque de diagnostico cuando llegue el `.html`.
2. Validar si la CTA a WhatsApp debe incluir solo la etapa o tambien un resumen de la recomendacion mostrada.
3. Confirmar si el item de navegacion debe llamarse `Diagnostico` o un nombre equivalente definido por el cliente.


# Issue 015 - Implementar navegacion hamburger mobile

## Goal

Reemplazar la navegacion mobile actual por un menu hamburger accesible y completo.

## Context

Referencia: `docs/prd.md`, Functional Requirements.

El `Nav` actual muestra links recortados en mobile. Para una landing responsive real, mobile debe tener un menu completo.

## Scope

- Agregar boton hamburger visible en mobile.
- Mostrar todos los anchors de navegacion dentro del menu.
- Mantener la CTA destacada.
- Cerrar el menu al clickear un link.
- Cerrar el menu con `Esc`.
- Bloquear scroll del body mientras el menu esta abierto.
- Mantener foco visible y navegacion por teclado.
- Respetar el estilo actual de marca: negro, azul de marca y verde neon.
- Mantener desktop sin cambios funcionales.

## Out of Scope

- Cambiar la estructura de secciones.
- Cambiar labels de navegacion.
- Agregar dependencias nuevas salvo justificacion.
- Implementar SEO.

## Files Likely Affected

- `src/components/landing/Nav.tsx`
- `src/components/landing/Nav.spec.tsx`
- `src/app/globals.css`

## Testing Strategy

Required.

Tests minimos:

- El boton hamburger renderiza en mobile.
- El menu abre y cierra.
- Los links del menu estan presentes.
- Click en link cierra el menu.
- `Escape` cierra el menu.

## Acceptance Criteria

- La navegacion mobile muestra todos los links.
- La CTA sigue siendo clara.
- El menu es usable con teclado.
- No hay scroll horizontal.
- Desktop mantiene el comportamiento actual.
- `npm test` pasa.
- `npm run build` pasa.

## Notes For Agent

Preferir implementacion simple con estado local en `Nav`. No introducir librerias de menu si no son necesarias.

# Final QA + Lighthouse (Issue 018)

Fecha: 2026-05-31

## Setup usado

- Build: `npm run build`
- Server (prod): `npm run start -- -p 3003`

## Lighthouse (mobile)

Comandos (corrida separada por output):

```bash
npx lighthouse http://localhost:3003 --form-factor=mobile --only-categories=performance,accessibility,best-practices,seo \
  --output=json --output-path=/tmp/lighthouse-018/lighthouse-mobile.json --quiet --chrome-flags='--headless --no-sandbox --disable-gpu'

npx lighthouse http://localhost:3003 --form-factor=mobile --only-categories=performance,accessibility,best-practices,seo \
  --output=html --output-path=/tmp/lighthouse-018/lighthouse-mobile.html --quiet --chrome-flags='--headless --no-sandbox --disable-gpu'
```

Resultados (Lighthouse 13.3.0):

- Performance: **91**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**

Artifacts:

- `/tmp/lighthouse-018/lighthouse-mobile.json`
- `/tmp/lighthouse-018/lighthouse-mobile.html`

## QA responsive (viewports)

Viewports auditados:

- 360, 390, 430, 768, 820, 1024, 1366, 1440px

Checks cubiertos:

- navegación (menú mobile y links internos);
- CTAs (hero y CTA del menú);
- links externos (`target="_blank"` + `rel`);
- foco visible (Tab);
- ausencia de overflow horizontal;
- legibilidad;
- `prefers-reduced-motion`.

Automatización usada (Playwright):

```bash
/bin/zsh -lc 'cd /Users/maxiperlo/.agents/skills/playwright-skill && \
  NODE_PATH=/Users/maxiperlo/.agents/skills/playwright-skill/node_modules \
  URL="http://localhost:3003" OUT_DIR="/tmp/qa-018" \
  node /tmp/playwright-final-qa-018.js'
```

Evidence:

- Screenshots: `/tmp/qa-018/<viewport>/*.png`
- Resultados: `/tmp/qa-018/results.json`

Resultado: OK (sin overflow horizontal, foco visible, CTA del menú en viewport cuando aplica).

## Fixes aplicados

- A11y: se eliminó `aria-label` inválido de `.quiz-steps-bar` y se marcó como decorativo con `aria-hidden="true"`.
- Contraste: se ajustó el azul de acento en textos sobre fondo `#0a0a0a` para cumplir WCAG (hero y contacto).
- Contraste: se subió opacidad de texto en `ClientMarquee` para cumplir contraste en tipografía pequeña.
- UX: se reestructuró el drawer mobile para que el footer (CTA + hint) quede siempre visible y el listado scrollee.

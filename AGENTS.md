# AGENTS.md

## Project Overview

This project is a frontend-only landing page for a graphic designer.

The primary objective is to present services, showcase work, communicate professionalism, and generate client inquiries.

The project prioritizes:

* Visual quality.
* Strong UX.
* Responsive design.
* Fast iteration.
* Clean code.
* Fast deployment.

This is not a SaaS application.

## Tech Stack

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

Unless explicitly requested:

* Do not add a backend.
* Do not add authentication.
* Do not add a database.
* Do not add CMS integrations.
* Do not add unnecessary dependencies.

## Development Philosophy

Prefer simple solutions.

Avoid premature abstraction.

Build only what is required for the current scope.

Favor clarity over cleverness.

## Workflow

When requirements are unclear:

→ Use the `grill-me` skill.

When requirements become clear:

→ Use the `write-prd` skill.

When a PRD exists:

→ Use the `prd-to-issues` skill.

Implementation should always follow an approved PRD and issue whenever possible.

## Smart Context Rule

Avoid loading the entire repository.

Read only:

* The current issue.
* Relevant PRD sections.
* Relevant components.
* Relevant styles.
* Files directly related to the task.

Do not perform broad repository analysis unless explicitly requested.

## UI Standards

All UI must be:

* Mobile-first.
* Accessible.
* Responsive.
* Consistent.
* Production-ready.

Always verify:

* Typography hierarchy.
* Spacing consistency.
* CTA visibility.
* Mobile usability.
* Desktop usability.
* Visual balance.

## Component Guidelines

Prefer small, focused components.

Avoid large monolithic components.

Extract reusable UI only when reuse is likely.

Do not create abstractions for hypothetical future requirements.

## Styling Guidelines

Use Tailwind CSS.

Prefer design consistency over visual novelty.

Avoid excessive animations.

Animations should support the experience, not distract from it.

## Code Quality

Use strict TypeScript.

Avoid `any`.

Keep component APIs simple.

Remove dead code.

Avoid duplicated logic.

Follow existing project conventions before introducing new patterns.

## Definition of Done

A task is complete when:

* Requirements are satisfied.
* The UI works on mobile.
* The UI works on desktop.
* TypeScript errors are resolved.
* No unrelated files were modified.
* The implementation matches the issue scope.
* The result is visually coherent with the rest of the landing page.

## Testing Philosophy

Use pragmatic test-first development.

Before implementing logic-heavy or behavior-heavy work, define the expected behavior first.

Use tests for:

- Data mapping.
- Utility functions.
- Form validation.
- Navigation behavior.
- Conditional rendering.
- Accessibility-critical behavior.
- Component rendering when useful.

Do not over-test purely visual styling.

For visual sections, prefer lightweight render tests and manual visual QA.

Each implementation issue should define whether tests are required, optional, or unnecessary.
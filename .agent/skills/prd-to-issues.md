# Skill: prd-to-issues

## Purpose

Transform a PRD into small implementation issues.

Each issue should be:

* Focused
* Independent
* Reviewable
* Small enough for a single implementation session

The goal is not task tracking.

The goal is creating implementation slices that an AI agent can execute without ambiguity.

---

## Preconditions

A valid PRD must exist.

Required file:

```txt
docs/prd.md
```

If no PRD exists:

STOP.

Run `write-prd` first.

---

## Output Location

Create issues inside:

```txt
docs/issues/
```

---

## Core Principle

Prefer vertical slices.

A vertical slice delivers visible user value.

A slice should ideally include:

* UI
* Logic
* Styling
* Integration

for that specific feature.

Avoid splitting work by technical layer.

---

## Good Examples

Good:

* Build Hero section
* Build Services section
* Build Portfolio section
* Build Contact CTA section
* Implement mobile navigation

Bad:

* Create components
* Add styling
* Build frontend
* Create hooks
* Refactor project

---

## Issue Size Rule

An issue should be completable in:

* One focused implementation session
* One agent execution cycle

If an issue feels large:

Split it further.

---

# Issue XXX — Title

## Goal

Describe the outcome.

## Context

Reference relevant PRD sections.

## Scope

List everything that must be implemented.

## Out of Scope

List what should NOT be modified.

## Files Likely Affected

List likely files.

## Testing Strategy

Choose one:

- Required
- Optional
- Not needed

Explain why.

If tests are required, define them before implementation.

Examples:

- Component renders required content.
- CTA link points to the expected destination.
- Portfolio items render from data.
- Contact form validates required fields.
- Navigation links scroll to correct sections.

## Acceptance Criteria

- Requirements are satisfied.
- UI works on mobile.
- UI works on desktop.
- Testing strategy was followed.
- Required tests pass.
- No unrelated files were modified.

## Notes For Agent

Additional implementation guidance.

Include:

* Constraints
* Existing patterns
* Design considerations

---

## Landing Page Default Breakdown

For a frontend-only landing page, prefer:

001-project-foundation.md

Goal:
Establish project structure, fonts, metadata, global styles, and design tokens.

---

002-hero-section.md

Goal:
Build hero section including CTA and responsive layout.

---

003-services-section.md

Goal:
Build services presentation section.

---

004-portfolio-section.md

Goal:
Build portfolio showcase section.

---

005-about-section.md

Goal:
Build about / credibility section.

---

006-process-section.md

Goal:
Explain workflow and process.

---

007-contact-section.md

Goal:
Build final conversion area.

---

008-footer-section.md

Goal:
Build footer and supporting navigation.

---

009-responsive-polish.md

Goal:
Review and improve all responsive behavior.

---

010-final-qa.md

Goal:
Perform final review and consistency checks.

---

## Generation Rules

Each issue must:

* Have a clear outcome.
* Reference the PRD.
* Avoid overlap with other issues.
* Be independently reviewable.

Issues should be generated in implementation order.

---

## Completion

After generating all issues:

Provide a recommended execution sequence.

Start with foundation issues.

Finish with QA issues.

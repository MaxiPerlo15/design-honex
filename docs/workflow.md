# Implementation Workflow

## Purpose

Define the mandatory implementation process for all issues.

Follow this workflow before modifying code.

---

## Step 1 — Understand The Task

Read:

* AGENTS.md
* docs/prd.md
* Current issue

Do not start implementation before understanding the issue.

If requirements are unclear:

STOP.

Use grill-me.

---

## Step 2 — Define Scope

Identify:

* What must be built.
* What must not be modified.
* Relevant files.

Stay inside the issue scope.

Avoid unrelated changes.

---

## Step 3 — Review Existing Code

Inspect existing patterns before creating new ones.

Prefer consistency with the current codebase.

Avoid introducing new patterns without justification.

---

## Step 4 — Define Testing Strategy

Determine:

* Required
* Optional
* Not Needed

Follow the testing strategy defined in the issue.

For behavior-driven work:

Prefer test-first implementation.

For visual-only work:

Use lightweight tests and manual QA.

---

## Step 5 — Implement

Build only what is required.

Prefer:

* Small components
* Clear naming
* Reusable structures

Avoid overengineering.

---

## Step 6 — Verify

Check:

* TypeScript errors
* Lint errors
* Responsive behavior
* Acceptance criteria
* Testing requirements

---

## Step 7 — Review Output

Confirm:

* Issue scope was respected.
* No unrelated files changed.
* Implementation matches PRD requirements.

---

## Completion

A task is complete only when:

* Acceptance criteria are satisfied.
* Required tests pass.
* UI is responsive.
* Scope was respected.

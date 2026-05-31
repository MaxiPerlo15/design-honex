# Skill: write-prd

## Purpose

Transform a validated Shared Design Concept into a concise Product Requirements Document (PRD).

The PRD must provide enough detail for implementation planning while remaining easy to read and maintain.

The PRD becomes the source of truth for the project.

Do not create a PRD if requirements are still ambiguous.

If necessary, run `grill-me` first.

---

## Preconditions

Before creating a PRD, verify that the following information is known:

* Project purpose
* Target audience
* Brand positioning
* Visual direction
* Required sections
* Primary CTA
* Technical constraints

If any of these are unclear:

STOP.

Run `grill-me`.

---

## Output Location

Create or update:

```txt
docs/prd.md
```

---

## Writing Principles

The PRD must be:

* Concise
* Actionable
* Unambiguous
* Implementation-oriented

Avoid:

* Marketing language
* Generic statements
* Vague design terminology
* Unnecessary technical details

---

## PRD Structure

# PRD

## Project Overview

Provide a short description of the website.

Explain:

* What it is.
* Who it is for.
* Why it exists.

---

## Business Goal

Define the primary business objective.

Examples:

* Generate leads.
* Showcase professional work.
* Increase trust and credibility.
* Encourage visitors to contact the client.

Only one primary goal should exist.

---

## Target Audience

Describe the ideal visitor.

Include:

* Client type
* Industry
* Experience level
* Relevant demographics if known

---

## Brand Positioning

Describe how the brand should be perceived.

Examples:

* Premium
* Modern
* Creative
* Elegant
* Minimalist
* Professional

---

## Visual Direction

Define the visual language.

Include:

* Color direction
* Typography direction
* Layout style
* Imagery style
* Motion philosophy

Examples:

* Editorial
* Minimalist
* Bold
* Premium
* Modern corporate
* Creative portfolio

---

## Information Architecture

List all required sections in order.

Example:

1. Hero
2. Services
3. Portfolio
4. About
5. Process
6. Testimonials
7. Contact CTA
8. Footer

---

## Functional Requirements

List all required functionality.

Examples:

* Responsive navigation
* Smooth scroll navigation
* Contact CTA
* Portfolio gallery
* WhatsApp integration

Use bullet points.

Keep requirements testable.

---

## Non-Functional Requirements

Define quality expectations.

Examples:

* Mobile-first design
* Fast loading
* Responsive layout
* Semantic HTML
* Accessibility best practices
* SEO-friendly structure

---

## Technical Constraints

List project limitations.

Examples:

* Frontend only
* No backend
* No CMS
* No authentication
* No database

---

## Out of Scope

Explicitly define what will NOT be built.

Examples:

* Blog
* Dashboard
* User accounts
* Payment processing
* Content management system

Anything not listed in the PRD should be considered out of scope.

---

## Success Criteria

The project is considered complete when:

* All required sections exist.
* Primary CTA is functional.
* Mobile and desktop layouts are polished.
* Design matches the defined visual direction.
* All functional requirements are satisfied.
* No out-of-scope functionality has been added.

---

## Final Step

After generating the PRD:

Recommend running:

`prd-to-issues`

to create implementation slices.

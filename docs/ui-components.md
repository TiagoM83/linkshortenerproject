# UI Components Guidelines

## Overview

All UI elements in this application must use shadcn/ui components.

## Required Rules

- Use components generated from shadcn/ui for all interactive and visual UI.
- Do not create custom UI components when an equivalent shadcn/ui component exists.
- Prefer composition of existing shadcn/ui primitives over building custom wrappers.
- Keep styling changes within the expected shadcn patterns and project Tailwind tokens.

## Forbidden

- Creating bespoke buttons, inputs, dialogs, dropdowns, tabs, cards, toasts, modals, or form controls.
- Introducing other UI component libraries for core UI elements.
- Re-implementing behavior already provided by shadcn/ui components.

## Usage Expectations

- Import shared components from `components/ui/*`.
- Use shadcn/ui Dialog or Clerk modal APIs for authentication and modal flows.
- Keep variants and sizes consistent with existing shadcn/ui usage in the project.
- Extend UI by adding new shadcn/ui components via the official generator pattern, not handcrafted equivalents.

## Review Checklist

Before merging UI changes, confirm:

- Every new UI element is based on shadcn/ui.
- No custom replacement for a standard shadcn/ui component was introduced.
- Visual and interaction behavior is consistent with existing shadcn/ui patterns.
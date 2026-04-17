# Design System

## Overview

A focused, minimal dark interface for a family productivity tool.
Clean structure, low visual noise, and high clarity for everyday actions.
Dark mode is the default visual baseline for MVP screens.

## Colors

- **Primary** (`--primary`: oklch(0.459 0.187 3.815), `bg-primary`): Primary CTAs, active states, and high-priority actions.
- **Secondary** (`--secondary`: oklch(0.274 0.006 286.033), `bg-secondary`): Supporting UI, secondary actions, and low-emphasis surfaces.
- **Surface** (`--background`: oklch(0.148 0.004 228.8), `--card`/`--popover`: oklch(0.218 0.008 223.9)): Page background and elevated containers.
- **On-surface** (`--foreground`: oklch(0.987 0.002 197.1), `text-foreground`): Primary text and icons on dark backgrounds.
- **Error** (`--destructive`: oklch(0.704 0.191 22.216), `text-destructive`/`bg-destructive`): Validation errors and destructive actions.

Color application rules:

- Use semantic utilities only (`bg-background`, `text-foreground`, `border-border`) instead of hardcoded values.
- Use paired foreground tokens with filled backgrounds (`primary` + `primary-foreground`, `secondary` + `secondary-foreground`).
- Keep focus indication visible through `ring` token (`focus-visible:ring-ring/50`).

## Typography

- **Headlines**: Manrope Variable, medium weight (`font-medium`), compact leading for section and dialog titles.
- **Body**: Manrope Variable, regular weight, 14-16px range (`text-sm` to `text-base`) for readable daily use.
- **Labels**: Manrope Variable, medium weight, compact sizes (`text-xs`, `text-sm`) for controls and metadata.

Type usage rules:

- Use `text-base` for primary reading blocks and form input text.
- Use `text-sm` for descriptions, helper text, and most UI copy.
- Use `text-xs` only for dense labels and compact meta content.

## Components

- **Buttons**: Rounded corners with shared radius tokens (base 10px), strong primary fill for key actions, outline/ghost/secondary for lower emphasis.
- **Button Group**: Supports horizontal and vertical grouping, merges adjacent borders/radius, and keeps keyboard focus visible on grouped controls.
- **Inputs**: 1px semantic border (`border-input`), subtle dark fill (`dark:bg-input/30`), clear focus ring (`ring-3`) and explicit invalid state via `aria-invalid`.
- **Textarea**: Matches input style and states, with content-aware height (`field-sizing-content`) for longer text entry.
- **Card**: Main surface container uses `bg-card` and subtle ring separation, with structured sub-slots (header, content, footer, action).
- **Item**: Dense information row pattern with `default`, `outline`, and `muted` variants plus `default`, `sm`, and `xs` sizing.
- **Field**: Form composition layer for label, description, and error messaging; supports vertical, horizontal, and responsive orientations.
- **Switch**: Compact toggle with `default` and `sm` sizes, explicit checked/unchecked visuals, and full focus/invalid states.
- **Tabs**: Supports horizontal and vertical orientations with `default` and `line` list variants and clear active-state contrast.
- **Pagination**: Navigation pattern built from button variants, including active page state and previous/next/ellipsis affordances.
- **Alert Dialog**: Confirmation container with overlay, size variants, and separated action/cancel slots for destructive or sensitive decisions.

Size, spacing, and radius contract:

- **Control sizes**: `sm` = 28px, `md` = 32px, `lg` = 36px.
- **Default size mapping**: `default` is equivalent to `md` (32px) unless a component defines otherwise.
- **Compact size**: `xs` = 24px for icon or dense controls.

Padding scale (design token intent):

- `px-2` = 8px, `px-2.5` = 10px, `px-3` = 12px, `px-4` = 16px.
- `py-1` = 4px, `py-1.5` = 6px, `py-2` = 8px, `py-2.5` = 10px, `py-3` = 12px, `py-4` = 16px.

Margin and gap scale (layout rhythm):

- `m/gap-1` = 4px, `m/gap-1.5` = 6px, `m/gap-2` = 8px, `m/gap-2.5` = 10px.
- `m/gap-3` = 12px, `m/gap-4` = 16px, `m/gap-5` = 20px, `m/gap-6` = 24px.

Radius scale:

- `--radius-sm` = 6px, `--radius-md` = 8px, `--radius` (base) = 10px.
- `--radius-xl` = 14px, `--radius-2xl` = 18px, `--radius-3xl` = 22px, `--radius-4xl` = 26px.
- Component naming guideline: `rounded-sm` -> 6px, `rounded-md` -> 8px, `rounded-lg` -> 10px, `rounded-xl` -> 14px.

Core state behavior:

- Interactive controls must support `default`, `hover`, `focus-visible`, `disabled`, and `invalid` states.
- Error state must be communicated by both color and helper text (not color-only).
- Focus ring must remain visible across all interactive variants.

## Do's and Don'ts

- Do use the primary color only for the most important action in a view.
- Do keep corner radius consistent with the shared radius scale.
- Do preserve strong text contrast on dark surfaces (target at least 4.5:1 for body text where possible).
- Do keep focus rings visible on all interactive controls.
- Do use semantic tokens and utilities instead of introducing one-off colors.
- Don't mix unrelated radius shapes in the same screen.
- Don't use destructive color for neutral states or informational messages.
- Don't replace surface contrast with strong shadows.
- Don't hide validation states behind subtle styling only; keep error states explicit.


---
name: Hero Section Implementation
overview: Clean up the Next.js homepage and replace it with a Hero component featuring a title, subtitle, and contact button, all styled with Tailwind CSS.
todos:
  - id: clean-globals-css
    content: Clean up globals.css - remove custom styles and add Tailwind v4 import directive
    status: pending
  - id: create-components-dir
    content: Create app/components directory for component organization
    status: pending
  - id: build-hero-component
    content: Create Hero.tsx component with title, subtitle, and contact button using Tailwind CSS
    status: pending
    dependencies:
      - create-components-dir
  - id: update-page-tsx
    content: Replace page.tsx content with Hero component usage
    status: pending
    dependencies:
      - build-hero-component
---

# Hero Section Implementation Plan

## Overview

Replace the current homepage with a clean Hero section component, remove custom CSS in favor of Tailwind CSS utility classes, and set up proper Tailwind v4 configuration.

## Current State

- [app/page.tsx](app/page.tsx) contains a simple card layout with custom CSS classes
- [app/globals.css](app/globals.css) has custom styles that need to be cleaned up
- Tailwind CSS v4 is installed and configured via `@tailwindcss/postcss`
- No components directory exists yet

## Implementation Steps

### 1. Clean up `globals.css`

- Remove all custom CSS styles (`.container`, `.card`, `.avatar`, `h1`, `.subtitle`, `.desc`, `body` background)
- Add Tailwind v4 import directive: `@import "tailwindcss";`
- Optionally keep minimal base styles if needed (e.g., `body` margin/padding reset if not handled by Tailwind)

### 2. Create components directory structure

- Create `app/components/` directory
- Create `app/components/Hero.tsx` component file

### 3. Build Hero component

Create a new `Hero` component in `app/components/Hero.tsx` with:

- **Props**: Accept optional `name` (string) and `role` (string) props with defaults
- **Title**: Display the name (e.g., "Gilad Bahar") as the main heading
- **Subtitle**: Display the role (e.g., "Computer Science Student & Full-Stack Developer") as secondary text
- **Contact Button**: A styled button with hover effects
- **Styling**: Use Tailwind CSS utility classes for:
- Centered layout (flexbox/grid)
- Responsive typography
- Spacing and padding
- Button styling with hover states
- Dark theme styling (matching current aesthetic if desired)

### 4. Update `page.tsx`

- Import the `Hero` component
- Replace current JSX with `<Hero />` component
- Remove all custom className references
- Pass name and role as props (or use defaults)

### 5. Optional: Update metadata in `layout.tsx`

- Update page title and description to reflect personal portfolio

## Files to Modify

1. **[app/globals.css](app/globals.css)** - Clean up and add Tailwind import
2. **[app/page.tsx](app/page.tsx)** - Replace with Hero component usage
3. **[app/components/Hero.tsx](app/components/Hero.tsx)** - New component (create)

## Design Considerations

- Hero section should be vertically centered on the page
- Use a modern, clean design with appropriate spacing
- Contact button should be prominent and interactive
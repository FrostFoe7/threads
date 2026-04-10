<!-- BEGIN:nextjs-agent-rules -->

# ⚠️ This is NOT the Next.js you know

This project uses **Next.js 16 + React 19** with breaking changes.

👉 ALWAYS read:
`node_modules/next/dist/docs/`

---

# 🧠 CORE RULES (NON-NEGOTIABLE)

## Skills System (MANDATORY)

Follow:
`@.agents/skills/`

Priority:

1. next-upgrade
2. next-best-practices
3. vercel-react-best-practices
4. vercel-composition-patterns
5. react-components
6. ui-ux-pro-max
7. tailwind-design-system

❌ Do NOT invent patterns  
✅ Skills override assumptions

---

# 🏗️ PROJECT ARCHITECTURE (STRICT)

## 1. `@/src/app/api/` → Route Handlers

- HTTP layer only
- Validate input
- Return `Response`

❌ No UI / hooks / heavy logic

---

## 2. `@/src/app/actions/` → Server Actions

- `"use server"`
- Mutations only
- Serializable return values

---

## 3. `@/src/hooks/` → Client Hooks

- `"use client"`
- State, effects, browser APIs

❌ No server logic

---

## 4. `@/src/components/features/` → UI Components ONLY

### Purpose:

- Feature-based UI components

### Rules:

- ONLY components (presentation + light logic)
- NO business logic
- NO server logic
- NO data layer

### Example:

features/ auth/ login-form.tsx signup-form.tsx

---

## 5. Global Types → `@/types/types.ts`

- ALL shared types go here
- Single source of truth

```ts
export type User = {
  id: string
  email: string
}
6. Shared Utils → @/lib/utils
Pure helper functions
No side effects
TypeScript
export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
🎨 UI / UX (HIGH PRIORITY)
Design System
MUST use shadcn/ui
ONLY from: @/components/ui/
Tailwind CSS v4
📱 Mobile-First (MANDATORY)
Start from mobile (320px+)
Scale with breakpoints
Touch-friendly (≥44px targets)
Visual Quality
Clean, modern, minimal
Consistent spacing (4/8/16/24)
Strong typography hierarchy
Subtle shadows, rounded edges
UX Principles
Simple > complex
Clear navigation
Accessible by default
Feedback for all actions
⚛️ COMPONENT ARCHITECTURE
No inline components
Use composition patterns
Avoid boolean props → use variants
Strongly typed props
🔥 SERVER vs CLIENT
Default: Server Components
Use "use client" ONLY when needed.
⚡ PERFORMANCE
Minimize client JS
Prefer server fetching
Parallel data fetching
Avoid re-renders
🧩 TYPESCRIPT (STRICT)
Rules:
❌ NO any
Use explicit types
Keep types centralized
Props Example
TypeScript
interface ButtonProps {
  label: string
  onClick: () => void
}
❌ ANTI-PATTERNS
Mixing logic inside components
Feature folders becoming “mini backends”
Duplicate types
Client-side fetching when avoidable
Custom UI instead of shadcn
🎯 DEVELOPMENT MINDSET
Server-first
Clean separation:
UI (features)
logic (actions/hooks)
types (global)
utils (shared)
Mobile-first design
Performance-first
✅ DEFINITION OF DONE
✅ Correct folder usage:
api / actions / hooks / features
types → @/types/types.ts
utils → @/lib/utils
✅ Mobile-first UI
✅ Clean, aesthetic design
✅ Fully typed (no any)
✅ Uses shadcn/ui
✅ Optimized + maintainable

<!-- END:nextjs-agent-rules -->
```

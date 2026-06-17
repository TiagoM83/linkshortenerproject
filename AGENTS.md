# Link Shortener Project - Agent Instructions

This document serves as the index for all coding standards, conventions, and guidelines for this Next.js link shortener project. **LLMs and agents must follow these guidelines when working on this codebase.**

## ⚠️ Critical: Breaking Changes in Next.js 16

**This project uses Next.js 16.x which has significant breaking changes from earlier versions.**

- The App Router is the only routing system (no Pages Router)
- Components are Server Components by default
- API Routes are in `app/api/`
- Read `node_modules/next/dist/docs/` before writing code
- Heed all deprecation notices

## 🚨 MANDATORY: Read Docs Before Coding

**BEFORE generating ANY code for ANY feature, you MUST read the relevant instruction files in the `/docs` directory.** 

This is not optional. The `/docs` directory contains critical guidelines, patterns, and requirements specific to this project. Skipping this step will result in code that violates project standards.

## Project Stack

- **Framework**: Next.js 16.2.9 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Database**: PostgreSQL (Neon serverless) with Drizzle ORM
- **Authentication**: Clerk
- **Styling**: TailwindCSS 4 + shadcn/ui
- **Linting**: ESLint 9 with Next.js config
- **UI Components**: shadcn/ui (based on Radix UI)

## Documentation Index

**ALWAYS refer to the relevant .md file in the `/docs` directory BEFORE writing ANY code. Do not skip this step.**

These files contain project-specific patterns, conventions, and requirements that you must follow:

| Topic | File |
|-------|------|
| Authentication (Clerk) | [docs/auth.md](docs/auth.md) |
| UI Components (shadcn/ui only) | [docs/ui-components.md](docs/ui-components.md) |

## Quick Start for LLMs

**⚠️ CRITICAL: Before coding ANY feature, read the relevant `/docs` file for that feature. This is mandatory.**

When working on this project:

1. **FIRST: Always read the relevant guide in `/docs/`** - Do not skip this step, even if you think you know the pattern
2. **Follow strict TypeScript** - no `any` types, explicit typing everywhere
3. **Use Server Components by default** - mark with `'use client'` only when needed
4. **Organize imports** - external → internal → components → types → styles
5. **Use path aliases** - `@/` prefix for all imports
6. **Database queries go in `lib/db.ts`** - never raw queries in components
7. **Type component props** - separate `types.ts` file for complex props
8. **Test imports and types** - ensure TypeScript is satisfied
9. **Follow naming conventions** - consistent with project patterns
10. **Check for existing patterns** - don't reinvent wheels
11. **Use shadcn/ui for all UI** - do not create custom UI components

## Pre-Commit Checklist

Before submitting code:

- [ ] TypeScript strict mode satisfied (no errors from `npm run lint`)
- [ ] All component props properly typed
- [ ] All database queries use helper functions from `lib/db.ts`
- [ ] Server/Client component distinction is correct
- [ ] Path aliases used (`@/` not relative imports)
- [ ] Naming conventions followed
- [ ] No `any` types introduced
- [ ] Error handling in place
- [ ] Comments explain "why", not "what"
- [ ] No console.log left in production code
- [ ] All UI elements use shadcn/ui components (no custom UI components)

## Common File Locations

| What | Where |
|------|-------|
| Page components | `app/(group)/route/page.tsx` |
| API routes | `app/api/resource/route.ts` |
| React components | `components/ComponentName.tsx` |
| Component types | `components/ComponentName.types.ts` |
| Database helpers | `lib/db.ts` |
| Auth helpers | `lib/auth.ts` |
| Utilities | `lib/utils.ts` |
| Validation | `lib/validation.ts` |
| Custom hooks | `hooks/useHookName.ts` |
| Global types | `types/index.ts` |
| DB schema | `db/schema.ts` |
| DB client | `db/index.ts` |

## Environment Variables

```env
# Server-only (never accessible in browser)
DATABASE_URL=
CLERK_SECRET_KEY=

# Public (accessible in browser)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_API_URL=
```

## Running & Linting

```bash
npm run dev          # Start dev server on http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint (must pass)
```

## Important Notes

### TypeScript Strict Mode
This project has `strict: true` in `tsconfig.json`. All code must:
- Have explicit types (no implicit `any`)
- Distinguish between null/undefined
- Mark optional properties with `?`
- Type all function parameters and returns

### Server Components Default
All components are Server Components unless marked with `'use client'`:
- ✅ Use Server Components for data fetching
- ❌ Don't use hooks in Server Components
- ❌ Don't use browser APIs in Server Components

### Import Order
1. External dependencies (React, Next.js, third-party)
2. Internal utilities and hooks
3. Components
4. Types/interfaces
5. Styles (CSS modules, global)

### Database Queries
- ✅ Create helper functions in `lib/db.ts`
- ✅ Export proper TypeScript types from schema
- ❌ Never have raw SQL in components
- ❌ Never fetch data directly from components (use Server Components or API routes)

## Additional Resources

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Clerk Documentation](https://clerk.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Last Updated**: June 2026  
**Version**: 1.0  
**Next.js**: 16.2.9  
**TypeScript**: Strict Mode

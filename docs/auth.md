# Authentication Guidelines

## Overview

All authentication in this project is handled exclusively by **Clerk**. No other auth methods, libraries, or custom implementations must ever be used.

## ❌ Forbidden

- Custom JWT handling
- NextAuth / Auth.js
- Session cookies managed outside Clerk
- Any other third-party auth library
- Rolling your own auth logic

## Route Protection Rules

| Route | Auth Requirement |
|-------|-----------------|
| `/dashboard` | **Protected** — user must be signed in |
| `/` (homepage) | **Redirects** — signed-in users are sent to `/dashboard` |
| All other routes | Public by default unless explicitly protected |

### Protecting `/dashboard`

Use Clerk middleware or the `auth()` helper to guard `/dashboard`. Unauthenticated users must be redirected to the sign-in modal.

```ts
// middleware.ts (at project root)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
```

### Redirecting Signed-In Users Away from Homepage

In `app/page.tsx`, check auth state server-side and redirect to `/dashboard`:

```ts
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) redirect('/dashboard');

  // render homepage for unauthenticated users
}
```

## Sign In & Sign Up — Modal Only

Sign-in and sign-up flows must **always** open as a Clerk modal. Never navigate to a dedicated sign-in/sign-up page.

```tsx
'use client';
import { SignInButton, SignUpButton } from '@clerk/nextjs';

// ✅ Correct — modal mode
<SignInButton mode="modal">
  <button>Sign in</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign up</button>
</SignUpButton>
```

```tsx
// ❌ Wrong — redirects to a separate page
<SignInButton>
  <button>Sign in</button>
</SignInButton>
```

## Auth Helpers

Use the helpers below from `lib/auth.ts` for any auth-related logic in the app:

| Helper | Context | Purpose |
|--------|---------|---------|
| `auth()` | Server Component / Route Handler | Get `userId`, `sessionId`, session claims |
| `currentUser()` | Server Component | Get full Clerk `User` object |
| `useAuth()` | Client Component | Reactive auth state |
| `useUser()` | Client Component | Reactive current user |

```ts
// lib/auth.ts — centralise any app-specific auth helpers here
import { auth, currentUser } from '@clerk/nextjs/server';

export async function requireAuth() {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthenticated');
  return userId;
}
```

## Environment Variables

```env
# Server-only
CLERK_SECRET_KEY=

# Public
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
```

Never expose `CLERK_SECRET_KEY` to the client. It must remain server-only.

## Clerk Provider

`<ClerkProvider>` must wrap the entire app in `app/layout.tsx`:

```tsx
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

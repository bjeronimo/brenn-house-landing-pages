# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (workspaces) and the task runner is **Turborepo**. Node >= 20 is required.

Root scripts (run from repo root, fan out to all workspaces via Turbo):

- `pnpm dev` — runs `next dev --turbopack` for `apps/web`.
- `pnpm build` — production build of all apps.
- `pnpm lint` — ESLint across workspaces.
- `pnpm typecheck` — `tsc --noEmit` across workspaces.
- `pnpm format` — Prettier write across `**/*.{ts,tsx}`.

To run a script in a single workspace use `pnpm --filter <name> <script>`, e.g. `pnpm --filter web dev` or `pnpm --filter @workspace/ui typecheck`.

### Adding shadcn/ui components

Run from the repo root — the CLI is configured to drop components into the shared UI package, not the app:

```bash
pnpm dlx shadcn@latest add <component> -c apps/web
```

Files land in `packages/ui/src/components/` and are imported via the `@workspace/ui/components/<name>` alias.

## Architecture

### Monorepo layout

- `apps/web` — Next.js 16 app (App Router, React 19, Turbopack). The only consumer app today.
- `packages/ui` — `@workspace/ui`: shared shadcn/ui component library, Tailwind v4 styles, and `cn` util. Source-only package (no build step) — consumers import directly from `src/*` via TS path aliases and the `exports` map in its `package.json`.
- `packages/eslint-config` — `@workspace/eslint-config`: shared flat configs (`./base`, `./next-js`, `./react-internal`).
- `packages/typescript-config` — `@workspace/typescript-config`: shared `tsconfig` bases (`base.json`, `nextjs.json`, `react-library.json`).

### Where styles and tokens live

There is **one** Tailwind v4 stylesheet for the whole monorepo: `packages/ui/src/styles/globals.css`. `apps/web/app/layout.tsx` imports it via `@workspace/ui/globals.css`. Design tokens / CSS variables / `@theme` config belong here, not in the app. The Prettier config also points `tailwindStylesheet` at this file so class sorting matches the shared theme.

### Import aliases

The two `components.json` files intentionally differ:

- `apps/web/components.json` — `components`/`hooks`/`lib` resolve **into the app** (`@/...`); `ui` and `utils` resolve into `@workspace/ui/*`. App-local code lives in `apps/web/{components,hooks,lib}`.
- `packages/ui/components.json` — every alias resolves into `@workspace/ui/*`. New shadcn components added through the CLI follow these mappings.

When adding code, follow this split: shared/reusable primitives go in `packages/ui`; route-specific or app-only composition goes in `apps/web`.

### Theming

`apps/web/components/theme-provider.tsx` wraps the app with `next-themes`. `RootLayout` sets `suppressHydrationWarning` and applies the Geist Sans/Mono font CSS variables — keep both when editing the layout shell.

## Code style

- Prettier: no semicolons, double quotes, 2-space indent, `trailingComma: "es5"`, `printWidth: 80`. `prettier-plugin-tailwindcss` is enabled and recognises `cn` and `cva` as class-list functions.
- ESLint flat config; the root `.eslintrc.js` only sets ignore patterns — actual rules come from each workspace's `eslint.config.js` extending `@workspace/eslint-config`.
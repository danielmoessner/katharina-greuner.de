---
name: netlify-next-upgrade
description: 'Upgrade Next.js in this repo and keep Netlify deploy + Decap CMS (/admin) working. Use when: bumping Next major/minor/canary, fixing npm ERESOLVE/peer deps, removing CMS from build step, verifying netlify.toml + @netlify/plugin-nextjs, and smoke-testing key routes (/ /blog /admin).'
argument-hint: 'Optional: target Next version (e.g. 16, 16.3.0-canary.23).'
user-invocable: true
---

# Netlify + Next.js Upgrade (with Decap /admin)

## What this skill does
- Upgrades `next` (and related deps only when needed)
- Keeps Netlify builds simple (`npm run build` + `@netlify/plugin-nextjs`)
- Keeps Decap CMS working via `public/admin/*` (no CMS bundling step)
- Fixes common upgrade fallout (peer deps, Link API changes, Next config warnings)

## When to use
- You want to bump Next.js (major/minor/canary) and ensure Netlify deploy still works
- You hit `npm ERR! ERESOLVE` / peer dependency conflicts during upgrades
- `/admin` breaks, ORB blocks CDN scripts, or CMS accidentally gets pulled into the build
- You want a repeatable “upgrade → build → smoke test” checklist

## Workflow

### 0) Preconditions
- Node + npm installed
- Repo installs cleanly with `npm install`

### 1) Check what Next versions exist
Run:
- `npm view next dist-tags`
- `npm view next@latest version`
- (Optional) `npm view next@canary version`

If the target major isn’t published (e.g. no `next@17`), you can’t upgrade to it yet.

### 2) Upgrade Next
- Update `package.json` `next` version constraint (keep it simple: `==<major>.*` or a specific canary)
- If the repo still has `eslint-config-next` installed, keep it aligned to the same major as `next`.

Install:
- `npm install`

If you hit peer-dep errors, prefer *fixing the conflicting packages* over `--legacy-peer-deps`.

### 3) Keep Decap CMS out of the build
This repo’s CMS should be static:
- Admin entry: `public/admin/index.html`
- Local Decap bundle: `public/admin/decap-cms.js`
- Config: `public/admin/config.js`

Rules:
- `npm run build` must be just `next build` (no CMS build/bundle step)
- `/admin` should redirect to `/admin/index.html` (commonly via `redirects()` in `next.config.js`)
- Local backend proxy is separate: `npm run cms` (`netlify-cms-proxy-server`)

### 4) Netlify verification
Check [netlify.toml](netlify.toml):
- `command = "npm run build"`
- `[[plugins]] package = "@netlify/plugin-nextjs"`

### 5) Smoke test (local)
- `npm run build`
- `npm run dev -p 3001`

Check in browser:
- `/`
- `/blog`
- `/seminar/<some-slug>`
- `/admin` (should land on `/admin/index.html#/`)

### 6) If something breaks
Use the troubleshooting guide:
- [Troubleshooting](./references/troubleshooting.md)

## Definition of done
- `npm install` succeeds without `--legacy-peer-deps`
- `npm run build` succeeds
- `/admin` loads with local Decap scripts
- No new runtime crashes on `/`, `/blog`, a seminar page

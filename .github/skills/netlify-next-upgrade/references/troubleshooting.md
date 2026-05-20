# Troubleshooting: Netlify + Next upgrade

## npm ERR! ERESOLVE / peer dependency conflicts
Preferred order:
1. Align Next + React versions (check `npm view next@<ver> peerDependencies`).
2. Remove unused dev deps that drag old peer deps (common: CMS build tooling, lint toolchains).
3. Only as a last resort use `npm install --legacy-peer-deps` (Netlify may not use it).

## Next major not available
If `npm view next@<major>` returns 404, that major isn’t published yet.
Use the highest stable (`next@latest`) or optionally canary (`next@canary`).

## /admin is blank or fails to load
Checklist:
- `public/admin/index.html` loads local `/admin/decap-cms.js` (not a CDN)
- `public/admin/config.js` exists and is imported by index.html
- `next.config.js` has a redirect `/admin -> /admin/index.html`
- Run `npm run cms` for local backend support (proxy server)

## ORB / blocked CDN scripts (Chrome “opaque response blocking”)
Fix: vendor Decap bundle locally (as this repo does with `public/admin/decap-cms.js`).

## Next config warnings (invalid keys)
If Next complains about `next.config.js` options being invalid:
- Remove unsupported keys rather than fighting the warning.
- Keep config minimal.

## Dev server corrupted after version hopping
Symptoms: missing `.next/...json`, repeated 500s.
Fix:
- stop dev server
- `rm -rf .next`
- restart `npm run dev`

## next/link warnings or runtime errors
If you see Link deprecations or `<Link><a/></Link>` errors after upgrades:
- Convert to modern API: `<Link href="/path">Text</Link>`
- Avoid `legacyBehavior`
# Troubleshooting: Netlify + Next upgrades

## `npm ERR! ERESOLVE` / peer dependency conflicts
- Prefer adjusting versions over `--legacy-peer-deps`.
- Check:
  - `npm view next@<version> peerDependencies`
  - `npm ls <package>`
- Common culprits:
  - CMS packages that pull old React peers (avoid bundling CMS in the app build).
  - UI libs pinned to older React majors.

## `/admin` fails or CMS doesn’t load
- Ensure `public/admin/index.html` loads `./decap-cms.js` and `./config.js`.
- If CDN scripts are blocked (ORB), keep the local bundle in `public/admin/decap-cms.js`.
- Ensure `/admin` redirects to `/admin/index.html` (and that hash routing `#/` is used).

## Next warnings about `next.config.js` keys
- New Next versions sometimes drop support for config keys.
- Fix by removing unsupported keys rather than silencing warnings.

## Link warnings/errors
- If Next deprecates old Link behavior, update to the modern `<Link>` API.

## Dev server corrupted after multiple upgrades
Symptoms:
- Missing `.next/dev/*` files
- random 500s on `_next/data/*`

Fix:
- Stop dev server
- `rm -rf .next`
- Restart `npm run dev`

## Netlify build failures
- Ensure `netlify.toml` uses `@netlify/plugin-nextjs`.
- Keep build command as `npm run build`.
- Verify Node version in Netlify settings matches your local Node major.

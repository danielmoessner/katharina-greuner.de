# katharina-greuner.de

## Setup

`git clone https://github.com/danielmoessner/katharina-greuner.de.git`
&
`cd katharina-greuner.de`

## Develop

`npm run dev`
&
`npm run cms`

### CMS login (no Netlify)

This site is hosted as a static export on Strato, so **Netlify Identity / git-gateway will not work**.

Decap CMS uses **GitHub OAuth** instead:

- CMS UI: `http://localhost:3001/admin/index.html`
- Config: `public/admin/config.js` (built/checked in from `cms/config.ts`)

You must provide a small OAuth proxy/service (server) for Decap CMS.

1) Create a GitHub OAuth App
- GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
- Homepage URL: `https://katharina-greuner.de`
- Authorization callback URL: `https://YOUR-OAUTH-PROVIDER.example.com/callback`

2) Deploy the OAuth provider
- Recommended (free + fast): **Cloudflare Workers** using the `sterlingwes/decap-proxy` template
	- Repo/docs: https://github.com/sterlingwes/decap-proxy
	- Create a Cloudflare account (free tier)
	- Deploy the worker (either via `npx wrangler deploy` or Git integration in the Cloudflare dashboard)
	- In the Worker settings, add secrets:
		- `GITHUB_OAUTH_ID` (your GitHub OAuth Client ID)
		- `GITHUB_OAUTH_SECRET` (your GitHub OAuth Client Secret)
		- Set `GITHUB_REPO_PRIVATE=1` if the repo is private

	Note: for the `decap-proxy` worker, GitHub OAuth App URLs are typically:
	- Homepage URL: your **proxy** URL (e.g. `https://your-worker.yourname.workers.dev`)
	- Callback URL: your proxy URL + `/callback`

3) Wire it into Decap config
- Set `backend.base_url` + `backend.app_id` in `cms/config.ts` (and keep `public/admin/config.js` in sync)

## Deploy (Strato via SFTP)

This repo is configured for a static Next.js export. `npm run build:static` produces an `out/` folder which can be uploaded to Strato via SFTP.

### GitHub Actions

Workflow: `.github/workflows/deploy-strato-sftp.yml`

Create these GitHub repository secrets:

- `STRATO_SFTP_HOST` (e.g. `ssh.strato.de`)
- `STRATO_SFTP_PORT` (optional, default `22`)
- `STRATO_SFTP_USER`
- `STRATO_SFTP_PASSWORD`
- `STRATO_SFTP_REMOTE_PATH` (remote folder to deploy into, e.g. `/` or `/htdocs` depending on your Strato setup)

Push to `main` (or run the workflow manually) to build and mirror `out/` to the remote path.

### Image optimization (shared hosting)

Because this deploy is a static export (`out/` via SFTP), Next's runtime image optimizer cannot run on Strato shared hosting. The build therefore recompresses `.jpg/.jpeg/.png` files inside `out/` after the static build.

You can tune it via env vars:

- `IMAGE_JPEG_QUALITY` (default `82`)
- `IMAGE_PNG_COMPRESSION_LEVEL` (default `9`)
- `IMAGE_OPTIMIZE_STRICT=true` to fail the build on optimization errors

## Next Steps

Open `http://localhost:3001/`

Admin `http://localhost:3001/admin/index.html`

## Mockups

Inside `other/`

## VSCode Plugins

- Tailwind CSS IntelliSense
- Headwind
- ESLint

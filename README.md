# katharina-greuner.de

## Setup

`git clone https://github.com/danielmoessner/katharina-greuner.de.git`
&
`cd katharina-greuner.de`

## Develop

`npm run dev`
&
`npm run cms`

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

import { build } from "esbuild";

await build({
  entryPoints: ["cms/config.ts"],
  outfile: "public/admin/config.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  target: ["es2020"],
  logLevel: "info",
});

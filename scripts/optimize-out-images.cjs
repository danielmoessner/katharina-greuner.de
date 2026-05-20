/* eslint-disable no-console */

const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const OUT_DIR = path.resolve(process.cwd(), "out");

const JPEG_QUALITY = Number.parseInt(process.env.IMAGE_JPEG_QUALITY || "82", 10);
const PNG_COMPRESSION_LEVEL = Number.parseInt(
  process.env.IMAGE_PNG_COMPRESSION_LEVEL || "9",
  10,
);
const STRICT = (process.env.IMAGE_OPTIMIZE_STRICT || "").toLowerCase() === "true";

async function* walkFiles(dir) {
  const dirHandle = await fs.opendir(dir);
  for await (const dirent of dirHandle) {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* walkFiles(fullPath);
    } else if (dirent.isFile()) {
      yield fullPath;
    }
  }
}

function isOptimizableImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ext === ".jpg" || ext === ".jpeg" || ext === ".png";
}

async function optimizeOne(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const tmpPath = `${filePath}.tmp`;

  const input = sharp(filePath, { failOn: "none" }).rotate();

  let output;
  if (ext === ".jpg" || ext === ".jpeg") {
    output = input.jpeg({
      quality: JPEG_QUALITY,
      mozjpeg: true,
      chromaSubsampling: "4:2:0",
    });
  } else {
    // png
    output = input.png({
      compressionLevel: PNG_COMPRESSION_LEVEL,
      adaptiveFiltering: true,
      palette: true,
    });
  }

  const buffer = await output.toBuffer();
  await fs.writeFile(tmpPath, buffer);
  await fs.rename(tmpPath, filePath);
}

async function main() {
  const startedAt = Date.now();

  try {
    await fs.access(OUT_DIR);
  } catch {
    console.error(`Missing out/ directory at ${OUT_DIR}. Run the static build first.`);
    process.exit(1);
  }

  let checked = 0;
  let optimized = 0;
  let bytesBefore = 0;
  let bytesAfter = 0;
  const errors = [];

  for await (const filePath of walkFiles(OUT_DIR)) {
    checked += 1;

    if (!isOptimizableImage(filePath)) continue;

    // Skip very small files to save time.
    const statBefore = await fs.stat(filePath);
    if (statBefore.size < 8 * 1024) continue;

    bytesBefore += statBefore.size;

    try {
      await optimizeOne(filePath);
      const statAfter = await fs.stat(filePath);
      bytesAfter += statAfter.size;
      optimized += 1;
    } catch (err) {
      errors.push({ filePath, err });
      if (STRICT) throw err;
    }
  }

  const ms = Date.now() - startedAt;
  const saved = bytesBefore - bytesAfter;

  console.log(
    `Image optimization complete: optimized ${optimized} files (checked ${checked}). ` +
      `Saved ${saved > 0 ? saved : 0} bytes in ${ms}ms.`,
  );

  if (errors.length) {
    console.warn(`Warnings: failed to optimize ${errors.length} file(s).`);
    for (const { filePath, err } of errors.slice(0, 10)) {
      console.warn(`- ${path.relative(process.cwd(), filePath)}: ${err?.message || err}`);
    }
    if (errors.length > 10) {
      console.warn(`- ...and ${errors.length - 10} more`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

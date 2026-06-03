/**
 * Generate ALL required favicon/icon sizes from the source logo.png.
 * Uses sharp for all image processing.
 *
 * Strategy for MAXIMUM visible size + crispness:
 *   1. Auto-trim the transparent bounding box of the source mark so empty
 *      canvas padding never shrinks the icon.
 *   2. Re-pad symmetrically to a square and scale the mark to a high fill
 *      ratio (per-context), keeping perfect aspect ratio + center alignment.
 *   3. Sharpen after downscale so 16–48px tab icons stay crisp.
 *   4. Opaque background for Apple / maskable icons (iOS + Android masks
 *      render transparency as solid black, which looks broken & "small").
 *
 * Outputs to public/ (+ src/app/icon.png for the Next.js App Router):
 *   favicon.ico                         – multi-res ICO (16, 32, 48)
 *   favicon-{16..256}.png               – square PNG favicons (transparent)
 *   apple-touch-icon(-152/167/180).png  – Apple touch icons (white bg)
 *   android-chrome-192 / 512            – PWA icons, purpose "any" (transparent)
 *   android-chrome-maskable-192 / 512   – PWA icons, purpose "maskable" (white bg, safe zone)
 *   src/app/icon.png                    – App Router favicon convention (transparent)
 */

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const APP_DIR = path.join(ROOT, "src", "app");
const SRC = path.join(PUBLIC, "images", "logo.png");

const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

// ---- helpers -----------------------------------------------------------

/** Trim the transparent margins once and cache the tight crop. */
let _trimmed = null;
async function trimmedSource() {
  if (!_trimmed) {
    _trimmed = await sharp(fs.readFileSync(SRC))
      .trim({ threshold: 10 })
      .toBuffer();
  }
  return _trimmed;
}

/**
 * Render the mark into a square `size` canvas.
 * @param {number} size       output px (square)
 * @param {number} fill       0–1 fraction of the canvas the mark should occupy
 * @param {object} background sharp colour ({r,g,b,alpha})
 */
async function renderIcon(size, fill, background) {
  const content = Math.max(1, Math.round(size * fill));
  // Fit the trimmed mark inside `content` keeping aspect ratio (no crop).
  const mark = await sharp(await trimmedSource())
    .resize(content, content, {
      fit: "contain",
      background: TRANSPARENT,
      kernel: "lanczos3",
    })
    .toBuffer();

  let pipeline = sharp({
    create: { width: size, height: size, channels: 4, background },
  }).composite([{ input: mark, gravity: "center" }]);

  // Crispen small tab icons after the downscale.
  if (size <= 64) pipeline = pipeline.sharpen({ sigma: 0.6 });

  return pipeline.png({ compressionLevel: 9 }).toBuffer();
}

/** Create a multi-image ICO that embeds PNG frames (modern, widely supported). */
async function createIco(frames) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(frames.length, 4);

  const entries = [];
  const data = [];
  let offset = 6 + frames.length * 16;

  for (const { buf, size } of frames) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    data.push(buf);
    offset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...data]);
}

// ---- main --------------------------------------------------------------

async function main() {
  if (!fs.existsSync(SRC)) {
    console.error(`❌ Source logo not found: ${SRC}`);
    process.exit(1);
  }
  console.log("✅ Source logo found — generating optimised icons…\n");

  // Fill ratios per context (mark area as a fraction of the canvas).
  const FAVICON_FILL = 0.95; // browser tabs / bookmarks — maximise size
  const ANDROID_FILL = 0.92; // PWA "any" purpose
  const APPLE_FILL = 0.8; // iOS rounds + adds gloss → leave a margin
  const MASKABLE_FILL = 0.66; // Android adaptive safe zone (~80% radius)

  const faviconSizes = [16, 32, 48, 64, 72, 96, 128, 144, 152, 192, 256];
  const appleSizes = [152, 167, 180];

  // favicon-NxN.png — transparent, max fill
  const icoFrames = [];
  for (const s of faviconSizes) {
    const buf = await renderIcon(s, FAVICON_FILL, TRANSPARENT);
    fs.writeFileSync(path.join(PUBLIC, `favicon-${s}x${s}.png`), buf);
    if ([16, 32, 48].includes(s)) icoFrames.push({ buf, size: s });
    console.log(`  ✓ favicon-${s}x${s}.png`);
  }

  // favicon.ico — 16/32/48 embedded
  const ico = await createIco(icoFrames);
  fs.writeFileSync(path.join(PUBLIC, "favicon.ico"), ico);
  console.log(`  ✓ favicon.ico (16/32/48, ${(ico.length / 1024).toFixed(1)} KB)`);

  // apple-touch-icon(-NxN).png — opaque white bg (iOS shows transparency as black)
  for (const s of appleSizes) {
    fs.writeFileSync(
      path.join(PUBLIC, `apple-touch-icon-${s}x${s}.png`),
      await renderIcon(s, APPLE_FILL, WHITE),
    );
    console.log(`  ✓ apple-touch-icon-${s}x${s}.png`);
  }
  fs.writeFileSync(
    path.join(PUBLIC, "apple-touch-icon.png"),
    await renderIcon(180, APPLE_FILL, WHITE),
  );
  console.log("  ✓ apple-touch-icon.png (180×180, white)");

  // android-chrome — purpose "any" (transparent, full-bleed)
  for (const s of [192, 512]) {
    fs.writeFileSync(
      path.join(PUBLIC, `android-chrome-${s}x${s}.png`),
      await renderIcon(s, ANDROID_FILL, TRANSPARENT),
    );
    console.log(`  ✓ android-chrome-${s}x${s}.png`);
  }

  // android-chrome maskable — purpose "maskable" (white bg, safe zone)
  for (const s of [192, 512]) {
    fs.writeFileSync(
      path.join(PUBLIC, `android-chrome-maskable-${s}x${s}.png`),
      await renderIcon(s, MASKABLE_FILL, WHITE),
    );
    console.log(`  ✓ android-chrome-maskable-${s}x${s}.png`);
  }

  // src/app/icon.png — Next.js App Router favicon convention
  fs.writeFileSync(
    path.join(APP_DIR, "icon.png"),
    await renderIcon(512, FAVICON_FILL, TRANSPARENT),
  );
  console.log("  ✓ src/app/icon.png (512, transparent)");

  console.log("\n✅ All icons generated successfully!\n");
}

main().catch((err) => {
  console.error("❌ Error generating icons:", err);
  process.exit(1);
});

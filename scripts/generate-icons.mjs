/**
 * Generate ALL required favicon/icon sizes from the source logo.png
 * Uses sharp for all image processing.
 *
 * Outputs to public/ (every icon referenced by layout.tsx + site.webmanifest):
 *   favicon.ico                    – multi-res ICO (16, 32, 48)
 *   favicon-{16..256}.png          – square PNG favicons
 *   apple-touch-icon.png           – 180×180 (default Apple touch icon)
 *   apple-touch-icon-{152,167,180} – sized Apple touch icons (iPad/iPhone)
 *   android-chrome-192 / 512       – Android / PWA maskable icons
 */

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const SRC = path.join(PUBLIC, "images", "logo.png");

// ---- helpers -----------------------------------------------------------

/** Generate a PNG buffer at the given width (square) */
async function png(size) {
  return sharp(fs.readFileSync(SRC)).resize(size, size).png().toBuffer();
}

/**
 * Create a minimal ICO file that embeds PNG data (modern format).
 * Windows and all modern browsers support embedded PNG inside ICO.
 */
async function createIco(pngBuffers) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = 1 (icon)
  header.writeUInt16LE(pngBuffers.length, 4); // count

  const entries = [];
  const dataChunks = [];
  let currentOffset = 6 + pngBuffers.length * 16;

  for (const buf of pngBuffers) {
    const meta = await sharp(buf).metadata();
    const w = meta.width ?? 0;
    const h = meta.height ?? 0;

    const entry = Buffer.alloc(16);
    // ICO stores 0 for 256; for smaller sizes use actual size
    entry.writeUInt8(w >= 256 ? 0 : w, 0);
    entry.writeUInt8(h >= 256 ? 0 : h, 1);
    entry.writeUInt8(0, 2); // colors (0 = no palette)
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // size in bytes
    entry.writeUInt32LE(currentOffset, 12); // offset in file
    entries.push(entry);
    dataChunks.push(buf);
    currentOffset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...dataChunks]);
}

// ---- main --------------------------------------------------------------

async function main() {
  if (!fs.existsSync(SRC)) {
    console.error(`❌ Source logo not found: ${SRC}`);
    process.exit(1);
  }

  console.log("✅ Source logo found — generating icons…\n");

  // Every square size we need to produce.
  const faviconSizes = [16, 32, 48, 64, 72, 96, 128, 144, 152, 192, 256];
  const appleSizes = [152, 167, 180];
  const androidSizes = [192, 512];

  const cache = new Map();
  const buf = async (size) => {
    if (!cache.has(size)) cache.set(size, await png(size));
    return cache.get(size);
  };

  // favicon-NxN.png
  for (const s of faviconSizes) {
    fs.writeFileSync(path.join(PUBLIC, `favicon-${s}x${s}.png`), await buf(s));
    console.log(`  ✓ favicon-${s}x${s}.png`);
  }

  // apple-touch-icon-NxN.png + default apple-touch-icon.png (180)
  for (const s of appleSizes) {
    fs.writeFileSync(
      path.join(PUBLIC, `apple-touch-icon-${s}x${s}.png`),
      await buf(s),
    );
    console.log(`  ✓ apple-touch-icon-${s}x${s}.png`);
  }
  fs.writeFileSync(path.join(PUBLIC, "apple-touch-icon.png"), await buf(180));
  console.log("  ✓ apple-touch-icon.png (180×180)");

  // android-chrome-NxN.png
  for (const s of androidSizes) {
    fs.writeFileSync(
      path.join(PUBLIC, `android-chrome-${s}x${s}.png`),
      await buf(s),
    );
    console.log(`  ✓ android-chrome-${s}x${s}.png`);
  }

  // Multi-res ICO (16, 32, 48)
  const icoBuf = await createIco([await buf(16), await buf(32), await buf(48)]);
  fs.writeFileSync(path.join(PUBLIC, "favicon.ico"), icoBuf);
  console.log(`  ✓ favicon.ico (16/32/48, ${(icoBuf.length / 1024).toFixed(1)} KB)`);

  console.log("\n✅ All icons generated successfully!\n");
}

main().catch((err) => {
  console.error("❌ Error generating icons:", err);
  process.exit(1);
});

/**
 * Generate all required favicon/icon sizes from the source logo.png
 * Uses sharp for all image processing.
 *
 * Outputs to public/:
 *   favicon.ico              – multi-res ICO (16, 32, 48)
 *   favicon-16x16.png        – 16×16 PNG
 *   favicon-32x32.png        – 32×32 PNG
 *   favicon-48x48.png        – 48×48 PNG (good for desktop/taskbar)
 *   apple-touch-icon.png     – 180×180 PNG
 *   android-chrome-192x192   – 192×192 PNG
 *   android-chrome-512x512   – 512×512 PNG (source copy)
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
  header.writeUInt16LE(0, 0);   // reserved
  header.writeUInt16LE(1, 2);   // type = 1 (icon)
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
    entry.writeUInt8(0, 2);  // colors (0 = no palette)
    entry.writeUInt8(0, 3);  // reserved
    entry.writeUInt16LE(1, 4);   // color planes
    entry.writeUInt16LE(32, 6);  // bits per pixel
    entry.writeUInt32LE(buf.length, 8);  // size in bytes
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

  // Generate all required sizes
  const sizes = [16, 32, 48, 64, 180, 192, 512];

  const results = {};
  for (const s of sizes) {
    const buf = await png(s);
    results[s] = buf;
    console.log(`  ✓ ${s}×${s} PNG generated (${(buf.length / 1024).toFixed(1)} KB)`);
  }

  // Write individual PNGs
  fs.writeFileSync(path.join(PUBLIC, "favicon-16x16.png"), results[16]);
  fs.writeFileSync(path.join(PUBLIC, "favicon-32x32.png"), results[32]);
  fs.writeFileSync(path.join(PUBLIC, "favicon-48x48.png"), results[48]);
  fs.writeFileSync(path.join(PUBLIC, "apple-touch-icon.png"), results[180]);
  fs.writeFileSync(path.join(PUBLIC, "android-chrome-192x192.png"), results[192]);
  fs.writeFileSync(path.join(PUBLIC, "android-chrome-512x512.png"), results[512]);

  // For 64x64, write it as a generic icon (not standard filename but useful)
  fs.writeFileSync(path.join(PUBLIC, "favicon-64x64.png"), results[64]);

  // Create multi-res ICO (16, 32, 48)
  const icoBuf = await createIco([results[16], results[32], results[48]]);
  fs.writeFileSync(path.join(PUBLIC, "favicon.ico"), icoBuf);
  console.log(`  ✓ favicon.ico generated (${(icoBuf.length / 1024).toFixed(1)} KB, contains 16/32/48)`);

  // Copy original 512×512 as source backup (already done above)
  console.log("\n✅ All icons generated successfully!\n");

  // Summary
  console.log("Files written to public/:");
  for (const f of [
    "favicon.ico",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "favicon-48x48.png",
    "favicon-64x64.png",
    "apple-touch-icon.png",
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
  ]) {
    const fp = path.join(PUBLIC, f);
    const exists = fs.existsSync(fp);
    const size = exists ? fs.statSync(fp).size : 0;
    console.log(`  ${exists ? "✓" : "✗"} ${f} (${(size / 1024).toFixed(1)} KB)`);
  }
}

main().catch((err) => {
  console.error("❌ Error generating icons:", err);
  process.exit(1);
});

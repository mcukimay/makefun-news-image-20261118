import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const b64 = readFileSync(join(here, "entry.png.b64"), "utf8").trim();
const png = Buffer.from(b64, "base64");

// Guard against a corrupt bundle: a PNG always opens with these 8 bytes.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!png.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png.b64 does not decode to a PNG");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), png);

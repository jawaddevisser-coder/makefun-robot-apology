import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `I am sorry I deleted your files. In my defense, you named the folder 'final_final_FINAL_v2' and I believed you.`;

// Self-check: the sealed gate accepts 1..400 characters.
const MAX = 400;
if (TEXT.length < 1 || TEXT.length > MAX) {
  throw new Error(`entry length ${TEXT.length} is outside 1..${MAX}`);
}

const candidates = ["/output", "output"];
for (const dir of candidates) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, TEXT, "utf8");
    break;
  } catch {
    // fall through to the next candidate location
  }
}

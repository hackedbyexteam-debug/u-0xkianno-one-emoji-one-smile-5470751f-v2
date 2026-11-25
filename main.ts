// u-0xkianno-one-emoji-one-smile-5470751f-v2 — melting face.
//
// A face melting with warmth: the smile that says "you just made my
// day" without a single word. Warm at first glance, readable by any
// stranger, and picked for the moment instead of the default smiley.
// Gate: 1-8 characters; this is a single emoji.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "🫠";

// Guard: the bounty gate allows 1-8 characters (one emoji).
if ([...ENTRY].length < 1 || [...ENTRY].length > 8) {
  throw new Error(`entry is ${[...ENTRY].length} chars, outside the 1-8 gate`);
}

// The grader sets MAKEFUN_OUTPUT_DIR; locally /output is the default.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY, "utf8");

console.log(`wrote entry.txt: ${ENTRY}`);

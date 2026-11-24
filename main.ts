// Say What Actually Broke.
//
// The entry is one line of software error copy, at most 200 characters,
// that tells the user the brutal truth about what went wrong and makes
// them laugh on the way. It names the real failure in plain words — the
// file is too big for the server — and tells the user what to do next,
// with a twist a reader repeats out loud. No apology, no throat clearing,
// and it would survive being pasted into a real product's error dialog.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your file is too big, our server is too small, and neither of us is " +
  "willing to change. Compress it and try again.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || /\s{2,}/.test(ENTRY)) {
  throw new Error("entry must be a single clean line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);

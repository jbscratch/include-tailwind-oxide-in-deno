import { Scanner } from "./tailwindcss-oxide.wasi-browser-deno.ts";
import { join } from "node:path";
import { assert } from "@std/assert";

// How to use scanner:
// https://github.com/tailwindlabs/tailwindcss/blob/fac8cd9deff87b387bd745cec9da48834a28df7f/integrations/oxide/wasm.test.ts

assert(typeof Scanner === "function", "Scanner is not a function");

const scanner = new Scanner({
  sources: [
    {
      base: join(Deno.cwd(), "src"),
      pattern: "**/*",
      negated: false,
    },
  ],
});

assert(typeof scanner.scan === "function", "scanner.scan is not a function");
assert(
  typeof scanner.scanSources === "undefined",
  "scanner.scanSources is not a function",
);

console.log(JSON.stringify(scanner.scan()));

// console.log(scanner.scan_content(""));

import { Scanner } from "./tailwindcss-oxide.wasi-browser-deno.ts";

import { join } from "node:path";

console.log(Scanner);

// How to use scanner:
// https://github.com/tailwindlabs/tailwindcss/blob/fac8cd9deff87b387bd745cec9da48834a28df7f/integrations/oxide/wasm.test.ts

const scanner = new Scanner({
  sources: [
    {
      base: join(Deno.cwd(), "src"),
      pattern: "**/*",
      negated: false,
    },
  ],
});
console.log(JSON.stringify(scanner.scan()));

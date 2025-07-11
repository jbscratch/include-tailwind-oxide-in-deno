// use tailwindcss-iso from npm: not working, due to importing @tailwindcss/oxide for the server-side of the iso package.
//   => this oxide package has a postinstall script, which does only work in deno when using nodeModuleDir: auto, which is not working on deno deploy (non EA)

// use tailwindcss-iso from jsdelivr: not working, due to wrong mime type serving of the wasm file
// import { generateTailwindCSS } from "https://cdn.jsdelivr.net/npm/tailwindcss-iso";

// use custom browser-only build of tailwindcss-iso from jsr:
import { generateTailwindCSS } from "jsr:@bjesuiter/deno-tailwindcss-iso@1.0.5-poc.1";

import { copy, ensureDir, ensureFile, move } from "@std/fs";

const contentString = Deno.readTextFileSync(`./src/index.html`);
const globalCSS = Deno.readTextFileSync(`./src/global.css`);

const css = await generateTailwindCSS({
  content: contentString,
  css: globalCSS,
});

await ensureDir("dist");
await Deno.writeTextFile(`./dist/tailwind.css`, css);

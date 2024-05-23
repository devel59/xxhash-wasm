import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const wasmBytes = Array.from(
  readFileSync(resolve(__dirname, "src/xxhash.wasm"))
);

const output = [
  {
    dir: "cjs",
    format: "cjs",
    sourcemap: true,
    exports: "default",
    entryFileNames: "[name].cjs",
    chunkFileNames: "[name].cjs",
  },
  {
    dir: "esm",
    format: "es",
    sourcemap: true,
    chunkFileNames: "[name].js",
  },
];
const replacements = {
  WASM_PRECOMPILED_BYTES: JSON.stringify(wasmBytes),
};

export default {
  input: {
    async: "src/index.js",
    sync: "src/sync.js",
  },
  output,
  plugins: [
    replace({ values: replacements, preventAssignment: false }),
    babel({ exclude: "node_modules/**", babelHelpers: "bundled" }),
    nodeResolve(),
    terser({ toplevel: true }),
  ],
};

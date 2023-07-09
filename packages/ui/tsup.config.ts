import { defineConfig, Options } from "tsup";

import { globby } from "globby";

export default defineConfig(async (options: Options) => {
  const entryPoints = await globby(["src/**/*.tsx"], {
    ignore: ["**/*.test.tsx", "**/*.spec.tsx", "**/*.stories.tsx"],
  });
  return {
    treeshake: true,
    splitting: true,
    entry: entryPoints,
    format: ["esm"],
    dts: true,
    minify: true,
    clean: true,
    external: ["react"],
    ...options,
  };
});

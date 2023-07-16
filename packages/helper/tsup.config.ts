import type { Options } from 'tsup'
import { defineConfig } from 'tsup'

import { globby } from 'globby'

export default defineConfig(async (options: Options) => {
  const entryPoints = await globby(['src/**/*.ts'], {
    ignore: [],
  })
  return {
    treeshake: true,
    splitting: true,
    entry: entryPoints,
    format: ['esm'],
    dts: true,
    minify: true,
    clean: true,
    external: ['react'],
    ...options,
  }
})

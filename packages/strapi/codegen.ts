import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv'
import { ESLint } from 'eslint'

const scalars = {
  DateTime: 'string',
  I18NLocaleCode: 'string',
}
const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.END_POINT,
  // schema: "./schema.graphql",
  documents: 'src/**/*.gql',
  hooks: {
    afterAllFileWrite: async (file: string) => {
      if (file.endsWith('ts')) {
        const eslint = new ESLint({ fix: true })
        const results = await eslint.lintFiles([file])
        await ESLint.outputFixes(results)
        const formatter = await eslint.loadFormatter('stylish')
        await formatter.format(results)
      }
    },
  },
  generates: {
    './src/generated.ts': {
      plugins: [
        {
          add: {
            content: '// noinspection ES6UnusedImports',
          },
        },
        {
          add: {
            content: 'import type {} from \'graphql\'',
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        scalars,
      },
    },
    './src/schema.graphql': {
      plugins: [
        'schema-ast',
      ],
    },
  },
}
export default config

import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://coco-connect-cms.jan24th.today/graphql',
  // schema: "./schema.graphql",
  documents: 'src/**/*.gql',
  generates: {
    './src/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        scalars: {},
      },
    },
    './src/schema.graphql': {
      plugins: [
        'schema-ast',
      ],
      config: {
        scalars: {},
      },
    },
  },
}
export default config

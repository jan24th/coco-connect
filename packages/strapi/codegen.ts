import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://coco-connect-cms.jan24th.today/graphql",
  // schema: "./schema.graphql",
  documents: "src/**/*.gql",
  generates: {
    "./src/generated.ts": {
      plugins: [
        {
          add: {
            content:
              'import type { DocumentNode } from "graphql/language/ast";',
          },
        },
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        scalars: {},
      },
    },
  },
};

export default config;

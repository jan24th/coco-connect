import type { Preview } from "@storybook/react";
import "../src/tailwind-input/globals.css";
import { withThemeByDataAttribute } from "@storybook/addon-styling";
import "ui/styles.css";

/* snipped for brevity */

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
    attributeName: "class",
  }),
];
const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
      router: {
        basePath: "/profile",
      },
      navigation: {
        pathname: "/profile",
        query: {
          user: "santa",
        },
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

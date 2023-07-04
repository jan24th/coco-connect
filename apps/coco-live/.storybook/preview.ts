import type { Preview } from "@storybook/react";
import "./tailwind-output.css"; // replace with the name of your tailwind css fileName

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

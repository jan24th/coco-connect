import type { Preview } from "@storybook/react";
import "../src/tailwind-input/globals.css";
import {withThemeByDataAttribute, withThemeFromJSXProvider} from "@storybook/addon-styling";
import "ui/styles.css";
import {PropsWithChildren} from "react";
import {Roboto} from "next/font/google";
import {clsx} from "clsx";

/* snipped for brevity */
const robot = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
})
export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
    attributeName: "class",
  }),
  withThemeFromJSXProvider({
    Provider:({children}:PropsWithChildren)=><div className={clsx(robot.variable,"font-sans")} >{children}</div>
  })
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

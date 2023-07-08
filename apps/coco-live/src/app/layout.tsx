import "../tailwind-input/globals.css";
import "ui/styles.css";
import { Roboto } from "next/font/google";
import { CcHeader } from "../components/molecules/CcHeader";
import clsx from "clsx";
import React from "react";
import { CcThemeProviders } from "../components/atom/CcTheme";

const robot = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*todo:locale=>fonts chinese*/}
      <body
        className={clsx(
          `${robot.variable} font-sans`,
          "min-h-screen dark:text-zinc-100 text-zinc-800"
        )}
      >
        <CcThemeProviders>
          <CcHeader />
          <div className="container">{children}</div>
        </CcThemeProviders>
      </body>
    </html>
  );
}

"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";
import { ThemeSwitch } from "ui";

const DEFAULT_THEME = "dark";
export const CcThemeProviders = ({ children }: PropsWithChildren) => (
  <ThemeProvider defaultTheme={DEFAULT_THEME} attribute="class">
    {children}
  </ThemeProvider>
);
const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};

export const CcTheme = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  return <ThemeSwitch theme={theme} setTheme={setTheme} enabled={mounted} />;
};

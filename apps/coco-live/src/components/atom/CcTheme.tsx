"use client";
import { Switch } from "@headlessui/react";
import { Moon, Sun } from "react-feather";
import { ThemeProvider, useTheme } from "next-themes";
import { motion } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

const positionClass = "absolute inset-0 flex justify-center items-center";
const active = { opacity: 1, y: 0 };
const hideSun = { opacity: 0, y: -16 };
const hideMoon = { opacity: 0, y: 16 };
const transition = {
  duration: 0.5,
  type: "spring",
  damping: 10,
  stiffness: 100,
};
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
  const enabled = theme === "light";
  const mounted = useMounted();
  if (!mounted) {
    return (
      <div className="w-4 h-4 relative">
        <Sun
          className="stroke-current absolute right-0 top-0"
          size={8}
          strokeWidth="3"
        />
        <Moon
          className="stroke-current absolute left-0 bottom-0"
          size={8}
          strokeWidth="3"
        />
      </div>
    );
  }
  return (
    <Switch
      checked={enabled}
      onChange={() => setTheme(enabled ? "dark" : "light")}
      className="w-4 h-4 relative"
    >
      <motion.span animate={theme}>
        <motion.span
          className={positionClass}
          initial={hideSun}
          variants={{
            dark: hideSun,
            light: active,
          }}
          transition={transition}
        >
          <Sun className="stroke-current" size={16} strokeWidth="2" />
        </motion.span>
        <motion.span
          className={positionClass}
          initial={hideMoon}
          variants={{
            dark: active,
            light: hideMoon,
          }}
          transition={transition}
        >
          <Moon className="stroke-current" size={16} strokeWidth="2" />
        </motion.span>
      </motion.span>

      <span className="sr-only">
        toggle theme to {enabled ? "dark" : "light"}
      </span>
    </Switch>
  );
};

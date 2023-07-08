import { Switch } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "react-feather";
import { useEffect, useState } from "react";

const positionClass = "absolute inset-0 flex justify-center items-center";
const active = { opacity: 1, y: 0 };
const hideSun = { opacity: 0, y: -16 };
const hideMoon = { opacity: 0, y: 16 };
const transition = {
  duration: 0.2,
  type: "spring",
  damping: 10,
  stiffness: 100,
};

export const ThemeSwitch = ({
  theme,
  setTheme,
  enabled = true,
}: {
  theme: string;
  setTheme: (v: string) => void;
  enabled?: boolean;
}) => {
  const isLight = theme === "light";
  const [flag, setFlag] = useState(enabled);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(enabled);
    }, transition.duration * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [enabled]);
  if (!flag)
    return (
      <AnimatePresence>
        {!enabled && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={isLight ? hideMoon : hideSun}
            transition={transition}
            className="w-4 h-4 relative"
          >
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
            <span className="sr-only">toggle theme is not enabled</span>
          </motion.div>
        )}
      </AnimatePresence>
    );
  return (
    <Switch
      checked={isLight}
      onChange={() => setTheme(isLight ? "dark" : "light")}
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
        toggle theme to {isLight ? "dark" : "light"}
      </span>
    </Switch>
  );
};

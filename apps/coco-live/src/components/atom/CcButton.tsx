import React, { PropsWithChildren } from "react";
import { clsx } from "clsx";

interface CcButtonProps {
  theme?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const CcButton = ({
  theme = "primary",
  size = "medium",
  label,
  ...props
}: PropsWithChildren<CcButtonProps>) => {
  return (
    <button
      type="button"
      className={clsx(theme === "primary" ? "bg-yellow-400" : "bg-red-500")}
      {...props}
    >
      {label}
    </button>
  );
};

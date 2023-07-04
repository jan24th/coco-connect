import React, { FC } from "react";
import { clsx } from "clsx";

type CcButtonProps = {
  theme?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
};

export const CcButton: FC<CcButtonProps> = ({
  theme = "primary",
  size = "medium",
  label,
  ...props
}) => {
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
